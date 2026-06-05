import { useState } from 'react';
import { ShoppingBag, BookOpen, MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onContactClick: () => void;
  onCoursesClick: () => void;
}

export default function Header({ cartCount, onCartClick, onContactClick, onCoursesClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-45 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-accent to-emerald-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <span className="font-bold text-neutral-950 text-xl tracking-tighter">E</span>
            </div>
            <div>
              <span className="font-extrabold text-white text-xl tracking-wide block">EXPERT</span>
              <span className="text-[10px] text-brand-accent font-mono tracking-widest block -mt-1 font-bold">ACADEMY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={onCoursesClick}
              className="text-sm font-medium text-neutral-300 hover:text-brand-accent transition-colors cursor-pointer"
            >
              Cursos
            </button>
            <a 
              href="#beneficios" 
              className="text-sm font-medium text-neutral-300 hover:text-brand-accent transition-colors"
            >
              Garantia & Bônus
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium text-neutral-300 hover:text-brand-accent transition-colors"
            >
              Dúvidas Frequentes
            </a>
            <button 
              onClick={onContactClick}
              className="text-sm font-medium text-neutral-350 hover:text-brand-accent transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquare className="h-4 w-4 text-brand-accent animate-pulse" /> Suporte WhatsApp
            </button>
          </nav>

          {/* Shopping Cart Trigger */}
          <div className="flex items-center gap-4">
            <button 
              id="cart-trigger-btn"
              onClick={onCartClick} 
              className="relative p-2.5 rounded-xl bg-brand-card border border-brand-border text-neutral-200 hover:text-brand-accent hover:border-brand-accent/30 transition-all cursor-pointer group"
            >
              <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-cta text-[11px] font-bold text-white shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-brand-accent"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-border bg-brand-bg/95 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCoursesClick();
                }}
                className="w-full text-left py-2 text-base font-medium text-neutral-200 hover:text-brand-accent border-b border-brand-border block"
              >
                Ver Cursos
              </button>
              <a
                href="#beneficios"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left py-2 text-base font-medium text-neutral-200 hover:text-brand-accent border-b border-brand-border block"
              >
                Garantia & Bônus
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left py-2 text-base font-medium text-neutral-200 hover:text-brand-accent border-b border-brand-border block"
              >
                Dúvidas Frequentes
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full text-left py-2 text-base font-medium text-brand-accent flex items-center gap-2"
              >
                <MessageSquare className="h-5 w-5" /> Falar com Suporte Vendas
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
