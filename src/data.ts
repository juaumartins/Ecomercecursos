import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: 'fullstack-pro',
    title: 'Desenvolvedor Full-Stack Pro (React & Node.js)',
    category: 'programming',
    subtitle: 'Do zero absoluto à contratação como Dev nas tecnologias mais demandadas pelo mercado atual.',
    rating: 4.9,
    ratingCount: 1240,
    totalStudents: 8430,
    originalPrice: 997.00,
    promotionalPrice: 297.00,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    duration: '80 horas',
    lecturesCount: 165,
    level: 'Todos os níveis',
    description: 'Aprenda do extremo zero a arquitetar sistemas web complexos com React, Node.js, Express, PostgreSQL e Prisma. O curso foi estruturado para simular os desafios reais enfrentados em startups globais.',
    skillsAcquired: [
      'Desenvolvimento de APIs robustas com Node.js',
      'Interface reativas e de alta performance com React & TypeScript',
      'Modelagem de banco de dados relacionais com PostgreSQL',
      'Deploy otimizado na AWS, Vercel e Docker',
      'Estilização moderna e rápida com Tailwind CSS'
    ],
    bonuses: [
      'MENTORIA COLETIVA: 4 sessões ao vivo de tira-dúvidas direto com engenheiros sêniores.',
      'MANUAL DA VAGA INTERNACIONAL: Guia prático de como preparar seu LinkedIn e currículo para vagas remotas em dólar.',
      'CÓDIGO-FONTE COMPLETO: Acesso vitalício ao repositório de todos os 5 projetos práticos do curso.'
    ],
    instructor: {
      name: 'Diego Fernandes',
      role: 'Software Architect & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
    },
    syllabus: [
      {
        title: 'Módulo 1: Fundamentos Avançados de Web',
        duration: '10h',
        topics: [
          'HTML Semântico & Modern CSS Grid/Flexbox',
          'JavaScript Moderno (ES6+) e assincronismo',
          'TypeScript na prática: Interfaces, Generics e Types'
        ]
      },
      {
        title: 'Módulo 2: Domínio Absoluto do Frontend com React',
        duration: '25h',
        topics: [
          'Arquitetura de Componentes e custom Hooks',
          'Gerenciamento de Estado Avançado (Redux Toolkit & Context)',
          'Performance e renderização: useMemo, useCallback e Virtualização',
          'Autenticação segura via JWT & Refresh Tokens'
        ]
      },
      {
        title: 'Módulo 3: Backend Escalável com Node.js',
        duration: '25h',
        topics: [
          'Criando servidores de alto tráfego com Express',
          'Arquitetura em Camadas (Clean Architecture) & SOLID',
          'Persistência e modelagem com Prisma e PostgreSQL',
          'Implementação de fila gerenciada via BullMQ e Redis'
        ]
      },
      {
        title: 'Módulo 4: Deploy & Monitoramento real',
        duration: '20h',
        topics: [
          'Containerização de aplicações com Docker',
          'Integração contínua (CI/CD) com GitHub Actions',
          'Deploy automatizado na Vercel e Cloud Run',
          'Monitoramento de erros em tempo real com Sentry'
        ]
      }
    ]
  },
  {
    id: 'traffic-growth',
    title: 'Mestre do Tráfego Pago & Growth Marketing',
    category: 'marketing',
    subtitle: 'Aprenda a criar campanhas de anúncios altamente lucrativas no menor tempo possível.',
    rating: 4.8,
    ratingCount: 890,
    totalStudents: 5120,
    originalPrice: 597.00,
    promotionalPrice: 197.00,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    duration: '45 horas',
    lecturesCount: 94,
    level: 'Iniciante',
    description: 'O guia estratégico e prático definitivo para dominar plataformas como Meta Ads (Facebook/Instagram), Google Ads, TikTok Ads e configurar trackings de conversão infalíveis usando GA4 e Tag Manager.',
    skillsAcquired: [
      'Configuração de Pixel e API de Conversão avançada',
      'Escrita de copys de alta conversão (Copywriting)',
      'Estratégias avançadas de remarketing e escala',
      'Análise profunda de métricas no GA4 (Google Analytics)',
      'Otimização do LTV (Lifetime Value) e redução de CAC'
    ],
    bonuses: [
      'GATILHOS EXTRAS DE COPY: Planilha com 150 headlines prontas de alta conversão que faturaram mais de R$ 1 Milhão.',
      'MODELO DE DASHBOARD LOOKER STUDIO: Relatório de tráfego profissional pronto para você plugar seus dados e enviar aos clientes.',
      'COMUNIDADE EXCLUSIVA: Fórum de network fechado para troca de criativos com mais de 2.000 profissionais.'
    ],
    instructor: {
      name: 'Rafaela Lima',
      role: 'Head of Growth em Scaleups',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150'
    },
    syllabus: [
      {
        title: 'Módulo 1: Introdução ao Growth & Mindset de Teste',
        duration: '6h',
        topics: [
          'O que é Growth Hacking e por que funciona',
          'Métricas de Ouro: CAC, LTV, ROI e ROAS',
          'O funil pirata estratégico (AARRR)'
        ]
      },
      {
        title: 'Módulo 2: Domínio Completo de Meta Ads (Facebook/Instagram)',
        duration: '15h',
        topics: [
          'Configurando Business Manager e Contas à prova de bloqueio',
          'Leilão, algoritmos e públicos personalizados (Lookalike)',
          'Criação de anúncios em escala com inteligência artificial',
          'Método de escala vertical e horizontal de orçamentos'
        ]
      },
      {
        title: 'Módulo 3: Google Ads de Conversão Máxima',
        duration: '14h',
        topics: [
          'Campanhas de Rede de Pesquisa lucrativas',
          'Rede de Display e Performance Max (PMax)',
          'Hack de palavras-chave negativas para poupar orçamento',
          'Google Tag Manager (GTM) e APIs de conversão'
        ]
      },
      {
        title: 'Módulo 4: Growth Hacks & Otimização de Lançamento',
        duration: '10h',
        topics: [
          'Scripts e automação para otimizar campanhas dormindo',
          'Funil de vendas direto via WhatsApp e mensagens',
          'Análise de dados avançada e tomadas de decisão cirúrgicas'
        ]
      }
    ]
  },
  {
    id: 'uiux-design-system',
    title: 'UI/UX Design Experience & Design Systems',
    category: 'design',
    subtitle: 'Domínio do Figma, pesquisas de usabilidade e criação de produtos digitais modernos e elegantes.',
    rating: 4.9,
    ratingCount: 712,
    totalStudents: 3450,
    originalPrice: 797.00,
    promotionalPrice: 247.00,
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=600',
    duration: '55 horas',
    lecturesCount: 112,
    level: 'Intermediário',
    description: 'Transforme layouts simples em interfaces hipnotizantes e funcionais. Domine Figma do básico ao avançado (Auto Layout, Variáveis, Componentes Interativos, Prototipagem Animada) e crie um Design System escalável do absoluto zero.',
    skillsAcquired: [
      'Figma Avançado: Variáveis, Auto-Layout 5.0 e Prototipagem complexa',
      'Pesquisas de usabilidade reais (UX Research)',
      'Arquitetura de Informação e Fluxogramas intuitivos',
      'Criação de Design Systems robustos e tokens de design',
      'Portfólio de alto nível para conquistar clientes e vagas internacionais'
    ],
    bonuses: [
      'UI KIT PREMIUM PRONTO: Um kit de componentes editáveis super profissional para acelerar seus projetos em até 3x.',
      'GUIA DE PRECIFICAÇÃO DE FREELANCE: Planilha interativa para calcular o valor exato a cobrar por projeto de UX/UI.',
      'ANÁLISE DE PORTFÓLIO: Gravação de duas sabatinas onde analisamos os portfólios mais bem-sucedidos do mercado brasileiro.'
    ],
    instructor: {
      name: 'Marcus Vinicius',
      role: 'Lead UX Designer no Nubank',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
    },
    syllabus: [
      {
        title: 'Módulo 1: Os Pilares da Experiência do Usuário (UX)',
        duration: '10h',
        topics: [
          'Psicologia do Design: Gestalt e Heurísticas de Nielsen',
          'Estratégias de Pesquisa: Entrevistas com Usuários e Personas',
          'Jornada de Usuário e Testes de Usabilidade'
        ]
      },
      {
        title: 'Módulo 2: Domínio e Hacks de Interface (UI) no Figma',
        duration: '15h',
        topics: [
          'Espaçamento, Grades de Layout e Coesão Visual',
          'Tipografia profissional para telas e hierarquia visual',
          'Criação de Microinterações incríveis e Smart Animate',
          'Auto-Layout Pro: layouts fluidos e ultra responsivos'
        ]
      },
      {
        title: 'Módulo 3: Criando um Design System do Zero',
        duration: '18h',
        topics: [
          'Design Tokens: Cores, Fontes, Bordas e Sombras em Variáveis',
          'Componentização Completa: Botões, Formulários, Cards e Modais',
          'Organização de biblioteca, documentação e sincronização'
        ]
      },
      {
        title: 'Módulo 4: Portfólio Estratégico & Transição de Carreira',
        duration: '12h',
        topics: [
          'Como criar cases detalhados no Behance e Notion',
          'Como apresentar suas escolhas de design em entrevistas técnicas',
          'Precificação, propostas e negociação com clientes'
        ]
      }
    ]
  },
  {
    id: 'ai-for-business',
    title: 'Formação IA para Negócios & Automações Sem Código',
    category: 'business',
    subtitle: 'Multiplique sua produtividade integrando APIs de IA, chatbots avançados e automatizando rotinas exaustivas.',
    rating: 5.0,
    ratingCount: 540,
    totalStudents: 2900,
    originalPrice: 897.00,
    promotionalPrice: 297.00,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600',
    duration: '40 horas',
    lecturesCount: 80,
    level: 'Todos os níveis',
    description: 'Entre no topo da era da Inteligência Artificial. Não seja substituído por IA: aprenda a construir fluxos de trabalho autônomos integrando ChatGPT, Gemini, Make.com, n8n e Typebot. Crie assistentes de atendimento nativos do WhatsApp que fecham vendas para você no piloto automático.',
    skillsAcquired: [
      'Engenharia de Prompt profissional para produtividade empresarial',
      'Configuração de fluxos de automação no Make.com e n8n',
      'Criação de Chatbots complexos de conversão com Typebot',
      'Conexão de APIs de inteligência artificial via webhooks',
      'Integração e envio automático de planilhas, emails e mensagens'
    ],
    bonuses: [
      'MODELO DE AUTOMAÇÃO DE AGENDAMENTOS: Blueprint de Make pronto para agendar e cobrar clientes direto do Google Calendar.',
      'MESTRES DO PROMPT: Guia rápido de bolso com 75 prompts perfeitos de marketing, código e vendas.',
      'ASSISTENTE WHATSAPP EXTRA: Fluxo pronto do Typebot de pré-vendas projetado especificamente para infoprodutos.'
    ],
    instructor: {
      name: 'Ana Júlia',
      role: 'Especialista em Automações de IA & Operações',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    syllabus: [
      {
        title: 'Módulo 1: Engenharia de Prompts na Prática',
        duration: '8h',
        topics: [
          'Arquitetura de instrução avançada de IA',
          'Few-Shot Prompting, Chain of Thought e Meta Prompts',
          'Evitando alucinações e garantindo respostas de alta confiabilidade'
        ]
      },
      {
        title: 'Módulo 2: O Poder do No-Code com Make.com e n8n',
        duration: '12h',
        topics: [
          'Princípios de Webhooks, Request e Responses',
          'Criando automação: Google Sheets + ChatGPT + Slack/Discord',
          'Sincronização de CRM para envio automático de emails com proposta'
        ]
      },
      {
        title: 'Módulo 3: Criando Chatbots Inteligentes no WhatsApp',
        duration: '12h',
        topics: [
          'Construindo lógica visual no Typebot',
          'Enriquecendo dados do chat com consultas dinâmicas de IA',
          'Integrando APIs de envio em massa inteligente (Evolution API)'
        ]
      },
      {
        title: 'Módulo 4: Produtividade Organizacional & Agentes Autônomos',
        duration: '8h',
        topics: [
          'Configurando Agentes (AI Crews) para rodar tarefas em background',
          'Estratégias de governança e ética de uso de inteligência artificial',
          'Como vender consultoria de automatização e IA para empresas'
        ]
      }
    ]
  }
];

export const CITIES = [
  'São Paulo', 'Rio de Janeiro', 'Bela Horizonte', 'Curitiba', 'Porto Alegre',
  'Florianópolis', 'Salvador', 'Fortaleza', 'Recife', 'Brasília', 'Goiânia',
  'Manaus', 'Belém', 'Vitória', 'Niterói', 'Ribeirão Preto', 'Campinas'
];

export const STUDENT_NAMES = [
  'Lucas', 'Mariana', 'Mateus', 'Ana Clara', 'João Pedro', 'Juliana', 'Felipe',
  'Gabriela', 'Rodrigo', 'Beatriz', 'Guilherme', 'Larissa', 'Bruno', 'Camila',
  'Gustavo', 'Letícia', 'Thiago', 'Luana', 'Diego', 'Isabela', 'Vinícius'
];

export const FAQS = [
  {
    question: 'Como recebo o acesso ao curso?',
    answer: 'Imediatamente após a confirmação da compra pelo WhatsApp, nossa equipe envia as instruções e as suas credenciais exclusivas de login para a nossa plataforma de estudos moderna (Hotmart/Club).'
  },
  {
    question: 'Posso assistir às aulas quando quiser?',
    answer: 'Sim! O acesso é 100% vitalício e online. Você pode assistir de qualquer dispositivo (computador, celular ou tablet) no seu próprio ritmo, a qualquer hora do dia ou da noite.'
  },
  {
    question: 'Os cursos oferecem certificado?',
    answer: 'Com certeza! Ao finalizar todos os módulos na nossa plataforma de ensino, você recebe seu certificado digital com número de registro e QR Code, perfeito para valorizar seu currículo ou portfólio.'
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Aceitamos PIX à vista (com desconto exclusivo), Boleto bancário ou Cartão de Crédito parcelado em até 12x.'
  },
  {
    question: 'E se eu tiver dúvidas durante o curso?',
    answer: 'Temos um espaço integrado de suporte abaixo de cada aula e um canal VIP de alunos no Discord, com nossa equipe técnica de monitores prontos para tirar qualquer dúvida em até 4 horas úteis.'
  }
];
