import { useState } from 'react';
import { 
  COURSES, 
  FAQS 
} from './data';
import { Course, CartItem } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCategories, { CategoryFilter } from './components/CourseCategories';
import CourseCard from './components/CourseCard';
import CourseDetailModal from './components/CourseDetailModal';
import CartSidebar from './components/CartSidebar';
import SocialProofNotification from './components/SocialProofNotification';
import { 
  Star, 
  ShieldCheck, 
  Award, 
  Check, 
  MessageSquare, 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpenCheck,
  Zap,
  Sparkles,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Filter courses based on both selected category and live search queries
  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (course: Course) => {
    const exists = cart.find((item) => item.course.id === course.id);
    if (exists) {
      // Remove if already in cart (toggle behavior for lightweight courses UX)
      setCart((prev) => prev.filter((item) => item.course.id !== course.id));
    } else {
      setCart((prev) => [...prev, { course, quantity: 1 }]);
      // Automatically open the cart to encourage immediate conversion
      setIsCartOpen(true);
    }
  };

  const handleRemoveFromCart = (courseId: string) => {
    setCart((prev) => prev.filter((item) => item.course.id !== courseId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Immediate checkout flow for single course
  const handleQuickBuy = (course: Course) => {
    const message = `Olá! Gostaria de garantir minha vaga no curso:\n- ${course.title} (R$ ${course.promotionalPrice.toFixed(2)})\n\nComo faço para concluir o pagamento e receber o acesso imediato?`;
    const cleanPhone = '5511999999999'; // Default Brazilian WhatsApp placeholder
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // WhatsApp general customer support referral
  const handleSupportContact = () => {
    const message = `Olá! Acessei a plataforma Nexus Academy e gostaria de tirar algumas dúvidas sobre as formações em andamento.`;
    const cleanPhone = '5511999999999';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const scrollToCourses = () => {
    const element = document.getElementById('cursos-grade');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-cta selection:text-white">
      
      {/* Background glow ambiance elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] left-0 w-[600px] h-[600px] bg-brand-cta/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header element */}
      <Header 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)}
        onContactClick={handleSupportContact}
        onCoursesClick={scrollToCourses}
      />

      {/* Hero promo area */}
      <Hero onExploreCourses={scrollToCourses} />

      {/* Multi-feature dynamic search and filter catalog segment */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Course Catalog Title */}
        <div id="cursos-grade" className="text-center space-y-4 max-w-3xl mx-auto mb-12 scroll-mt-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <BookOpenCheck className="h-4 w-4" />
            Nossos Cursos de Especialização
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Escolha Sua Trilha para o Sucesso Profissional
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Nossos cursos contam com metodologias práticas, mentorias diretas e atualizações constantes. 
            Filtrados por áreas estratégicas para facilitar a sua escolha rápida de carreira.
          </p>

          {/* Integrated Dynamic Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-500">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Pesquise por termos ex: React, Metas, Figma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 focus:border-emerald-500 rounded-xl text-xs sm:text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none transition-all shadow-inner text-left"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 text-xs font-mono font-bold cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Dynamic categories selector controller */}
        <CourseCategories 
          activeCategory={activeCategory} 
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            // Optionally clear search metrics during category change
            setSearchQuery('');
          }} 
        />

        {/* Courses Listing Grid */}
        <div className="mt-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  course={course}
                  onViewDetails={(c) => setSelectedCourse(c)}
                  onQuickBuy={(c) => handleQuickBuy(c)}
                  onAddToCart={(c) => handleAddToCart(c)}
                  isInCart={cart.some((item) => item.course.id === course.id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center space-y-4 max-w-sm mx-auto">
              <p className="text-neutral-500 text-sm">
                Nenhum curso correspondente aos filtros atuais foi localizado.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 rounded-lg text-xs font-bold text-emerald-400 cursor-pointer"
              >
                Redefinir Filtros
              </button>
            </div>
          )}
        </div>

        {/* High Conversion Warranties & Bônus Section */}
        <section id="beneficios" className="py-20 mt-20 border-t border-neutral-900 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Box: Trust Warranties Detail cards */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-widest block">
                COMPRA SEGURA & RISCO ZERO
              </span>
              <h3 className="text-3xl font-black text-white leading-tight">
                Garantia Incondicional Blindada de 7 Dias
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                Você matricula-se hoje, assiste aos primeiros módulos das trilhas de conteúdo e, caso ache que o formato ou didática não se encaixam no seu perfil profissional, basta solicitar o reembolso completo em até 7 dias!
              </p>
              
              <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                <strong>Sem burocracias, sem contratos de fidelidade.</strong> Um processo de devolução via PIX simples e amigável feito diretamente pelo nosso canal de atendimento WhatsApp. Seu risco de testar é absolutamente ZERO.
              </p>

              {/* Security Badges Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950 flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase leading-none">Checkout Criptografado</h5>
                    <p className="text-[10.5px] text-neutral-500 mt-1 leading-normal">Ambiente rastreado e certificado.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-900 bg-neutral-950 flex items-start gap-3">
                  <Award className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white uppercase leading-none">Garantia Verificada</h5>
                    <p className="text-[10.5px] text-neutral-500 mt-1 leading-normal">7 dias de teste incondicionais.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Floating visual representation of benefits */}
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-2xl pointer-events-none" />
              
              <div className="relative p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6">
                
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 bg-emerald-500/10 rounded border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-extrabold text-xs">⚡</span>
                  <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
                    Diferenciais Exclusivos Inclusos
                  </h4>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-xs font-bold text-white uppercase leading-none">Acesso Vitalício Imediato</h5>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">Estude no seu ritmo, assista as aulas quantas vezes julgar necessário, sem expiração.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-xs font-bold text-white uppercase leading-none">Suporte VIP no Discord & WhatsApp</h5>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">Canal direto de dúvidas com professores e grupo fechado de network com alunos.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-xs font-bold text-white uppercase leading-none">Material Base & Códigos-Fontes Inclusos</h5>
                      <p className="text-[11px] text-neutral-400 leading-normal mt-1">Placas estruturadas de figma, códigos prontos de projetos e planilhas de testes prontos para duplicar.</p>
                    </div>
                  </li>
                </ul>

                <hr className="border-neutral-850" />

                {/* Simulated promotion incentive widget */}
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-910 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-500 block font-bold font-mono">DÚVIDAS SOBRE O CURSO?</span>
                    <span className="text-xs text-neutral-300 font-semibold">Fale agora com nosso consultor</span>
                  </div>
                  <button
                    onClick={handleSupportContact}
                    className="px-4 py-2.5 bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 rounded-lg text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="h-4 w-4 fill-neutral-950" /> Conversar
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Dynamic interactive FAQ segment group */}
        <section id="faq" className="py-20 border-t border-neutral-900 scroll-mt-24">
          <div className="max-w-3xl mx-auto space-y-12">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Suas dúvidas respondidas
              </span>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Perguntas Frequentes — FAQ
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Compilamos as principais dúvidas dos novos alunos para ajudar a destravar sua jornada de estudos.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden hover:border-neutral-700 transition-all duration-150"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                    >
                      <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-emerald-400 shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-neutral-400 group-hover:text-white shrink-0" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-t border-neutral-850 bg-neutral-950/60"
                        >
                          <p className="p-5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Simulated direct call text promo */}
            <div className="text-center py-6 bg-neutral-950 rounded-xl border border-neutral-900 mx-auto max-w-xl">
              <p className="text-xs text-neutral-300 font-medium leading-normal">
                Não localizou sua dúvida? Fale com nosso suporte humanizado individual para fechar sua inscrição!
              </p>
              <button
                onClick={handleSupportContact}
                className="mt-3.5 px-5 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:text-white font-bold text-xs transition-all tracking-wide inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                Dúvidas de Vendas WhatsApp
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Styled conversion footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400 text-xs mt-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between border-b border-neutral-900 pb-8">
          
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5">
              <div className="h-7 w-7 rounded bg-emerald-500 flex items-center justify-center text-neutral-950 font-bold">N</div>
              <span className="font-bold text-white text-base">NEXUS ACADEMY</span>
            </div>
            <p className="text-neutral-500 leading-relaxed max-w-xs mx-auto md:mx-0">
              Transformando carreiras através de tecnologia, design, tráfego e automações de ponta no Brasil.
            </p>
          </div>

          <div className="md:col-span-8 flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <button onClick={scrollToCourses} className="hover:text-emerald-400 cursor-pointer text-xs font-semibold">Ver Todos os Cursos</button>
            <a href="#beneficios" className="hover:text-emerald-400 text-xs font-semibold">Garantias</a>
            <a href="#faq" className="hover:text-emerald-400 text-xs font-semibold">Perguntas Frequentes</a>
            <button onClick={handleSupportContact} className="hover:text-emerald-400 cursor-pointer text-xs font-semibold flex items-center gap-1">
              Contato Suporte
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center text-[10px] text-neutral-600 font-mono space-y-2">
          <p>
            © {new Date().getFullYear()} Nexus Academy. Todos os direitos reservados. CNPJ: 00.000.000/0001-00.
          </p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            A Nexus Academy é uma plataforma educacional independente. O uso inteligente das marcas registradas Hotmart, WhatsApp e Meta referem-se estritamente às integrações e meios técnicos utilizados de forma opinativa.
          </p>
        </div>
      </footer>

      {/* Slide-in cart sidebar navigation panel */}
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Dynamic Popups element triggers */}
      <CourseDetailModal 
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onQuickBuy={(c) => {
          setSelectedCourse(null);
          handleQuickBuy(c);
        }}
        onAddToCart={(c) => {
          handleAddToCart(c);
        }}
        isInCart={selectedCourse ? cart.some((item) => item.course.id === selectedCourse.id) : false}
      />

      {/* Social Proof notification popups */}
      <SocialProofNotification />

    </div>
  );
}
