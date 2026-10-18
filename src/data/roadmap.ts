import { RENATO } from "./library";
import type { Phase, Topic } from "./types";

const yt = (youtubeId: string, title: string, channel = RENATO) => ({ youtubeId, title, channel });

// ─────────────────────────────────────────────────────────────
// Etapa 1 — Fundamentos
// ─────────────────────────────────────────────────────────────
const fundamentos: Topic[] = [
  {
    slug: "fundamentos-da-computacao",
    title: "Fundamentos da Computação",
    summary:
      "Antes de qualquer linguagem ou framework, entenda a máquina: como o computador executa instruções, como os programas usam a memória e o que o sistema operacional faz por você.",
    groups: [
      {
        subtopics: [
          { title: "Como funciona um computador" },
          { title: "Como os programas rodam na memória" },
          { title: "Como os processadores funcionam" },
          { title: "Sistemas Operacionais" },
          { title: "Diferença entre linguagem compilada x interpretada" },
          { title: "Linux (Ubuntu ou Debian)" },
        ],
      },
    ],
    figures: [
      {
        image: "diagramas/como-linguagens-funcionam",
        alt: "Diagrama comparando o caminho do código-fonte até o hardware em C++/Go (compilado), Java (bytecode + JVM) e Python (interpretado)",
        caption: "Como C++, Java e Python executam: compilação, bytecode + JIT e interpretação.",
        credit: "ByteByteGo",
      },
    ],
    courses: [
      { title: "Week 1: Hardware — CS50's Understanding Technology", url: "https://cs50.harvard.edu/technology/2017/weeks/1/", source: "Harvard", lang: "en" },
      { title: "Week 2: Programming Languages — CS50 for Business Professionals", url: "https://cs50.harvard.edu/business/2017/weeks/2/", source: "Harvard", lang: "en" },
      { title: "Curso de Linux — Primeiros Passos", url: "https://www.youtube.com/watch?v=6nN2EglOqCM", source: "Curso em Vídeo", lang: "pt" },
    ],
    articles: [
      { title: "Linux Command Cheat Sheet: 100 Essential Commands", url: "https://medium.com/@prateek.malhotra004/linux-command-cheat-sheet-100-essential-commands-for-system-administration-and-development-6ee91049d71a", source: "Medium", lang: "en" },
    ],
  },
  {
    slug: "escolha-uma-linguagem",
    title: "Escolha uma linguagem",
    summary:
      "Escolha uma linguagem e vá fundo nela. O que importa é aprender lógica, algoritmos e paradigmas — esses conceitos se transferem para qualquer outra linguagem depois.",
    choose: {
      label: "Escolha uma",
      options: ["JavaScript", "Python", "C#", "Java", "PHP", "Ruby", "Go", "Rust", "C++"],
    },
    groups: [
      {
        subtopics: [
          { title: "Lógica de programação" },
          { title: "Algoritmos e estruturas de dados" },
          {
            title: "Paradigmas de programação",
            items: ["Programação Procedural", "Programação Funcional", "Programação Orientada a Objetos"],
          },
        ],
      },
      {
        title: "Pilares da Orientação a Objetos",
        subtopics: [{ title: "Abstração" }, { title: "Herança" }, { title: "Polimorfismo" }, { title: "Encapsulamento" }],
      },
    ],
    courses: [
      { title: "CS50x — Introduction to Computer Science", url: "https://cs50.harvard.edu/x/", source: "Harvard", lang: "en" },
      { title: "CS50's Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/", source: "Harvard", lang: "en" },
    ],
  },
  {
    slug: "sql-e-bancos-relacionais",
    title: "SQL e Bancos Relacionais",
    summary:
      "Praticamente todo sistema persiste dados. Aprenda SQL, modelagem com relacionamentos e as garantias que um banco relacional oferece (ACID e transações).",
    choose: { label: "Escolha um banco", options: ["PostgreSQL", "MySQL", "MariaDB", "SQLite", "Oracle"] },
    groups: [
      {
        subtopics: [
          { title: "Operações de CRUD" },
          { title: "Relacionamentos" },
          { title: "ACID" },
          { title: "Transações" },
        ],
      },
    ],
    courses: [
      { title: "CS50's Introduction to Databases with SQL", url: "https://cs50.harvard.edu/sql/2024/", source: "Harvard", lang: "en" },
      { title: "SQLBolt — Learn SQL", url: "https://sqlbolt.com/lesson/select_queries_introduction", source: "SQLBolt", lang: "en" },
    ],
    articles: [
      { title: "ACID Properties in DBMS", url: "https://www.geeksforgeeks.org/acid-properties-in-dbms/", source: "GeeksforGeeks", lang: "en" },
      { title: "Transaction in DBMS", url: "https://www.geeksforgeeks.org/transaction-in-dbms/", source: "GeeksforGeeks", lang: "en" },
      { title: "Indexing in Databases", url: "https://www.geeksforgeeks.org/indexing-in-databases-set-1/", source: "GeeksforGeeks", lang: "en" },
    ],
  },
  {
    slug: "versionamento-de-codigo",
    title: "Versionamento de Código",
    summary:
      "Git é obrigatório no dia a dia: commits, branches, merge, rebase e resolução de conflitos. É a base para trabalhar em equipe.",
    groups: [{ subtopics: [{ title: "Git" }, { title: "Branches, merge e rebase" }, { title: "Resolução de conflitos" }] }],
    articles: [
      { title: "Lista de comandos úteis do Git", url: "https://gist.github.com/leocomelli/2545add34e4fec21ec16", source: "GitHub Gist", lang: "pt" },
    ],
  },
  {
    slug: "repositorios-remotos",
    title: "Repositórios Remotos",
    summary:
      "Hospede seu código, abra pull requests, faça code review e mantenha um portfólio público. Os conceitos são os mesmos entre as plataformas.",
    choose: { label: "Escolha uma plataforma", options: ["GitHub", "GitLab", "Bitbucket"] },
  },
  {
    slug: "redes-e-internet",
    title: "Redes e Internet",
    summary:
      "O que acontece entre digitar um endereço e a página aparecer: roteamento de pacotes, domínios, DNS e a estrutura de uma URL.",
    groups: [
      {
        subtopics: [
          { title: "Como a internet funciona" },
          { title: "O que é um nome de domínio" },
          { title: "Como funciona um DNS" },
          { title: "O que é uma URL (estrutura)" },
        ],
      },
    ],
    courses: [
      { title: "Week 2: Internet — CS50's Understanding Technology", url: "https://cs50.harvard.edu/technology/2017/weeks/2/", source: "Harvard", lang: "en" },
    ],
    articles: [
      { title: "Como a Internet funciona?", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work", source: "MDN", lang: "pt" },
      { title: "What is a Domain Name?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name", source: "MDN", lang: "en" },
      { title: "How DNS works", url: "https://howdns.works/ep1/", source: "howdns.works", lang: "en" },
      { title: "What is a URL?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL", source: "MDN", lang: "en" },
      { title: "Identificando recursos na web", url: "https://developer.mozilla.org/pt-BR/docs/orphaned/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#esquema_ou_protocolo", source: "MDN", lang: "pt" },
      { title: "What are hyperlinks?", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks", source: "MDN", lang: "en" },
    ],
  },
  {
    slug: "fundamentos-da-web",
    title: "Fundamentos da Web",
    summary:
      "O protocolo HTTP, o modelo cliente x servidor, o papel do servidor web e como o cache acelera as respostas.",
    groups: [
      {
        subtopics: [
          { title: "Protocolo HTTP" },
          { title: "Arquitetura cliente x servidor" },
          { title: "O que é um servidor web" },
          { title: "Cache" },
        ],
      },
    ],
    courses: [
      { title: "Week 5: Web Development — CS50's Understanding Technology", url: "https://cs50.harvard.edu/technology/2017/weeks/5/", source: "Harvard", lang: "en" },
      { title: "CS50's Web Programming with Python and JavaScript", url: "https://cs50.harvard.edu/web/", source: "Harvard", lang: "en" },
    ],
    articles: [
      { title: "Como a Web funciona", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works", source: "MDN", lang: "pt" },
      { title: "Diferença entre página web, site, servidor web e mecanismo de busca", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#servidor_web", source: "MDN", lang: "pt" },
      { title: "Uma visão geral do HTTP", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview", source: "MDN", lang: "pt" },
      { title: "Visão geral do cliente-servidor", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview", source: "MDN", lang: "pt" },
      { title: "O que é um servidor web?", url: "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server", source: "MDN", lang: "pt" },
      { title: "Servidor web x servidor de aplicações", url: "https://aws.amazon.com/pt/compare/the-difference-between-web-server-and-application-server/", source: "AWS", lang: "pt" },
      { title: "HTTP caching", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Caching", source: "MDN", lang: "pt" },
    ],
  },
  {
    slug: "apis-e-integracoes",
    title: "APIs & Integrações",
    summary:
      "Sistemas conversam por APIs. Domine REST sobre HTTP — métodos, status codes, JSON, paginação e versionamento — e conheça as alternativas.",
    groups: [
      {
        subtopics: [
          { title: "O que é uma API" },
          { title: "APIs REST e RESTful" },
          { title: "JSON — JavaScript Object Notation" },
          { title: "Métodos HTTP (GET, POST, PUT, DELETE...)" },
          { title: "HTTP — códigos de status de resposta" },
          { title: "HATEOAS" },
          { title: "Paginação, filtros e versionamento em APIs" },
        ],
      },
      {
        title: "Bom saber",
        subtopics: [
          { title: "gRPC", optional: true },
          { title: "GraphQL", optional: true },
          { title: "HTTP/3 (QUIC)", optional: true },
        ],
      },
    ],
    articles: [
      { title: "O que é uma API?", url: "https://aws.amazon.com/pt/what-is/api/", source: "AWS", lang: "pt" },
      { title: "O que é a API RESTful?", url: "https://aws.amazon.com/pt/what-is/restful-api/", source: "AWS", lang: "pt" },
      { title: "Saiba porque o JSON domina a Web", url: "https://www.oracle.com/br/database/what-is-json/", source: "Oracle", lang: "pt" },
      { title: "Detailed Overview of HTTP Methods", url: "https://medium.com/@reetesh043/detailed-overview-of-http-methods-271e88848b0d", source: "Medium", lang: "en" },
      { title: "HTTP Status Code Overview", url: "https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/health-diagnostic-performance/http-status-code", source: "Microsoft Learn", lang: "en" },
      { title: "O que é HATEOAS?", url: "https://www.treinaweb.com.br/blog/o-que-e-hateoas", source: "TreinaWeb", lang: "pt" },
      { title: "How do we Perform Pagination in API Design?", url: "https://bytebytego.com/guides/how-do-we-perform-pagination-in-api-design/", source: "ByteByteGo", lang: "en" },
      { title: "Como versionar uma API REST", url: "https://www.freecodecamp.org/portuguese/news/como-versionar-uma-api-rest/", source: "freeCodeCamp", lang: "pt" },
      { title: "gRPC x REST", url: "https://aws.amazon.com/pt/compare/the-difference-between-grpc-and-rest/", source: "AWS", lang: "pt" },
      { title: "gRPC em aplicações cloud-native", url: "https://learn.microsoft.com/pt-br/dotnet/architecture/cloud-native/grpc", source: "Microsoft Learn", lang: "pt" },
      { title: "API GraphQL vs. API REST", url: "https://aws.amazon.com/pt/compare/the-difference-between-graphql-and-rest/", source: "AWS", lang: "pt" },
      { title: "O que é HTTP/3", url: "https://kinsta.com/pt/blog/http3/", source: "Kinsta", lang: "pt" },
    ],
  },
  {
    slug: "seguranca",
    title: "Segurança",
    summary:
      "O básico que todo dev precisa saber para não abrir brechas: HTTPS, autenticação x autorização, sessões e cookies, CORS e as vulnerabilidades mais comuns.",
    groups: [
      {
        subtopics: [
          { title: "HTTP vs HTTPS" },
          { title: "Como funciona um sistema de login" },
          { title: "Autenticação e autorização" },
          { title: "CORS" },
          { title: "Cookies" },
          { title: "Sessão" },
          { title: "VPN" },
          { title: "Firewall" },
        ],
      },
    ],
    courses: [
      { title: "Week 4: Security — CS50's Understanding Technology", url: "https://cs50.harvard.edu/technology/2017/weeks/4/", source: "Harvard", lang: "en" },
    ],
    articles: [
      { title: "Por que o HTTP não é seguro?", url: "https://www.cloudflare.com/pt-br/learning/ssl/why-is-http-not-secure/", source: "Cloudflare", lang: "pt" },
      { title: "Autenticação x autorização — qual é a diferença?", url: "https://www.freecodecamp.org/portuguese/news/autenticacao-x-autorizacao-qual-e-a-diferenca/", source: "freeCodeCamp", lang: "pt" },
      { title: "JSON Web Tokens", url: "https://jwt.io/", source: "jwt.io", lang: "en" },
      { title: "Entendendo problemas de CORS", url: "https://learn.microsoft.com/pt-br/entra/identity/app-proxy/application-proxy-understand-cors-issues", source: "Microsoft Learn", lang: "pt" },
      { title: "Using HTTP cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies", source: "MDN", lang: "en" },
      { title: "Uma típica sessão HTTP", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Session", source: "MDN", lang: "pt" },
      { title: "Rate Limiting Fundamentals", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals", source: "ByteByteGo", lang: "en" },
      { title: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/", source: "OWASP", lang: "en" },
    ],
  },
  {
    slug: "mvc-e-frameworks",
    title: "Model-View-Controller (MVC)",
    summary:
      "Entenda o padrão MVC e escolha um framework web da sua linguagem. Framework acelera, mas os fundamentos anteriores é que fazem você entender o que ele faz por baixo.",
    choose: {
      label: "Escolha um framework",
      options: ["NestJS", "Laravel", "Spring Boot", "Flask", "Symfony", "Ruby on Rails", "ASP.NET", "Django"],
    },
  },
  {
    slug: "docker",
    title: "Docker",
    summary:
      "Contêineres padronizam o ambiente do desenvolvimento à produção. Saiba criar imagens, rodar e orquestrar serviços localmente.",
    groups: [
      {
        subtopics: [
          { title: "Conceitos de conteinerização" },
          { title: "Comandos básicos" },
          { title: "Imagens / Volumes / Network" },
          { title: "Dockerfile" },
          { title: "Docker Compose" },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Etapa 2 — Engenharia de Software
// ─────────────────────────────────────────────────────────────
const engenharia: Topic[] = [
  {
    slug: "mais-sobre-bancos-de-dados",
    title: "Mais sobre Bancos de Dados",
    summary:
      "Nem todo dado cabe bem em tabelas. Conheça os principais tipos de bancos não relacionais e quando cada um faz sentido.",
    groups: [
      {
        title: "Bancos não relacionais",
        subtopics: [
          { title: "Document Store", items: ["MongoDB"] },
          { title: "Key-Value Store" },
          { title: "Graph Database" },
          { title: "Search Engine" },
        ],
      },
    ],
    articles: [
      { title: "Types of NoSQL databases", url: "https://docs.aws.amazon.com/whitepapers/latest/choosing-an-aws-nosql-database/types-of-nosql-databases.html", source: "AWS", lang: "en" },
    ],
  },
  {
    slug: "clean-code",
    title: "Clean Code",
    summary:
      "Código é lido muito mais vezes do que escrito. Princípios práticos para deixar o código legível, simples e fácil de mudar.",
    groups: [
      {
        subtopics: [
          { title: "Use nomes significativos" },
          { title: "Mantenha classes, métodos e arquivos pequenos" },
          { title: "A regra do escoteiro" },
          { title: "Comente apenas o necessário" },
          { title: "Formatação e estilo de código" },
          { title: "Evite abstrações precipitadas e refatore sempre" },
          { title: "Seja consistente" },
          { title: "Minimize a complexidade ciclomática" },
          { title: "Prefira exceções a retorno de códigos de erro" },
          { title: "Evite passar booleanos e nulos" },
          { title: "O que são funções puras" },
          { title: "O que são testes de unidade" },
        ],
      },
    ],
    books: ["codigo-limpo"],
    videos: [yt("yZRd_EWUs1g", "SOLID, Clean Code e Design Patterns: Pare de Buscar o Código Perfeito!")],
  },
  {
    slug: "orientacao-a-objetos-avancada",
    title: "Orientação a Objetos Avançada",
    summary:
      "Vá além dos quatro pilares: coesão, acoplamento, composição sobre herança e como desenhar objetos que protegem suas regras. É a base para SOLID, Object Calisthenics e Design Patterns.",
    groups: [
      {
        subtopics: [
          { title: "Coesão e acoplamento" },
          { title: "Composição sobre herança" },
          { title: "Lei de Demeter" },
          { title: "Tell, Don't Ask" },
        ],
      },
    ],
  },
  {
    slug: "principios-solid",
    title: "Princípios SOLID",
    summary:
      "Cinco princípios de design orientado a objetos que tornam o código mais fácil de estender, testar e manter.",
    groups: [
      {
        subtopics: [
          { title: "Single Responsibility Principle" },
          { title: "Open/Closed Principle" },
          { title: "Liskov Substitution Principle" },
          { title: "Interface Segregation Principle" },
          { title: "Dependency Inversion Principle" },
        ],
      },
    ],
    videos: [
      yt("EWHTE1dQM4U", "SOLID: O Que Ninguém Te Explicou Sobre Responsabilidade Única!"),
      yt("T6pF7BfAPIo", "SOLID: Open Closed Principle + Strategy Pattern"),
      yt("f6-5ANuTkys", "O Princípio SOLID mais CRÍTICO de TODOS! Princípio de Substituição de Liskov"),
      yt("jHbI9ej5O1Y", "Domine o Interface Segregation Principle"),
      yt("s8g32ePcPps", "SOLID: Inversão de Dependências + Padrão de Projeto Adapter"),
    ],
  },
  {
    slug: "object-calisthenics",
    title: "Object Calisthenics",
    summary:
      "Nove regras de exercício (propostas por Jeff Bay) que forçam um design orientado a objetos melhor. Nem sempre para seguir à risca — mas ótimas para treinar.",
    groups: [
      {
        subtopics: [
          { title: "Apenas um nível de indentação por método" },
          { title: "Nunca use ELSE" },
          { title: "Envolva todos os tipos primitivos" },
          { title: "Coleções de primeira classe" },
          { title: "Apenas um ponto por linha" },
          { title: "Não abrevie" },
          { title: "Classes pequenas (máx. 50 linhas)" },
          { title: "No máximo 2 variáveis de instância por classe" },
          { title: "Sem getters / setters" },
        ],
      },
    ],
    videos: [
      yt("pW9Bb4PteWU", "Object Calisthenics: Técnicas Para Eliminar o ELSE do Seu Código"),
      yt("YGNH71KPIes", "Object Calisthenics: A Armadilha dos Tipos Primitivos!"),
      yt("KXaPJhG9yCk", "Object Calisthenics: Lei de Demeter"),
      yt("_OKbQKjiKR8", "Object Calisthenics: Aumente a Coesão das suas Classes"),
      yt("PXHqooNlkVM", "Object Calisthenics: Pare de Usar Getters e Setters"),
    ],
  },
  {
    slug: "principios-de-qualidade",
    title: "Princípios de Qualidade de Código",
    summary: "Três atalhos mentais que evitam boa parte da complexidade desnecessária.",
    groups: [
      {
        subtopics: [
          { title: "DRY — Don't Repeat Yourself" },
          { title: "KISS — Keep It Simple, Stupid" },
          { title: "YAGNI — You Ain't Gonna Need It" },
        ],
      },
    ],
    books: ["programador-pragmatico"],
    videos: [yt("wjtfJ9c4KdM", "O maior erro que programadores cometem e como o YAGNI pode salvar seu código")],
  },
  {
    slug: "testes-automatizados",
    title: "Testes Automatizados",
    summary:
      "A pirâmide de testes: muitos testes de unidade rápidos na base, menos testes de integração e poucos testes ponta a ponta no topo.",
    groups: [
      {
        title: "Pirâmide de testes",
        subtopics: [
          { title: "Testes unitários — ~80%" },
          { title: "Testes de integração — ~15%" },
          { title: "Testes funcionais / E2E — ~5%" },
        ],
      },
    ],
    diagrams: ["test-pyramid"],
    articles: [
      { title: "The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html", source: "Martin Fowler", lang: "en" },
    ],
  },
  {
    slug: "design-patterns",
    title: "Design Patterns",
    summary:
      "Soluções reutilizáveis para problemas recorrentes de design, catalogadas pela \"Gang of Four\". Aprenda o problema que cada padrão resolve — não só a estrutura.",
    groups: [
      {
        title: "Criacionais",
        subtopics: [
          { title: "Singleton" },
          { title: "Simple Factory" },
          { title: "Factory Method" },
          { title: "Abstract Factory" },
          { title: "Builder" },
          { title: "Prototype" },
        ],
      },
      {
        title: "Estruturais",
        subtopics: [
          { title: "Adapter" },
          { title: "Bridge" },
          { title: "Composite" },
          { title: "Decorator" },
          { title: "Facade" },
          { title: "Flyweight" },
          { title: "Proxy" },
        ],
      },
      {
        title: "Comportamentais",
        subtopics: [
          { title: "Chain of Responsibility" },
          { title: "Command" },
          { title: "Iterator" },
          { title: "Mediator" },
          { title: "Memento" },
          { title: "Observer" },
          { title: "State" },
          { title: "Strategy" },
          { title: "Template Method" },
          { title: "Visitor" },
        ],
      },
    ],
    books: ["padroes-de-projeto"],
    articles: [{ title: "Refatoração e Padrões de Projeto", url: "https://refactoring.guru/pt-br", source: "Refactoring.Guru", lang: "pt" }],
    videos: [
      yt("3-ESljj0jgI", "Padrão de Projeto Simple Factory"),
      yt("E8ey3HjSthg", "Padrão de Projeto Singleton: Multithreading & Testes Unitários"),
      yt("Fg1kEjaaBrs", "Padrão de Projeto Adapter"),
      yt("7B60j9EGrrU", "Padrão de Projeto Decorator"),
      yt("4Aq9UHQ5f5Y", "Padrão de Projeto Facade"),
      yt("el1MtIPXTqo", "Padrão de Projeto Proxy"),
      yt("mv9JxI85Ac8", "Padrão de Projeto Observer"),
      yt("OrCgWzpNszk", "Padrão de Projeto State"),
      yt("DzlXwgsc_AU", "Padrão de Projeto Strategy"),
      yt("j5fGTi8ObK4", "Padrão de Projeto Template Method"),
    ],
  },
  {
    slug: "tecnicas-de-refactoring",
    title: "Técnicas de Refactoring",
    summary:
      "Melhorar o design do código existente sem mudar o comportamento. Aprenda a reconhecer code smells e as técnicas para corrigi-los.",
    groups: [
      {
        subtopics: [
          { title: "O que é débito técnico" },
          { title: "Code smells" },
          { title: "Métodos de composição" },
          { title: "Organização de dados" },
          { title: "Expressões condicionais" },
          { title: "Simplificar chamadas de métodos" },
        ],
      },
    ],
    books: ["refatoracao"],
    articles: [
      { title: "Débito técnico", url: "https://refactoring.guru/pt-br/refactoring/technical-debt", source: "Refactoring.Guru", lang: "pt" },
      { title: "Code Smells", url: "https://refactoring.guru/pt-br/refactoring/smells", source: "Refactoring.Guru", lang: "pt" },
      { title: "Composing Methods", url: "https://refactoring.guru/refactoring/techniques/composing-methods", source: "Refactoring.Guru", lang: "en" },
      { title: "Organizing Data", url: "https://refactoring.guru/refactoring/techniques/organizing-data", source: "Refactoring.Guru", lang: "en" },
      { title: "Simplifying Conditional Expressions", url: "https://refactoring.guru/refactoring/techniques/simplifying-conditional-expressions", source: "Refactoring.Guru", lang: "en" },
      { title: "Simplifying Method Calls", url: "https://refactoring.guru/refactoring/techniques/simplifying-method-calls", source: "Refactoring.Guru", lang: "en" },
    ],
  },
  {
    slug: "otimizacao-e-performance",
    title: "Otimização e Performance",
    summary:
      "As técnicas que mais aparecem na prática para deixar um sistema rápido: cache, processamento assíncrono, concorrência, SQL eficiente e CDN.",
    groups: [
      {
        subtopics: [
          { title: "Cache-Aside Pattern" },
          { title: "Jobs assíncronos" },
          { title: "Concorrência e paralelismo" },
          { title: "Otimização e performance de SQL", items: ["Problema N+1", "Índices"] },
          { title: "CDN" },
        ],
      },
    ],
    diagrams: ["no-cache-vs-cache-aside", "sync-vs-async", "n-plus-one"],
    figures: [
      {
        image: "diagramas/cache-aside",
        alt: "Fluxo do cache-aside: a aplicação lê do cache; em caso de miss, busca no banco e atualiza o cache",
        caption: "Cache-aside: a aplicação consulta o cache primeiro e só vai ao banco em caso de miss.",
        credit: "EnjoyAlgorithms",
      },
    ],
    articles: [
      { title: "Cache-Aside pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside", source: "Azure Architecture Center", lang: "en" },
      { title: "An Introduction to Asynchronous Processing and Message Queues", url: "https://medium.com/hookdeck/an-introduction-to-asynchronous-processing-and-message-queues-218af596bf1b", source: "Medium", lang: "en" },
      { title: "RabbitMQ Documentation", url: "https://www.rabbitmq.com/docs", source: "RabbitMQ", lang: "en" },
      { title: "Concurrency vs parallelism: the main differences", url: "https://oxylabs.io/blog/concurrency-vs-parallelism", source: "Oxylabs", lang: "en" },
      { title: "O que é o problema de N + 1?", url: "https://medium.com/linkapi-solutions/o-que-%C3%A9-o-problema-de-n-1-24975a28dcb8", source: "Medium", lang: "pt" },
      { title: "SQL Performance Tuning", url: "https://www.geeksforgeeks.org/sql-performance-tuning/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is a Content Delivery Network (CDN)?", url: "https://www.geeksforgeeks.org/what-is-content-delivery-networkcdn-in-system-design/", source: "GeeksforGeeks", lang: "en" },
    ],
    videos: [yt("vRO0UfvsbDw", "Cache-Aside: Escalabilidade, Performance e Arquitetura de Software")],
  },
  {
    slug: "cloud-providers",
    title: "Básico das Cloud Providers",
    summary:
      "Quase todo sistema roda em nuvem. Conheça os serviços essenciais (computação, armazenamento, banco, rede) e seus equivalentes entre AWS, Azure e Google Cloud.",
    figures: [
      {
        image: "diagramas/servicos-cloud-comparativo",
        alt: "Tabela comparando serviços equivalentes na AWS, Azure e Google Cloud por categoria",
        caption: "Serviços equivalentes entre AWS, Azure e Google Cloud.",
        credit: "Chandresh Desai / Cloudairy",
      },
    ],
    articles: [
      { title: "AWS Certified Cloud Practitioner", url: "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/", source: "AWS", lang: "pt" },
    ],
  },
  {
    slug: "pipelines-ci-cd",
    title: "Pipelines de CI/CD",
    summary:
      "Automatize build, testes e deploy a cada mudança. Integração e entrega contínuas reduzem risco e aceleram o ciclo de feedback.",
    choose: { label: "Escolha uma ferramenta", options: ["GitHub Actions", "GitLab CI", "Azure DevOps Pipelines", "Jenkins"] },
    articles: [
      { title: "What is CI/CD?", url: "https://www.geeksforgeeks.org/what-is-ci-cd/", source: "GeeksforGeeks", lang: "en" },
      { title: "Quickstart for GitHub Actions", url: "https://docs.github.com/en/actions/writing-workflows/quickstart", source: "GitHub Docs", lang: "en" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Etapa 3 — Arquitetura & System Design
// ─────────────────────────────────────────────────────────────
const arquitetura: Topic[] = [
  {
    slug: "arquitetura-de-software",
    title: "Arquitetura de Software",
    summary:
      "Arquitetura é sobre decisões difíceis de mudar depois, e os trade-offs de cada uma. Entenda os níveis de arquitetura, os tipos de arquiteto e o que se espera de cada papel.",
    groups: [
      {
        title: "Níveis de arquitetura",
        subtopics: [
          { title: "Arquitetura de Aplicação" },
          { title: "Arquitetura de Solução" },
          { title: "Arquitetura Corporativa", optional: true },
        ],
      },
      {
        title: "Tipos de arquiteto",
        subtopics: [
          { title: "Arquiteto de Software — LLD (Low-Level Design)" },
          { title: "Arquiteto de Soluções — HLD (High-Level Design)" },
          { title: "Arquiteto Corporativo", optional: true },
        ],
      },
      {
        title: "Papéis e responsabilidades",
        subtopics: [{ title: "Requisitos funcionais e não funcionais" }],
      },
    ],
    examples: [
      {
        title: "Requisitos funcionais",
        items: [
          "O sistema deve enviar um e-mail de confirmação após o cadastro do usuário.",
          "O sistema deve permitir que o usuário faça login com e-mail e senha.",
          "O sistema deve calcular o total da compra com frete, descontos e impostos.",
        ],
      },
      {
        title: "Requisitos não funcionais",
        items: [
          "O sistema deve estar disponível 99,9% do tempo (alta disponibilidade).",
          "O sistema deve suportar 1 milhão de usuários simultâneos (escalabilidade).",
          "As requisições devem ser respondidas em até 200 ms (performance).",
        ],
      },
    ],
    books: ["fundamentos-arquitetura", "partes-dificeis"],
  },
  {
    slug: "domain-driven-design",
    title: "Domain-Driven Design",
    summary:
      "Modele o software a partir do domínio do negócio. A parte estratégica divide o problema em contextos; a tática dá os blocos de construção do código.",
    groups: [
      {
        title: "Modelagem estratégica",
        subtopics: [
          { title: "Linguagem ubíqua" },
          { title: "Domínio e subdomínios" },
          { title: "Bounded Contexts" },
          { title: "Context Map" },
        ],
      },
      {
        title: "Ferramentas",
        subtopics: [
          { title: "EventStorming" },
          { title: "The Business Model Canvas" },
          { title: "User Story Mapping" },
          { title: "Domain Storytelling" },
        ],
      },
      {
        title: "Modelagem tática",
        subtopics: [
          { title: "Entity" },
          { title: "Value Object" },
          { title: "Aggregate Root" },
          { title: "Repository" },
          { title: "Domain Service" },
          { title: "Factory" },
        ],
      },
    ],
    books: ["domain-driven-design", "aprenda-ddd"],
    articles: [
      { title: "DDD Starter Modelling Process", url: "https://github.com/RenatoAugustoFS/ddd-starter-modelling-process", source: "GitHub", lang: "en" },
      { title: "EventStorming", url: "https://www.eventstorming.com/", source: "eventstorming.com", lang: "en" },
    ],
    videos: [yt("JXeJUfBCg4U", "Microsserviços: A Maior Armadilha da Arquitetura Moderna — e o que DDD tem a ver?")],
  },
  {
    slug: "arquitetura-em-camadas",
    title: "Arquitetura em Camadas",
    summary:
      "Separe regras de negócio de detalhes de infraestrutura. Clean, Hexagonal e Onion compartilham a mesma ideia: as dependências apontam para o domínio.",
    groups: [
      {
        subtopics: [
          { title: "Clean Architecture" },
          { title: "Arquitetura Hexagonal (Ports & Adapters)" },
          { title: "Onion Architecture" },
        ],
      },
    ],
    figures: [
      {
        image: "diagramas/clean-architecture",
        alt: "Círculos concêntricos da Clean Architecture: Entities, Use Cases, Interface Adapters e Frameworks & Drivers",
        caption: "The Clean Architecture: a regra da dependência aponta sempre para dentro.",
        credit: "Robert C. Martin",
      },
    ],
    books: ["arquitetura-limpa"],
  },
  {
    slug: "monolito-modular",
    title: "Monólito Modular",
    summary:
      "Um único deploy, mas com módulos bem isolados por domínio. Costuma ser o melhor ponto de partida — e facilita extrair microsserviços quando (e se) fizer sentido.",
    figures: [
      {
        image: "diagramas/monolito-modular",
        alt: "Monólito modular com módulos de produto, pedidos, carrinho, pagamentos, entrega e relatórios atrás de um gateway",
        caption: "Módulos isolados por domínio dentro de uma única aplicação.",
      },
    ],
  },
  {
    slug: "sistemas-distribuidos",
    title: "Sistemas Distribuídos e Padrões Arquiteturais",
    summary:
      "Quando um único processo não basta: microsserviços, arquitetura orientada a eventos e serverless — com seus benefícios e (muitos) custos.",
    groups: [
      {
        subtopics: [
          { title: "Arquitetura de Microsserviços" },
          { title: "Arquitetura Orientada a Eventos (EDA)" },
          { title: "Arquitetura Serverless" },
          { title: "Cliente-Servidor", optional: true },
          { title: "Peer-to-Peer (P2P)", optional: true },
        ],
      },
    ],
    figures: [
      {
        image: "diagramas/microsservicos",
        alt: "Aplicações cliente acessando microsserviços de catálogo, carrinho, desconto e pedidos via API Gateway, cada um com seu banco e um message broker",
        caption: "Microsserviços com API Gateway, banco por serviço e message broker.",
      },
      {
        image: "diagramas/microsservicos-animado",
        alt: "Animação de requisições trafegando entre serviços de backend através de um API Gateway",
        caption: "Requisições trafegando entre serviços.",
      },
    ],
    books: ["criando-microsservicos", "migrando-monoliticos", "building-edm"],
    articles: [
      { title: "Microservices Guide", url: "https://martinfowler.com/microservices/", source: "Martin Fowler", lang: "en" },
      { title: "Microservices", url: "https://martinfowler.com/articles/microservices.html", source: "Martin Fowler", lang: "en" },
      { title: "What are Microservices?", url: "https://www.geeksforgeeks.org/microservices/", source: "GeeksforGeeks", lang: "en" },
      { title: "Microservice architecture style", url: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices", source: "Azure Architecture Center", lang: "en" },
      { title: "O que são microsserviços?", url: "https://aws.amazon.com/pt/microservices/", source: "AWS", lang: "pt" },
      { title: "Event-Driven Architecture", url: "https://www.geeksforgeeks.org/event-driven-architecture-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "Serverless Architecture", url: "https://www.geeksforgeeks.org/serverless-architectures/", source: "GeeksforGeeks", lang: "en" },
      { title: "Serverless Architecture: What It Is & How It Works", url: "https://www.datadoghq.com/knowledge-center/serverless-architecture/", source: "Datadog", lang: "en" },
      { title: "Client-Server Architecture", url: "https://www.geeksforgeeks.org/client-server-architecture-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "Peer-to-Peer (P2P) Architecture", url: "https://www.geeksforgeeks.org/peer-to-peer-p2p-architecture/#what-is-a-peertopeer-p2p-architecture", source: "GeeksforGeeks", lang: "en" },
    ],
  },
  {
    slug: "planejamento-de-capacidade",
    title: "Planejamento de Capacidade",
    summary:
      "Estimar carga antes de desenhar: quantas requisições por segundo, quanta concorrência, onde estão os limites de recursos. As contas de guardanapo do System Design.",
    groups: [
      {
        subtopics: [
          { title: "Latência vs Throughput" },
          { title: "Calcular a carga (RPS — Requests Per Second)" },
          { title: "Calcular a concorrência simultânea" },
          { title: "Utilização e saturação de recursos" },
          { title: "Taxa de erros" },
        ],
      },
    ],
    articles: [
      { title: "Throughput e latência", url: "https://aws.amazon.com/pt/compare/the-difference-between-throughput-and-latency/", source: "AWS", lang: "pt" },
      { title: "System Design — Performance, Capacidade e Escalabilidade", url: "https://fidelissauro.dev/performance-capacidade-escalabilidade/", source: "fidelissauro.dev", lang: "pt" },
      { title: "Back-of-the-envelope Estimation", url: "https://bytebytego.com/courses/system-design-interview/back-of-the-envelope-estimation", source: "ByteByteGo", lang: "en" },
    ],
  },
  {
    slug: "escalabilidade-e-performance",
    title: "Escalabilidade e Performance",
    summary:
      "Como um sistema cresce de mil para um milhão de usuários: escalar horizontalmente, distribuir carga, aliviar o banco e evitar os anti-padrões clássicos.",
    groups: [
      {
        subtopics: [
          { title: "Vertical scaling vs horizontal scaling" },
          { title: "Elasticidade (auto scaling)" },
          { title: "Load balancing" },
          { title: "Bottlenecks" },
        ],
      },
      {
        title: "Banco de dados e estratégia de leitura",
        subtopics: [
          { title: "Database replication" },
          { title: "CQRS" },
          { title: "Estratégias de cache" },
          { title: "Database sharding" },
        ],
      },
      {
        title: "Redução de carga e latência",
        subtopics: [{ title: "Assincronicidade / filas de mensageria" }, { title: "CDN — Content Delivery Network" }],
      },
      {
        title: "Performance anti-patterns",
        subtopics: [
          { title: "Busy Database" },
          { title: "Instanciação imprópria" },
          { title: "Persistência monolítica" },
          { title: "Noisy Neighbor" },
          { title: "Retry Storm" },
          { title: "No Caching" },
        ],
      },
    ],
    articles: [
      { title: "Scale From Zero To Millions Of Users", url: "https://bytebytego.com/courses/system-design-interview/scale-from-zero-to-millions-of-users", source: "ByteByteGo", lang: "en" },
      { title: "Horizontal and Vertical Scaling", url: "https://www.geeksforgeeks.org/system-design-horizontal-and-vertical-scaling/", source: "GeeksforGeeks", lang: "en" },
      { title: "Scalability and Elasticity in Cloud Computing", url: "https://www.geeksforgeeks.org/scalability-and-elasticity-in-cloud-computing/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is a Load Balancer?", url: "https://www.geeksforgeeks.org/what-is-load-balancer-system-design/#how-load-balancer-works", source: "GeeksforGeeks", lang: "en" },
      { title: "Data Replication in Distributed Systems", url: "https://blog.bytebytego.com/p/data-replication-a-key-component", source: "ByteByteGo", lang: "en" },
      { title: "CQRS pattern", url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-data-persistence/cqrs-pattern.html", source: "AWS", lang: "en" },
      { title: "Caching patterns", url: "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies-using-redis/caching-patterns.html", source: "AWS", lang: "en" },
      { title: "Top 8 Cache Eviction Strategies", url: "https://bytebytego.com/guides/top-8-cache-eviction-strategies/", source: "ByteByteGo", lang: "en" },
      { title: "What is Database Sharding?", url: "https://aws.amazon.com/what-is/database-sharding/", source: "AWS", lang: "en" },
      { title: "Message Queues", url: "https://www.geeksforgeeks.org/message-queues-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/tutorials", source: "RabbitMQ", lang: "en" },
      { title: "Performance testing and antipatterns", url: "https://learn.microsoft.com/en-us/azure/architecture/antipatterns/", source: "Azure Architecture Center", lang: "en" },
    ],
    videos: [yt("9g7twJrXqoY", "System Design: Escalando uma Arquitetura do Zero a Um Milhão de Usuários")],
  },
  {
    slug: "consistencia-de-dados",
    title: "Consistência de Dados",
    summary:
      "Em sistemas distribuídos, nem todos veem o mesmo dado ao mesmo tempo. Entenda os modelos de consistência e os trade-offs do teorema CAP.",
    groups: [
      {
        subtopics: [
          { title: "Tipos de consistência" },
          { title: "Teorema CAP" },
          { title: "Idempotência" },
          { title: "ACID vs BASE" },
        ],
      },
    ],
    articles: [
      { title: "Consistency in System Design", url: "https://www.geeksforgeeks.org/consistency-in-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "The CAP Theorem in DBMS", url: "https://www.geeksforgeeks.org/the-cap-theorem-in-dbms/", source: "GeeksforGeeks", lang: "en" },
      { title: "Bancos de dados ACID versus BASE", url: "https://aws.amazon.com/pt/compare/the-difference-between-acid-and-base-database/", source: "AWS", lang: "pt" },
    ],
  },
  {
    slug: "disponibilidade-e-resiliencia",
    title: "Disponibilidade, Resiliência e Tolerância a Falhas",
    summary:
      "Falhas vão acontecer. Projete para que o sistema continue de pé (ou degrade com elegância) quando uma parte cair — e para você saber o que está acontecendo.",
    groups: [
      {
        subtopics: [
          { title: "Redundância" },
          { title: "Failover" },
          { title: "Zero Downtime Deployment" },
          { title: "Graceful Degradation" },
          { title: "Chaos Engineering" },
          { title: "Tracing e monitoramento" },
        ],
      },
    ],
    articles: [
      { title: "Availability in System Design", url: "https://www.geeksforgeeks.org/availability-in-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is High Availability in System Design?", url: "https://www.geeksforgeeks.org/what-is-high-availability-in-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "Design Patterns for High Availability", url: "https://www.geeksforgeeks.org/design-patterns-for-high-availability/", source: "GeeksforGeeks", lang: "en" },
      { title: "Redundancy in System Design", url: "https://www.geeksforgeeks.org/redundancy-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "Failover Mechanisms in System Design", url: "https://www.geeksforgeeks.org/failover-mechanisms-in-system-design/", source: "GeeksforGeeks", lang: "en" },
      { title: "Zero Downtime Deployments in Distributed Systems", url: "https://www.geeksforgeeks.org/zero-downtime-deployments-in-distributed-systems/", source: "GeeksforGeeks", lang: "en" },
      { title: "Graceful Degradation in Distributed Systems", url: "https://www.geeksforgeeks.org/graceful-degradation-in-distributed-systems/", source: "GeeksforGeeks", lang: "en" },
      { title: "Circuit Breaker Pattern in Microservices", url: "https://www.geeksforgeeks.org/what-is-circuit-breaker-pattern-in-microservices/", source: "GeeksforGeeks", lang: "en" },
      { title: "Fault Tolerance in Distributed Systems", url: "https://www.geeksforgeeks.org/fault-tolerance-in-distributed-system/#fault-tolerance-in-distributed-systems", source: "GeeksforGeeks", lang: "en" },
      { title: "Retry pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/retry", source: "Azure Architecture Center", lang: "en" },
      { title: "Rate Limiting pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/rate-limiting-pattern", source: "Azure Architecture Center", lang: "en" },
      { title: "What is Chaos Engineering?", url: "https://www.geeksforgeeks.org/what-is-chaos-engineering/", source: "GeeksforGeeks", lang: "en" },
      { title: "Distributed Tracing in Microservices", url: "https://www.geeksforgeeks.org/distributed-tracing-in-microservices/", source: "GeeksforGeeks", lang: "en" },
    ],
  },
  {
    slug: "seguranca-como-requisito",
    title: "Segurança como Requisito Arquitetural",
    summary:
      "Segurança não é um item para o final: ela molda a arquitetura desde a rede até o dado armazenado.",
    groups: [
      {
        subtopics: [
          { title: "VPN" },
          { title: "WAF — Web Application Firewall" },
          { title: "DDoS" },
          { title: "SQL Injection" },
          { title: "Criptografia de dados" },
        ],
      },
    ],
    articles: [
      { title: "Cyber Security Tutorial", url: "https://www.geeksforgeeks.org/cyber-security-tutorial/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is VPN? How It Works, Types of VPN", url: "https://www.geeksforgeeks.org/what-is-vpn-how-it-works-types-of-vpn/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is a Web Application Firewall?", url: "https://www.geeksforgeeks.org/what-is-a-web-application-firewall/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is DDoS?", url: "https://www.geeksforgeeks.org/what-is-ddosdistributed-denial-of-service/", source: "GeeksforGeeks", lang: "en" },
      { title: "What is SQL Injection?", url: "https://www.geeksforgeeks.org/sql-injection/", source: "GeeksforGeeks", lang: "en" },
      { title: "Cryptography and its Types", url: "https://www.geeksforgeeks.org/cryptography-and-its-types/", source: "GeeksforGeeks", lang: "en" },
    ],
  },
];

export const phases: Phase[] = [
  {
    slug: "fundamentos",
    number: 1,
    title: "Fundamentos",
    tagline: "Da largada ao primeiro sistema web",
    description:
      "Como o computador funciona, uma linguagem de programação, bancos de dados, Git, web, APIs, segurança básica, um framework e Docker.",
    color: "violet",
    topics: fundamentos,
  },
  {
    slug: "engenharia-de-software",
    number: 2,
    title: "Engenharia de Software",
    tagline: "Código que outras pessoas conseguem manter",
    description:
      "Qualidade de código, orientação a objetos de verdade, testes, design patterns, refactoring, performance, cloud e CI/CD.",
    color: "teal",
    topics: engenharia,
  },
  {
    slug: "arquitetura-e-system-design",
    number: 3,
    title: "Arquitetura & System Design",
    tagline: "Decisões que definem o sistema inteiro",
    description:
      "Arquitetura de software, DDD, camadas, sistemas distribuídos e os requisitos não funcionais: capacidade, escala, consistência, disponibilidade e segurança.",
    color: "amber",
    topics: arquitetura,
  },
];

export const allTopics = phases.flatMap((phase) => phase.topics.map((topic) => ({ ...topic, phase })));

