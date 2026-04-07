import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, ChevronRight, Phone, Quote, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Uma interface administrativa completa para gerenciamento de vendas e inventário com gráficos em tempo real.",
    image: "https://picsum.photos/seed/dashboard/600/400",
    tags: ["React", "Tailwind", "Recharts"],
    link: "#"
  },
  {
    id: 2,
    title: "App de Clima",
    description: "Previsão do tempo detalhada utilizando a API OpenWeatherMap com geolocalização e busca por cidades.",
    image: "https://picsum.photos/seed/weather/600/400",
    tags: ["JavaScript", "API", "CSS3"],
    link: "#"
  },
  {
    id: 3,
    title: "Plataforma de Cursos",
    description: "Sistema de aprendizado online com trilhas de conhecimento, vídeos e certificados para estudantes.",
    image: "https://picsum.photos/seed/education/600/400",
    tags: ["Next.js", "Firebase", "Motion"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Feed",
    description: "Rede social minimalista focada em compartilhamento de fotos e interações em tempo real.",
    image: "https://picsum.photos/seed/social/600/400",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo Santos",
    role: "CEO na TechFlow",
    content: "O trabalho entregue superou todas as nossas expectativas. A atenção aos detalhes e a performance do sistema são impecáveis.",
    avatar: "https://picsum.photos/seed/person1/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "Gerente de Produto na Innovate",
    content: "Excelente profissional. Conseguiu transformar nossas ideias complexas em uma interface intuitiva e muito rápida.",
    avatar: "https://picsum.photos/seed/person2/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Lima",
    role: "CTO na StartupX",
    content: "Código limpo, bem documentado e entrega sempre dentro do prazo. Com certeza trabalharemos juntos novamente.",
    avatar: "https://picsum.photos/seed/person3/100/100",
    rating: 5
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      {/* Cabeçalho */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-indigo-600"
          >
            <Code2 className="h-6 w-6" />
            <span className="text-xl tracking-tight">DevPortfolio</span>
          </motion.div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#sobre" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Sobre mim</a>
              </li>
              <li>
                <a href="#projetos" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Meus Projetos</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200">Contato</a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button (Placeholder for simplicity) */}
          <div className="md:hidden">
            <button className="p-2 text-slate-600">
              <div className="h-0.5 w-6 bg-current mb-1.5"></div>
              <div className="h-0.5 w-6 bg-current mb-1.5"></div>
              <div className="h-0.5 w-6 bg-current"></div>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Seção Sobre Mim */}
        <section id="sobre" className="relative overflow-hidden py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                  <User className="h-4 w-4" />
                  <span>Olá, eu sou o Desenvolvedor</span>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Transformando ideias em <span className="text-indigo-600">experiências digitais</span> memoráveis.
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                  Sou um desenvolvedor apaixonado por criar soluções elegantes e funcionais. Com foco em tecnologias modernas como React, TypeScript e Node.js, busco sempre entregar o melhor desempenho e usabilidade em cada projeto.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#projetos" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-xl">
                    Ver Projetos
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <div className="flex items-center gap-3">
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden rounded-3xl bg-indigo-100 shadow-2xl shadow-indigo-100">
                  <img 
                    src="https://picsum.photos/seed/developer-futuristic-ui/800/800" 
                    alt="Desenvolvedor de Sistemas" 
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-indigo-600/10 blur-3xl"></div>
                <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-indigo-600/10 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção Meus Projetos */}
        <section id="projetos" className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-indigo-600 shadow-sm">
                  <Briefcase className="h-4 w-4" />
                  <span>Portfólio</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meus Projetos Recentes</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                  Uma seleção de trabalhos onde apliquei meus conhecimentos técnicos para resolver problemas reais.
                </p>
              </motion.div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900">{project.title}</h3>
                    <p className="mb-6 flex-1 text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <a 
                        href={project.link} 
                        className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                      >
                        Ver Detalhes
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Depoimentos */}
        <section id="depoimentos" className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                O que dizem os clientes
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mx-auto max-w-2xl text-lg text-slate-600"
              >
                Confira o feedback de quem já trabalhou comigo em projetos de tecnologia.
              </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2"
                >
                  <div className="absolute -top-4 left-8 rounded-2xl bg-indigo-600 p-3 text-white shadow-lg shadow-indigo-200">
                    <Quote className="h-6 w-6" />
                  </div>
                  
                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="mb-8 text-slate-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Contato / CTA */}
        <section id="contato" className="py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-indigo-600 px-8 py-16 text-white shadow-2xl shadow-indigo-200"
            >
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Vamos trabalhar juntos?</h2>
              <p className="mb-10 text-lg text-indigo-100">
                Estou sempre aberto a novos desafios e colaborações interessantes. Sinta-se à vontade para entrar em contato!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:contato@exemplo.com" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-indigo-600 transition-all hover:bg-indigo-50 hover:shadow-lg">
                  <Mail className="h-5 w-5" />
                  Enviar E-mail
                </a>
                <a href="tel:89981107440" className="inline-flex items-center gap-2 rounded-xl border border-indigo-400 bg-indigo-500/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-indigo-500/40">
                  <Phone className="h-5 w-5" />
                  (89) 981107440 - Flavio
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-indigo-400 bg-indigo-500/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-indigo-500/40">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Code2 className="h-6 w-6 text-indigo-600" />
              <span className="text-xl tracking-tight">DevPortfolio</span>
            </div>
            
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Meu Portfólio. Desenvolvido com ❤️ e React.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 transition-colors hover:text-slate-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-slate-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="tel:89981107440" className="text-slate-400 transition-colors hover:text-slate-600" title="(89) 981107440 - Flavio">
                <Phone className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-slate-600">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
