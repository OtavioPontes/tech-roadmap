import type { Book, Link, Person } from "./types";

export const RENATO = "Renato Augusto";

export const books: Book[] = [
  // Técnicos
  { id: "codigo-limpo", title: "Código Limpo", author: "Robert C. Martin", cover: "livros/codigo-limpo", category: "tecnico" },
  { id: "programador-pragmatico", title: "O Programador Pragmático", author: "Andrew Hunt e David Thomas", cover: "livros/programador-pragmatico", category: "tecnico" },
  { id: "refatoracao", title: "Refatoração", author: "Martin Fowler", cover: "livros/refatoracao", category: "tecnico" },
  { id: "padroes-de-projeto", title: "Padrões de Projeto", author: "Gamma, Helm, Johnson e Vlissides", cover: "livros/padroes-de-projeto", category: "tecnico" },
  { id: "arquitetura-limpa", title: "Arquitetura Limpa", author: "Robert C. Martin", cover: "livros/arquitetura-limpa", category: "tecnico" },
  { id: "domain-driven-design", title: "Domain-Driven Design", author: "Eric Evans", cover: "livros/domain-driven-design", category: "tecnico" },
  { id: "aprenda-ddd", title: "Aprenda Domain-Driven Design", author: "Vlad Khononov", cover: "livros/aprenda-ddd", category: "tecnico" },
  { id: "criando-microsservicos", title: "Criando Microsserviços", author: "Sam Newman", cover: "livros/criando-microsservicos", category: "tecnico" },
  { id: "migrando-monoliticos", title: "Migrando Sistemas Monolíticos para Microsserviços", author: "Sam Newman", cover: "livros/migrando-sistemas-monoliticos", category: "tecnico" },
  { id: "building-edm", title: "Building Event-Driven Microservices", author: "Adam Bellemare", cover: "livros/building-event-driven-microservices", category: "tecnico" },
  { id: "fundamentos-arquitetura", title: "Fundamentos da Arquitetura de Software", author: "Mark Richards e Neal Ford", cover: "livros/fundamentos-arquitetura-software", category: "tecnico" },
  { id: "partes-dificeis", title: "Arquitetura de Software: As Partes Difíceis", author: "Neal Ford, Mark Richards, Pramod Sadalage e Zhamak Dehghani", cover: "livros/arquitetura-partes-dificeis", category: "tecnico" },
  { id: "sdi-1", title: "System Design Interview — Vol. 1", author: "Alex Xu", cover: "livros/system-design-interview-1", category: "tecnico" },
  { id: "sdi-2", title: "System Design Interview — Vol. 2", author: "Alex Xu e Sahn Lam", cover: "livros/system-design-interview-2", category: "tecnico" },
  // Carreira e desenvolvimento pessoal
  { id: "como-fazer-amigos", title: "Como Fazer Amigos e Influenciar Pessoas", author: "Dale Carnegie", cover: "livros/como-fazer-amigos", category: "carreira" },
  { id: "nada-pode-me-ferir", title: "Nada Pode Me Ferir", author: "David Goggins", cover: "livros/nada-pode-me-ferir", category: "carreira" },
  { id: "pai-rico", title: "Pai Rico, Pai Pobre", author: "Robert T. Kiyosaki", cover: "livros/pai-rico-pai-pobre", category: "carreira" },
  { id: "homem-mais-rico", title: "O Homem Mais Rico da Babilônia", author: "George S. Clason", cover: "livros/homem-mais-rico-babilonia", category: "carreira" },
  { id: "mente-milionaria", title: "Os Segredos da Mente Milionária", author: "T. Harv Eker", cover: "livros/segredos-mente-milionaria", category: "carreira" },
];

export const bookById = Object.fromEntries(books.map((b) => [b.id, b]));

/** Treinamentos completos indicados, na ordem sugerida. */
export const courses: (Link & { description: string; free: boolean })[] = [
  { title: "CS50x — Introduction to Computer Science", url: "https://cs50.harvard.edu/x/", source: "Harvard", lang: "en", free: true, description: "O curso introdutório de Ciência da Computação de Harvard: C, algoritmos, memória, estruturas de dados, SQL e web." },
  { title: "CS50's Understanding Technology", url: "https://cs50.harvard.edu/technology/2017/weeks/1/", source: "Harvard", lang: "en", free: true, description: "Hardware, internet, segurança e desenvolvimento web explicados do zero — ótimo para os fundamentos." },
  { title: "CS50's Introduction to Programming with Python", url: "https://cs50.harvard.edu/python/", source: "Harvard", lang: "en", free: true, description: "Lógica de programação com Python: funções, condicionais, loops, exceções, bibliotecas, testes e OO." },
  { title: "CS50's Introduction to Databases with SQL", url: "https://cs50.harvard.edu/sql/2024/", source: "Harvard", lang: "en", free: true, description: "Modelagem, consultas, relacionamentos, índices e otimização em bancos relacionais." },
  { title: "CS50's Web Programming with Python and JavaScript", url: "https://cs50.harvard.edu/web/", source: "Harvard", lang: "en", free: true, description: "HTML, CSS, Git, Django, SQL, APIs, JavaScript, testes, CI/CD e escalabilidade." },
  { title: "CS50's Computer Science for Business Professionals", url: "https://cs50.harvard.edu/business/2017/weeks/2/", source: "Harvard", lang: "en", free: true, description: "Visão de alto nível sobre linguagens de programação, tecnologias web e cloud." },
  { title: "SQLBolt — Learn SQL", url: "https://sqlbolt.com/lesson/select_queries_introduction", source: "SQLBolt", lang: "en", free: true, description: "Exercícios interativos de SQL direto no navegador, do SELECT básico a JOINs e agregações." },
  { title: "Curso de Linux — Primeiros Passos", url: "https://www.youtube.com/watch?v=6nN2EglOqCM", source: "Curso em Vídeo", lang: "pt", free: true, description: "Curso gratuito em português para dar os primeiros passos com Linux e o terminal." },
  { title: "AWS Solutions Architect — Treinamento", url: "https://aws.amazon.com/pt/training/learn-about/architect/", source: "AWS", lang: "pt", free: true, description: "Trilha oficial da AWS de treinamentos digitais para arquitetos de soluções." },
  { title: "ByteByteGo — System Design", url: "https://bytebytego.com/", source: "ByteByteGo", lang: "en", free: false, description: "Plataforma do Alex Xu com guias visuais de System Design. Parte do conteúdo é gratuito." },
];

export const certifications: (Link & { badge: "badges/aws-cloud-practitioner" | "badges/aws-solutions-architect-associate" | "badges/aws-solutions-architect-professional" })[] = [
  { title: "AWS Certified Cloud Practitioner", url: "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/", badge: "badges/aws-cloud-practitioner" },
  { title: "AWS Certified Solutions Architect — Associate", url: "https://aws.amazon.com/pt/certification/certified-solutions-architect-associate/", badge: "badges/aws-solutions-architect-associate" },
  { title: "AWS Certified Solutions Architect — Professional", url: "https://aws.amazon.com/pt/certification/certified-solutions-architect-professional/", badge: "badges/aws-solutions-architect-professional" },
];

export const people: Person[] = [
  { name: "Martin Fowler", known: "Refatoração, microsserviços, arquitetura", url: "https://martinfowler.com/" },
  { name: "Robert C. Martin", known: "Clean Code, Clean Architecture, SOLID", url: "http://cleancoder.com/" },
  { name: "Alex Xu", known: "System Design Interview, ByteByteGo", url: "https://bytebytego.com/" },
  { name: "Neo Kim", known: "The System Design Newsletter", url: "https://newsletter.systemdesign.one/" },
  { name: "Sam Newman", known: "Microsserviços", url: "https://samnewman.io/" },
  { name: "James Lewis", known: "Microsserviços (com Martin Fowler)" },
  { name: "Vaughn Vernon", known: "Domain-Driven Design", url: "https://kalele.io/" },
  { name: "Simon Brown", known: "Modelo C4, arquitetura de software", url: "https://simonbrown.je/" },
  { name: "Grady Booch", known: "UML, design orientado a objetos" },
  { name: "Gaurav Sen", known: "System Design", url: "https://www.youtube.com/@gkcs" },
  { name: "Raul Junco", known: "System Design, arquitetura" },
  { name: "Nina Durán", known: "Arquitetura de software" },
  { name: "Nelson Djalo", known: "Java, Spring Boot, Amigoscode", url: "https://amigoscode.com/" },
];

export const blogs: Link[] = [
  { title: "Cloud Design Patterns", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/", source: "Azure Architecture Center" },
  { title: "AWS Architecture Blog", url: "https://aws.amazon.com/pt/blogs/architecture/", source: "AWS" },
  { title: "Netflix TechBlog", url: "https://netflixtechblog.com/", source: "Netflix" },
  { title: "The Cloudflare Blog", url: "https://blog.cloudflare.com/", source: "Cloudflare" },
  { title: "Microsoft Azure Blog", url: "https://azure.microsoft.com/en-us/blog/", source: "Microsoft" },
  { title: "Stripe Engineering", url: "https://stripe.com/blog/engineering", source: "Stripe" },
  { title: "Engineering at Meta", url: "https://engineering.fb.com/", source: "Meta" },
  { title: "Google Cloud — Developers & Practitioners", url: "https://cloud.google.com/blog/topics/developers-practitioners", source: "Google Cloud" },
  { title: "Discord Engineering", url: "https://discord.com/category/engineering", source: "Discord" },
  { title: "The GitHub Engineering Blog", url: "https://github.blog/category/engineering/", source: "GitHub" },
  { title: "Engineering at Slack", url: "https://slack.engineering/", source: "Slack" },
  { title: "Uber Engineering", url: "https://www.uber.com/en-BR/blog/rio-de-janeiro/engineering/", source: "Uber" },
  { title: "LinkedIn Engineering", url: "https://www.linkedin.com/blog/engineering", source: "LinkedIn" },
];

export const newsletters: (Link & { author: string })[] = [
  { title: "ByteByteGo Newsletter", url: "https://blog.bytebytego.com/", author: "Alex Xu" },
  { title: "The System Design Newsletter", url: "https://newsletter.systemdesign.one/", author: "Neo Kim" },
  { title: "System Design Codex", url: "https://newsletter.systemdesigncodex.com/", author: "Saurabh Dashora" },
];

