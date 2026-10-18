// Tradução PT → EN dos textos de conteúdo (roadmap.ts, library.ts e diagramas).
// A chave é o texto exato em português. Textos que já estão em inglês (nomes de padrões, títulos de artigos) não precisam entrar aqui.
// Rode o build com I18N_DEBUG=1 para listar os textos sem tradução.

export const contentEn: Record<string, string> = {
  // ── Etapas ────────────────────────────────────────────────
  Fundamentos: "Fundamentals",
  "Da largada ao primeiro sistema web": "From the starting line to your first web system",
  "Como o computador funciona, uma linguagem de programação, bancos de dados, Git, web, APIs, segurança básica, um framework e Docker.":
    "How computers work, a programming language, databases, Git, the web, APIs, basic security, a framework and Docker.",
  "Engenharia de Software": "Software Engineering",
  "Código que outras pessoas conseguem manter": "Code other people can maintain",
  "Qualidade de código, orientação a objetos de verdade, testes, design patterns, refactoring, performance, cloud e CI/CD.":
    "Code quality, object orientation done right, testing, design patterns, refactoring, performance, cloud and CI/CD.",
  "Arquitetura & System Design": "Architecture & System Design",
  "Decisões que definem o sistema inteiro": "Decisions that shape the entire system",
  "Arquitetura de software, DDD, camadas, sistemas distribuídos e os requisitos não funcionais: capacidade, escala, consistência, disponibilidade e segurança.":
    "Software architecture, DDD, layers, distributed systems and the non-functional requirements: capacity, scale, consistency, availability and security.",

  // ── Etapa 1 ───────────────────────────────────────────────
  "Fundamentos da Computação": "Computer Science Fundamentals",
  "Antes de qualquer linguagem ou framework, entenda a máquina: como o computador executa instruções, como os programas usam a memória e o que o sistema operacional faz por você.":
    "Before any language or framework, understand the machine: how a computer executes instructions, how programs use memory and what the operating system does for you.",
  "Como funciona um computador": "How a computer works",
  "Como os programas rodam na memória": "How programs run in memory",
  "Como os processadores funcionam": "How processors work",
  "Sistemas Operacionais": "Operating Systems",
  "Diferença entre linguagem compilada x interpretada": "Compiled vs. interpreted languages",
  "Linux (Ubuntu ou Debian)": "Linux (Ubuntu or Debian)",
  "Diagrama comparando o caminho do código-fonte até o hardware em C++/Go (compilado), Java (bytecode + JVM) e Python (interpretado)":
    "Diagram comparing the path from source code to hardware in C++/Go (compiled), Java (bytecode + JVM) and Python (interpreted)",
  "Como C++, Java e Python executam: compilação, bytecode + JIT e interpretação.":
    "How C++, Java and Python run: compilation, bytecode + JIT and interpretation.",

  "Escolha uma linguagem": "Pick a language",
  "Escolha uma linguagem e vá fundo nela. O que importa é aprender lógica, algoritmos e paradigmas — esses conceitos se transferem para qualquer outra linguagem depois.":
    "Pick one language and go deep. What matters is learning logic, algorithms and paradigms — those concepts carry over to any other language later.",
  "Escolha uma": "Pick one",
  "Lógica de programação": "Programming logic",
  "Algoritmos e estruturas de dados": "Algorithms and data structures",
  "Paradigmas de programação": "Programming paradigms",
  "Programação Procedural": "Procedural Programming",
  "Programação Funcional": "Functional Programming",
  "Programação Orientada a Objetos": "Object-Oriented Programming",
  "Pilares da Orientação a Objetos": "Pillars of Object Orientation",
  Abstração: "Abstraction",
  Herança: "Inheritance",
  Polimorfismo: "Polymorphism",
  Encapsulamento: "Encapsulation",

  "SQL e Bancos Relacionais": "SQL and Relational Databases",
  "Praticamente todo sistema persiste dados. Aprenda SQL, modelagem com relacionamentos e as garantias que um banco relacional oferece (ACID e transações).":
    "Almost every system persists data. Learn SQL, modeling with relationships and the guarantees a relational database offers (ACID and transactions).",
  "Escolha um banco": "Pick a database",
  "Operações de CRUD": "CRUD operations",
  Relacionamentos: "Relationships",
  Transações: "Transactions",

  "Versionamento de Código": "Version Control",
  "Git é obrigatório no dia a dia: commits, branches, merge, rebase e resolução de conflitos. É a base para trabalhar em equipe.":
    "Git is a daily must: commits, branches, merge, rebase and conflict resolution. It's the foundation for working as a team.",
  "Branches, merge e rebase": "Branches, merge and rebase",
  "Resolução de conflitos": "Conflict resolution",

  "Repositórios Remotos": "Remote Repositories",
  "Hospede seu código, abra pull requests, faça code review e mantenha um portfólio público. Os conceitos são os mesmos entre as plataformas.":
    "Host your code, open pull requests, do code reviews and keep a public portfolio. The concepts are the same across platforms.",
  "Escolha uma plataforma": "Pick a platform",

  "Redes e Internet": "Networking and the Internet",
  "O que acontece entre digitar um endereço e a página aparecer: roteamento de pacotes, domínios, DNS e a estrutura de uma URL.":
    "What happens between typing an address and the page showing up: packet routing, domains, DNS and the structure of a URL.",
  "Como a internet funciona": "How the internet works",
  "O que é um nome de domínio": "What a domain name is",
  "Como funciona um DNS": "How DNS works",
  "O que é uma URL (estrutura)": "What a URL is (structure)",

  "Fundamentos da Web": "Web Fundamentals",
  "O protocolo HTTP, o modelo cliente x servidor, o papel do servidor web e como o cache acelera as respostas.":
    "The HTTP protocol, the client-server model, the role of the web server and how caching speeds up responses.",
  "Protocolo HTTP": "HTTP protocol",
  "Arquitetura cliente x servidor": "Client-server architecture",
  "O que é um servidor web": "What a web server is",

  "APIs & Integrações": "APIs & Integrations",
  "Sistemas conversam por APIs. Domine REST sobre HTTP — métodos, status codes, JSON, paginação e versionamento — e conheça as alternativas.":
    "Systems talk through APIs. Master REST over HTTP — methods, status codes, JSON, pagination and versioning — and get to know the alternatives.",
  "O que é uma API": "What an API is",
  "APIs REST e RESTful": "REST and RESTful APIs",
  "Métodos HTTP (GET, POST, PUT, DELETE...)": "HTTP methods (GET, POST, PUT, DELETE...)",
  "HTTP — códigos de status de resposta": "HTTP — response status codes",
  "Paginação, filtros e versionamento em APIs": "Pagination, filtering and versioning in APIs",
  "Bom saber": "Good to know",

  Segurança: "Security",
  "O básico que todo dev precisa saber para não abrir brechas: HTTPS, autenticação x autorização, sessões e cookies, CORS e as vulnerabilidades mais comuns.":
    "The basics every developer needs to avoid opening security holes: HTTPS, authentication vs. authorization, sessions and cookies, CORS and the most common vulnerabilities.",
  "Como funciona um sistema de login": "How a login system works",
  "Autenticação e autorização": "Authentication and authorization",
  Sessão: "Sessions",

  "Entenda o padrão MVC e escolha um framework web da sua linguagem. Framework acelera, mas os fundamentos anteriores é que fazem você entender o que ele faz por baixo.":
    "Understand the MVC pattern and pick a web framework for your language. A framework speeds you up, but it's the previous fundamentals that let you understand what it does under the hood.",
  "Escolha um framework": "Pick a framework",

  "Contêineres padronizam o ambiente do desenvolvimento à produção. Saiba criar imagens, rodar e orquestrar serviços localmente.":
    "Containers standardize the environment from development to production. Learn to build images and run and orchestrate services locally.",
  "Conceitos de conteinerização": "Containerization concepts",
  "Imagens / Volumes / Network": "Images / Volumes / Networks",
  "Comandos básicos": "Basic commands",

  // ── Etapa 2 ───────────────────────────────────────────────
  "Mais sobre Bancos de Dados": "More on Databases",
  "Nem todo dado cabe bem em tabelas. Conheça os principais tipos de bancos não relacionais e quando cada um faz sentido.":
    "Not all data fits well in tables. Learn the main types of non-relational databases and when each one makes sense.",
  "Bancos não relacionais": "Non-relational databases",

  "Código é lido muito mais vezes do que escrito. Princípios práticos para deixar o código legível, simples e fácil de mudar.":
    "Code is read far more often than it's written. Practical principles to keep code readable, simple and easy to change.",
  "Use nomes significativos": "Use meaningful names",
  "Mantenha classes, métodos e arquivos pequenos": "Keep classes, methods and files small",
  "A regra do escoteiro": "The Boy Scout rule",
  "Comente apenas o necessário": "Comment only what's necessary",
  "Formatação e estilo de código": "Code formatting and style",
  "Evite abstrações precipitadas e refatore sempre": "Avoid premature abstractions and refactor constantly",
  "Seja consistente": "Be consistent",
  "Minimize a complexidade ciclomática": "Minimize cyclomatic complexity",
  "Prefira exceções a retorno de códigos de erro": "Prefer exceptions to returning error codes",
  "Evite passar booleanos e nulos": "Avoid passing booleans and nulls",
  "O que são funções puras": "What pure functions are",
  "O que são testes de unidade": "What unit tests are",

  "Orientação a Objetos Avançada": "Advanced Object Orientation",
  "Vá além dos quatro pilares: coesão, acoplamento, composição sobre herança e como desenhar objetos que protegem suas regras. É a base para SOLID, Object Calisthenics e Design Patterns.":
    "Go beyond the four pillars: cohesion, coupling, composition over inheritance and how to design objects that protect their rules. It's the foundation for SOLID, Object Calisthenics and Design Patterns.",
  "Coesão e acoplamento": "Cohesion and coupling",
  "Composição sobre herança": "Composition over inheritance",
  "Lei de Demeter": "Law of Demeter",

  "Princípios SOLID": "SOLID Principles",
  "Cinco princípios de design orientado a objetos que tornam o código mais fácil de estender, testar e manter.":
    "Five object-oriented design principles that make code easier to extend, test and maintain.",

  "Nove regras de exercício (propostas por Jeff Bay) que forçam um design orientado a objetos melhor. Nem sempre para seguir à risca — mas ótimas para treinar.":
    "Nine exercise rules (proposed by Jeff Bay) that push you toward better object-oriented design. Not always to be followed to the letter — but great for practice.",
  "Apenas um nível de indentação por método": "Only one level of indentation per method",
  "Nunca use ELSE": "Don't use ELSE",
  "Envolva todos os tipos primitivos": "Wrap all primitives",
  "Coleções de primeira classe": "First-class collections",
  "Apenas um ponto por linha": "One dot per line",
  "Não abrevie": "Don't abbreviate",
  "Classes pequenas (máx. 50 linhas)": "Small classes (max. 50 lines)",
  "No máximo 2 variáveis de instância por classe": "At most 2 instance variables per class",
  "Sem getters / setters": "No getters / setters",

  "Princípios de Qualidade de Código": "Code Quality Principles",
  "Três atalhos mentais que evitam boa parte da complexidade desnecessária.":
    "Three mental shortcuts that prevent a good chunk of unnecessary complexity.",

  "Testes Automatizados": "Automated Testing",
  "A pirâmide de testes: muitos testes de unidade rápidos na base, menos testes de integração e poucos testes ponta a ponta no topo.":
    "The test pyramid: lots of fast unit tests at the base, fewer integration tests and only a few end-to-end tests at the top.",
  "Pirâmide de testes": "Test pyramid",
  "Testes unitários — ~80%": "Unit tests — ~80%",
  "Testes de integração — ~15%": "Integration tests — ~15%",
  "Testes funcionais / E2E — ~5%": "Functional / E2E tests — ~5%",

  'Soluções reutilizáveis para problemas recorrentes de design, catalogadas pela "Gang of Four". Aprenda o problema que cada padrão resolve — não só a estrutura.':
    'Reusable solutions to recurring design problems, cataloged by the "Gang of Four". Learn the problem each pattern solves — not just its structure.',
  Criacionais: "Creational",
  Estruturais: "Structural",
  Comportamentais: "Behavioral",

  "Técnicas de Refactoring": "Refactoring Techniques",
  "Melhorar o design do código existente sem mudar o comportamento. Aprenda a reconhecer code smells e as técnicas para corrigi-los.":
    "Improve the design of existing code without changing its behavior. Learn to recognize code smells and the techniques to fix them.",
  "O que é débito técnico": "What technical debt is",
  "Métodos de composição": "Composing methods",
  "Organização de dados": "Organizing data",
  "Expressões condicionais": "Conditional expressions",
  "Simplificar chamadas de métodos": "Simplifying method calls",

  "Otimização e Performance": "Optimization and Performance",
  "As técnicas que mais aparecem na prática para deixar um sistema rápido: cache, processamento assíncrono, concorrência, SQL eficiente e CDN.":
    "The techniques that come up most in practice to make a system fast: caching, asynchronous processing, concurrency, efficient SQL and CDNs.",
  "Jobs assíncronos": "Asynchronous jobs",
  "Concorrência e paralelismo": "Concurrency and parallelism",
  "Otimização e performance de SQL": "SQL optimization and performance",
  "Problema N+1": "N+1 problem",
  Índices: "Indexes",
  "Fluxo do cache-aside: a aplicação lê do cache; em caso de miss, busca no banco e atualiza o cache":
    "Cache-aside flow: the application reads from the cache; on a miss, it queries the database and updates the cache",
  "Cache-aside: a aplicação consulta o cache primeiro e só vai ao banco em caso de miss.":
    "Cache-aside: the application checks the cache first and only goes to the database on a miss.",

  "Básico das Cloud Providers": "Cloud Provider Basics",
  "Quase todo sistema roda em nuvem. Conheça os serviços essenciais (computação, armazenamento, banco, rede) e seus equivalentes entre AWS, Azure e Google Cloud.":
    "Almost every system runs in the cloud. Learn the essential services (compute, storage, databases, networking) and their equivalents across AWS, Azure and Google Cloud.",
  "Tabela comparando serviços equivalentes na AWS, Azure e Google Cloud por categoria":
    "Table comparing equivalent services on AWS, Azure and Google Cloud by category",
  "Serviços equivalentes entre AWS, Azure e Google Cloud.": "Equivalent services across AWS, Azure and Google Cloud.",

  "Pipelines de CI/CD": "CI/CD Pipelines",
  "Automatize build, testes e deploy a cada mudança. Integração e entrega contínuas reduzem risco e aceleram o ciclo de feedback.":
    "Automate build, tests and deployment on every change. Continuous integration and delivery reduce risk and speed up the feedback loop.",
  "Escolha uma ferramenta": "Pick a tool",

  // ── Etapa 3 ───────────────────────────────────────────────
  "Arquitetura de Software": "Software Architecture",
  "Arquitetura é sobre decisões difíceis de mudar depois, e os trade-offs de cada uma. Entenda os níveis de arquitetura, os tipos de arquiteto e o que se espera de cada papel.":
    "Architecture is about decisions that are hard to change later, and the trade-offs of each one. Understand the levels of architecture, the types of architect and what's expected of each role.",
  "Níveis de arquitetura": "Levels of architecture",
  "Arquitetura de Aplicação": "Application Architecture",
  "Arquitetura de Solução": "Solution Architecture",
  "Arquitetura Corporativa": "Enterprise Architecture",
  "Tipos de arquiteto": "Types of architect",
  "Arquiteto de Software — LLD (Low-Level Design)": "Software Architect — LLD (Low-Level Design)",
  "Arquiteto de Soluções — HLD (High-Level Design)": "Solutions Architect — HLD (High-Level Design)",
  "Arquiteto Corporativo": "Enterprise Architect",
  "Papéis e responsabilidades": "Roles and responsibilities",
  "Requisitos funcionais e não funcionais": "Functional and non-functional requirements",
  "Requisitos funcionais": "Functional requirements",
  "O sistema deve enviar um e-mail de confirmação após o cadastro do usuário.":
    "The system must send a confirmation email after the user signs up.",
  "O sistema deve permitir que o usuário faça login com e-mail e senha.": "The system must let the user log in with email and password.",
  "O sistema deve calcular o total da compra com frete, descontos e impostos.":
    "The system must calculate the order total including shipping, discounts and taxes.",
  "Requisitos não funcionais": "Non-functional requirements",
  "O sistema deve estar disponível 99,9% do tempo (alta disponibilidade).": "The system must be available 99.9% of the time (high availability).",
  "O sistema deve suportar 1 milhão de usuários simultâneos (escalabilidade).":
    "The system must support 1 million concurrent users (scalability).",
  "As requisições devem ser respondidas em até 200 ms (performance).": "Requests must be answered within 200 ms (performance).",

  "Modele o software a partir do domínio do negócio. A parte estratégica divide o problema em contextos; a tática dá os blocos de construção do código.":
    "Model software around the business domain. The strategic side splits the problem into contexts; the tactical side gives you the building blocks for the code.",
  "Modelagem estratégica": "Strategic modeling",
  "Linguagem ubíqua": "Ubiquitous language",
  "Domínio e subdomínios": "Domain and subdomains",
  Ferramentas: "Tools",
  "Modelagem tática": "Tactical modeling",

  "Arquitetura em Camadas": "Layered Architecture",
  "Separe regras de negócio de detalhes de infraestrutura. Clean, Hexagonal e Onion compartilham a mesma ideia: as dependências apontam para o domínio.":
    "Separate business rules from infrastructure details. Clean, Hexagonal and Onion share the same idea: dependencies point toward the domain.",
  "Arquitetura Hexagonal (Ports & Adapters)": "Hexagonal Architecture (Ports & Adapters)",
  "Círculos concêntricos da Clean Architecture: Entities, Use Cases, Interface Adapters e Frameworks & Drivers":
    "Concentric circles of Clean Architecture: Entities, Use Cases, Interface Adapters and Frameworks & Drivers",
  "The Clean Architecture: a regra da dependência aponta sempre para dentro.": "The Clean Architecture: the dependency rule always points inward.",

  "Monólito Modular": "Modular Monolith",
  "Um único deploy, mas com módulos bem isolados por domínio. Costuma ser o melhor ponto de partida — e facilita extrair microsserviços quando (e se) fizer sentido.":
    "A single deployment, but with modules well isolated by domain. It's usually the best starting point — and makes it easier to extract microservices when (and if) it makes sense.",
  "Monólito modular com módulos de produto, pedidos, carrinho, pagamentos, entrega e relatórios atrás de um gateway":
    "Modular monolith with product, orders, cart, payments, delivery and reporting modules behind a gateway",
  "Módulos isolados por domínio dentro de uma única aplicação.": "Modules isolated by domain inside a single application.",

  "Sistemas Distribuídos e Padrões Arquiteturais": "Distributed Systems and Architectural Patterns",
  "Quando um único processo não basta: microsserviços, arquitetura orientada a eventos e serverless — com seus benefícios e (muitos) custos.":
    "When a single process isn't enough: microservices, event-driven architecture and serverless — with their benefits and (many) costs.",
  "Arquitetura de Microsserviços": "Microservices Architecture",
  "Arquitetura Orientada a Eventos (EDA)": "Event-Driven Architecture (EDA)",
  "Arquitetura Serverless": "Serverless Architecture",
  "Cliente-Servidor": "Client-Server",
  "Aplicações cliente acessando microsserviços de catálogo, carrinho, desconto e pedidos via API Gateway, cada um com seu banco e um message broker":
    "Client applications accessing catalog, cart, discount and order microservices through an API Gateway, each with its own database and a message broker",
  "Microsserviços com API Gateway, banco por serviço e message broker.": "Microservices with an API Gateway, a database per service and a message broker.",
  "Animação de requisições trafegando entre serviços de backend através de um API Gateway":
    "Animation of requests flowing between backend services through an API Gateway",
  "Requisições trafegando entre serviços.": "Requests flowing between services.",

  "Planejamento de Capacidade": "Capacity Planning",
  "Estimar carga antes de desenhar: quantas requisições por segundo, quanta concorrência, onde estão os limites de recursos. As contas de guardanapo do System Design.":
    "Estimate load before designing: how many requests per second, how much concurrency, where the resource limits are. The back-of-the-envelope math of System Design.",
  "Latência vs Throughput": "Latency vs. Throughput",
  "Calcular a carga (RPS — Requests Per Second)": "Calculating load (RPS — Requests Per Second)",
  "Calcular a concorrência simultânea": "Calculating concurrency",
  "Utilização e saturação de recursos": "Resource utilization and saturation",
  "Taxa de erros": "Error rate",

  "Escalabilidade e Performance": "Scalability and Performance",
  "Como um sistema cresce de mil para um milhão de usuários: escalar horizontalmente, distribuir carga, aliviar o banco e evitar os anti-padrões clássicos.":
    "How a system grows from a thousand to a million users: scaling horizontally, distributing load, taking pressure off the database and avoiding the classic anti-patterns.",
  "Elasticidade (auto scaling)": "Elasticity (auto scaling)",
  "Banco de dados e estratégia de leitura": "Database and read strategy",
  "Estratégias de cache": "Caching strategies",
  "Redução de carga e latência": "Reducing load and latency",
  "Assincronicidade / filas de mensageria": "Asynchrony / message queues",
  "Instanciação imprópria": "Improper instantiation",
  "Persistência monolítica": "Monolithic persistence",

  "Consistência de Dados": "Data Consistency",
  "Em sistemas distribuídos, nem todos veem o mesmo dado ao mesmo tempo. Entenda os modelos de consistência e os trade-offs do teorema CAP.":
    "In distributed systems, not everyone sees the same data at the same time. Understand consistency models and the trade-offs of the CAP theorem.",
  "Tipos de consistência": "Types of consistency",
  "Teorema CAP": "CAP theorem",
  Idempotência: "Idempotency",

  "Disponibilidade, Resiliência e Tolerância a Falhas": "Availability, Resilience and Fault Tolerance",
  "Falhas vão acontecer. Projete para que o sistema continue de pé (ou degrade com elegância) quando uma parte cair — e para você saber o que está acontecendo.":
    "Failures will happen. Design so the system stays up (or degrades gracefully) when a part goes down — and so you know what's going on.",
  Redundância: "Redundancy",
  "Tracing e monitoramento": "Tracing and monitoring",

  "Segurança como Requisito Arquitetural": "Security as an Architectural Requirement",
  "Segurança não é um item para o final: ela molda a arquitetura desde a rede até o dado armazenado.":
    "Security isn't something for the end: it shapes the architecture from the network all the way to stored data.",
  "Criptografia de dados": "Data encryption",

  // ── Biblioteca ────────────────────────────────────────────
  "Código Limpo": "Clean Code",
  "O Programador Pragmático": "The Pragmatic Programmer",
  Refatoração: "Refactoring",
  "Padrões de Projeto": "Design Patterns",
  "Arquitetura Limpa": "Clean Architecture",
  "Aprenda Domain-Driven Design": "Learning Domain-Driven Design",
  "Criando Microsserviços": "Building Microservices",
  "Migrando Sistemas Monolíticos para Microsserviços": "Monolith to Microservices",
  "Fundamentos da Arquitetura de Software": "Fundamentals of Software Architecture",
  "Arquitetura de Software: As Partes Difíceis": "Software Architecture: The Hard Parts",
  "Como Fazer Amigos e Influenciar Pessoas": "How to Win Friends and Influence People",
  "Nada Pode Me Ferir": "Can't Hurt Me",
  "Pai Rico, Pai Pobre": "Rich Dad Poor Dad",
  "O Homem Mais Rico da Babilônia": "The Richest Man in Babylon",
  "Os Segredos da Mente Milionária": "Secrets of the Millionaire Mind",
  "Andrew Hunt e David Thomas": "Andrew Hunt and David Thomas",
  "Gamma, Helm, Johnson e Vlissides": "Gamma, Helm, Johnson and Vlissides",
  "Mark Richards e Neal Ford": "Mark Richards and Neal Ford",
  "Neal Ford, Mark Richards, Pramod Sadalage e Zhamak Dehghani": "Neal Ford, Mark Richards, Pramod Sadalage and Zhamak Dehghani",
  "Alex Xu e Sahn Lam": "Alex Xu and Sahn Lam",

  "O curso introdutório de Ciência da Computação de Harvard: C, algoritmos, memória, estruturas de dados, SQL e web.":
    "Harvard's introductory Computer Science course: C, algorithms, memory, data structures, SQL and the web.",
  "Hardware, internet, segurança e desenvolvimento web explicados do zero — ótimo para os fundamentos.":
    "Hardware, the internet, security and web development explained from scratch — great for the fundamentals.",
  "Lógica de programação com Python: funções, condicionais, loops, exceções, bibliotecas, testes e OO.":
    "Programming logic with Python: functions, conditionals, loops, exceptions, libraries, testing and OOP.",
  "Modelagem, consultas, relacionamentos, índices e otimização em bancos relacionais.":
    "Modeling, queries, relationships, indexes and optimization in relational databases.",
  "HTML, CSS, Git, Django, SQL, APIs, JavaScript, testes, CI/CD e escalabilidade.":
    "HTML, CSS, Git, Django, SQL, APIs, JavaScript, testing, CI/CD and scalability.",
  "Visão de alto nível sobre linguagens de programação, tecnologias web e cloud.":
    "A high-level overview of programming languages, web technologies and the cloud.",
  "Exercícios interativos de SQL direto no navegador, do SELECT básico a JOINs e agregações.":
    "Interactive SQL exercises right in the browser, from basic SELECT to JOINs and aggregations.",
  "Curso gratuito em português para dar os primeiros passos com Linux e o terminal.":
    "A free course in Portuguese for your first steps with Linux and the terminal.",
  "AWS Solutions Architect — Treinamento": "AWS Solutions Architect — Training",
  "Trilha oficial da AWS de treinamentos digitais para arquitetos de soluções.": "AWS's official digital training path for solutions architects.",
  "Plataforma do Alex Xu com guias visuais de System Design. Parte do conteúdo é gratuito.":
    "Alex Xu's platform with visual System Design guides. Some of the content is free.",

  "Refatoração, microsserviços, arquitetura": "Refactoring, microservices, architecture",
  Microsserviços: "Microservices",
  "Microsserviços (com Martin Fowler)": "Microservices (with Martin Fowler)",
  "Modelo C4, arquitetura de software": "C4 model, software architecture",
  "UML, design orientado a objetos": "UML, object-oriented design",
  "System Design, arquitetura": "System Design, architecture",
  "Arquitetura de software": "Software architecture",

  // ── Diagramas ─────────────────────────────────────────────
  "Sem cache x Cache-Aside": "No cache vs. Cache-Aside",
  "Sem cache": "No cache",
  "Toda requisição vai ao banco — a mesma consulta pesada roda milhares de vezes.":
    "Every request hits the database — the same heavy query runs thousands of times.",
  "A API consulta o cache primeiro. Só em caso de miss busca no banco e grava o resultado no cache.":
    "The API checks the cache first. Only on a miss does it query the database and write the result to the cache.",
  Clientes: "Clients",
  Banco: "Database",
  "Processamento síncrono x assíncrono": "Synchronous vs. asynchronous processing",
  "Sem processamento assíncrono": "Without asynchronous processing",
  "O cliente espera tudo terminar — enviar e-mail, gerar PDF, chamar serviços externos — antes de receber a resposta.":
    "The client waits for everything to finish — sending email, generating a PDF, calling external services — before getting a response.",
  "Com processamento assíncrono": "With asynchronous processing",
  "A API só publica uma mensagem na fila e responde na hora. Workers processam o trabalho pesado em segundo plano.":
    "The API just publishes a message to the queue and responds right away. Workers handle the heavy lifting in the background.",
  Cliente: "Client",
  "e-mail + PDF + ...": "email + PDF + ...",
  Resposta: "Response",
  publica: "publishes",
  Fila: "Queue",
  consome: "consumes",
  "O problema N+1": "The N+1 problem",
  "Uma consulta para buscar a lista e, depois,": "One query to fetch the list and then",
  "uma consulta extra para cada item": "one extra query for each item",
  ". Com 500 usuários, são 501 idas ao banco.": ". With 500 users, that's 501 trips to the database.",
  "❌ N+1 — uma consulta por usuário": "❌ N+1 — one query per user",
  "✅ Uma única consulta com JOIN": "✅ A single query with a JOIN",
  "1 + N consultas...": "1 + N queries...",
  "SQL executado pelo código N+1:": "SQL run by the N+1 code:",
  "Funcionais / E2E": "Functional / E2E",
  Integração: "Integration",
  Unitários: "Unit",
  "Quanto mais alto, mais lento e caro de manter. Quanto mais baixo, mais rápido e isolado.":
    "The higher up, the slower and more expensive to maintain. The lower down, the faster and more isolated.",
};
