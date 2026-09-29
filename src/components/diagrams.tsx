import type { Diagram } from "@/data/types";

type Node = { label: string; sub?: string; tone?: "default" | "db" | "cache" | "queue" | "client" };

const toneClass: Record<NonNullable<Node["tone"]>, string> = {
  default: "border-border bg-surface",
  client: "border-sky-300 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/40",
  db: "border-violet-300 bg-violet-50 dark:border-violet-800 dark:bg-violet-950/40",
  cache: "border-red-300 bg-red-50 dark:border-red-900 dark:bg-red-950/40",
  queue: "border-orange-300 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/40",
};

function Box({ node }: { node: Node }) {
  return (
    <div className={`rounded-lg border px-3 py-2 text-center ${toneClass[node.tone ?? "default"]}`}>
      <div className="text-sm font-medium">{node.label}</div>
      {node.sub && <div className="text-xs text-muted">{node.sub}</div>}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center px-1 text-subtle">
      {label && <span className="mb-0.5 text-[11px] leading-none whitespace-nowrap text-muted">{label}</span>}
      <svg viewBox="0 0 32 10" className="h-2.5 w-8" aria-hidden>
        <path d="M0 5h28M24 1l5 4-5 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function Flow({ items }: { items: (Node | { arrow: string })[] }) {
  return (
    <div className="flex items-center overflow-x-auto pb-1">
      {items.map((item, i) => ("arrow" in item ? <Arrow key={i} label={item.arrow} /> : <Box key={i} node={item} />))}
    </div>
  );
}

function Panel({ title, tone, children, note }: { title: string; tone: "bad" | "good"; children: React.ReactNode; note: string }) {
  return (
    <div className="min-w-0 flex-1 rounded-xl border border-border bg-background p-4">
      <p className={`mb-3 text-sm font-semibold ${tone === "bad" ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}>
        {title}
      </p>
      <div className="space-y-3">{children}</div>
      <p className="mt-3 text-sm text-muted text-pretty">{note}</p>
    </div>
  );
}

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <figure className="rounded-xl border border-border bg-surface p-4 sm:p-5">
      <figcaption className="mb-4 font-medium">{title}</figcaption>
      {children}
    </figure>
  );
}

function NoCacheVsCacheAside() {
  const req = "GET /api/v1/products/best-sellers";
  return (
    <Frame title="Sem cache x Cache-Aside">
      <p className="mb-3 font-mono text-xs text-muted">{req}</p>
      <div className="flex flex-col gap-3 lg:flex-row">
        <Panel title="Sem cache" tone="bad" note="Toda requisição vai ao banco — a mesma consulta pesada roda milhares de vezes.">
          <Flow items={[{ label: "Clientes", sub: "×1000 req", tone: "client" }, { arrow: "" }, { label: "API" }, { arrow: "query" }, { label: "Banco", tone: "db" }]} />
        </Panel>
        <Panel title="Cache-Aside" tone="good" note="A API consulta o cache primeiro. Só em caso de miss busca no banco e grava o resultado no cache.">
          <Flow items={[{ label: "Clientes", sub: "×1000 req", tone: "client" }, { arrow: "" }, { label: "API" }, { arrow: "1. get" }, { label: "Redis", sub: "hit ✓", tone: "cache" }]} />
          <Flow items={[{ label: "API", sub: "miss" }, { arrow: "2. query" }, { label: "Banco", tone: "db" }, { arrow: "3. set" }, { label: "Redis", tone: "cache" }]} />
        </Panel>
      </div>
    </Frame>
  );
}

function SyncVsAsync() {
  return (
    <Frame title="Processamento síncrono x assíncrono">
      <div className="flex flex-col gap-3 lg:flex-row">
        <Panel
          title="Sem processamento assíncrono"
          tone="bad"
          note="O cliente espera tudo terminar — enviar e-mail, gerar PDF, chamar serviços externos — antes de receber a resposta."
        >
          <Flow items={[{ label: "Cliente", tone: "client" }, { arrow: "POST" }, { label: "API", sub: "e-mail + PDF + ..." }, { arrow: "~5 s" }, { label: "Resposta" }]} />
        </Panel>
        <Panel
          title="Com processamento assíncrono"
          tone="good"
          note="A API só publica uma mensagem na fila e responde na hora. Workers processam o trabalho pesado em segundo plano."
        >
          <Flow items={[{ label: "Cliente", tone: "client" }, { arrow: "POST" }, { label: "API" }, { arrow: "~50 ms" }, { label: "202 Accepted" }]} />
          <Flow items={[{ label: "API" }, { arrow: "publica" }, { label: "Fila", sub: "RabbitMQ", tone: "queue" }, { arrow: "consome" }, { label: "Worker" }]} />
        </Panel>
      </div>
    </Frame>
  );
}

function Code({ children, label }: { children: string; label: string }) {
  return (
    <div className="min-w-0 flex-1">
      <p className="mb-1.5 text-xs font-medium text-muted">{label}</p>
      <pre className="overflow-x-auto rounded-lg bg-stone-950 p-4 font-mono text-[13px] leading-relaxed text-stone-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function NPlusOne() {
  return (
    <Frame title="O problema N+1">
      <p className="mb-4 text-sm text-muted text-pretty">
        Uma consulta para buscar a lista e, depois, <strong className="text-foreground">uma consulta extra para cada item</strong>. Com 500
        usuários, são 501 idas ao banco.
      </p>
      <div className="flex flex-col gap-4 lg:flex-row">
        <Code label="❌ N+1 — uma consulta por usuário">{`import sqlite3

conn = sqlite3.connect('exemplo.db')
cursor = conn.cursor()

cursor.execute("SELECT id, name FROM users")
users = cursor.fetchall()

for user_id, name in users:
    cursor.execute(
        "SELECT title FROM articles WHERE user_id = ?",
        (user_id,),
    )
    articles = cursor.fetchall()
    # 1 + N consultas...`}</Code>
        <Code label="✅ Uma única consulta com JOIN">{`cursor.execute("""
    SELECT u.id, u.name, a.title
    FROM users u
    LEFT JOIN articles a ON a.user_id = u.id
""")
rows = cursor.fetchall()

# SQL executado pelo código N+1:
# SELECT id, name, email FROM users;
# SELECT title FROM articles WHERE user_id = 1;
# SELECT title FROM articles WHERE user_id = 2;
# ...
# SELECT title FROM articles WHERE user_id = 500;`}</Code>
      </div>
    </Frame>
  );
}

function TestPyramid() {
  const levels = [
    { label: "Funcionais / E2E", pct: "~5%", w: "w-1/3", cls: "bg-rose-500" },
    { label: "Integração", pct: "~15%", w: "w-2/3", cls: "bg-amber-500" },
    { label: "Unitários", pct: "~80%", w: "w-full", cls: "bg-emerald-600" },
  ];
  return (
    <Frame title="Pirâmide de testes">
      <div className="mx-auto flex max-w-md flex-col items-center gap-1.5">
        {levels.map((l) => (
          <div key={l.label} className={`${l.w} ${l.cls} flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-white`}>
            <span>{l.label}</span>
            <span className="tabular-nums opacity-90">{l.pct}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted">
        Quanto mais alto, mais lento e caro de manter. Quanto mais baixo, mais rápido e isolado.
      </p>
    </Frame>
  );
}

const registry: Record<Diagram, () => React.ReactNode> = {
  "no-cache-vs-cache-aside": NoCacheVsCacheAside,
  "sync-vs-async": SyncVsAsync,
  "n-plus-one": NPlusOne,
  "test-pyramid": TestPyramid,
};

export function DiagramView({ id }: { id: Diagram }) {
  const Component = registry[id];
  return <Component />;
}
