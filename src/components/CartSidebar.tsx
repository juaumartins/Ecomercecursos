import { useState } from 'react';
import { X, ShoppingBag, Trash2, ShieldCheck, MessageSquare, ArrowRight, UserCheck } from 'lucide-react';
import { CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (courseId: string) => void;
  onClearCart: () => void;
}

export default function CartSidebar({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }: CartSidebarProps) {
  const [phoneNumber, setPhoneNumber] = useState('5511999999999'); // Default Brazilian WhatsApp placeholder
  const [buyerName, setBuyerName] = useState('');

  const calculateTotal = () => {
    return cartItems.reduce((acc, curr) => acc + curr.course.promotionalPrice, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Build the custom WhatsApp checkout message exactly in the format requested by the user:
    let message = `Olá! Gostaria de garantir minha vaga nos seguintes cursos:\n`;
    
    cartItems.forEach((item) => {
      message += `- ${item.course.title} (R$ ${item.course.promotionalPrice.toFixed(2)})\n`;
    });

    const total = calculateTotal();
    message += `Total: R$ ${total.toFixed(2)}. Como faço para receber o acesso?`;

    if (buyerName.trim()) {
      message += `\n\nMeu nome é: ${buyerName.trim()}`;
    }

    // WhatsApp send API link
    // Strip non-numbers from telephone
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;
    
    // Smooth redirection tracking standard
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="cart-sidebar-container" className="fixed inset-0 z-50 overflow-hidden">
          
          {/* Backdrop panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
          />

          {/* Lateral frame animation container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-brand-bg border-l border-brand-border flex flex-col justify-between"
            >
              
              {/* Sidebar Header */}
              <div className="px-6 py-5 border-b border-brand-border bg-brand-card flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="h-5 w-5 text-brand-accent" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Meu Carrinho</h3>
                  <span className="bg-brand-bg border border-brand-border text-[10px] font-bold px-2 py-0.5 rounded-full text-brand-accent font-mono">
                    {cartItems.length}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg bg-brand-bg border border-brand-border text-neutral-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Sidebar content body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-neutral-950 border border-neutral-900 flex items-center justify-center text-neutral-500">
                      <ShoppingBag className="h-8 w-8 text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Seu carrinho está vazio</p>
                      <p className="text-xs text-neutral-500 mt-1 max-w-xs">
                        Adicione algumas das nossas trilhas vip de especialização para ver descontos progressivos aqui!
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-neutral-900 border border-neutral-805 hover:border-emerald-500/50 hover:text-emerald-400 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      Voltar para Cursos
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.course.id}
                        className="flex gap-3 bg-brand-card p-3.5 rounded-xl border border-brand-border hover:border-brand-accent/20 transition-all"
                      >
                        {/* Course visual cover preview */}
                        <img
                          src={item.course.image}
                          alt={item.course.title}
                          referrerPolicy="no-referrer"
                          className="h-12 w-12 rounded-lg object-cover border border-brand-border"
                        />
                        
                        {/* Course descriptors and actions */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-neutral-200 truncate pr-4">
                            {item.course.title}
                          </p>
                          <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-bold block pt-0.5">
                            {item.course.category}
                          </span>
                          
                          <div className="flex items-center justify-between mt-1 pt-1 border-t border-brand-border">
                            <span className="text-xs font-bold text-white font-mono">
                              R$ {item.course.promotionalPrice.toFixed(2)}
                            </span>
                            <button
                              onClick={() => onRemoveItem(item.course.id)}
                              className="text-neutral-500 hover:text-red-400 p-1 rounded-md hover:bg-neutral-900 transition-colors cursor-pointer"
                              title="Remover curso"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>
                    ))}

                    {/* Clear cart action */}
                    <div className="text-right">
                      <button
                        onClick={onClearCart}
                        className="text-[11px] font-mono text-neutral-500 hover:text-red-400 font-bold hover:underline py-1 cursor-pointer"
                      >
                        Esvaziar meu carrinho
                      </button>
                    </div>
                  </div>
                )}

                {cartItems.length > 0 && (
                  <div className="space-y-4 pt-4 border-t border-brand-border">
                    
                    {/* Simulator Configuration Settings */}
                    <div className="bg-brand-card p-4 rounded-xl border border-brand-border space-y-3.5">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 font-mono">
                        Configuração de Contato
                      </h4>
                      
                      {/* Name placeholder input field for conversions! */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-semibold text-neutral-400 block uppercase">
                          Seu Nome (opcional)
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: João da Silva"
                          value={buyerName}
                          onChange={(e) => setBuyerName(e.target.value)}
                          className="w-full px-3 py-2 text-xs bg-brand-bg border border-brand-border text-neutral-100 rounded-lg focus:outline-none focus:border-brand-accent text-left font-sans"
                        />
                      </div>

                      {/* Phone configuration input field */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono font-semibold text-neutral-400 block uppercase">
                          Telefone WhatsApp destino
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: 5511999999999"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-3 py-2 text-xs bg-brand-bg border border-brand-border text-neutral-100 rounded-lg focus:outline-none focus:border-brand-accent font-mono text-left"
                        />
                        <p className="text-[9px] text-neutral-550 leading-normal mt-1">
                          Insira com DDI (55) + DDD + número. <br />
                          Caso queira enviar para o seu próprio WhatsApp para testar a mensagem de vendas, altere este número antes de clicar!
                        </p>
                      </div>

                    </div>

                  </div>
                )}

              </div>

              {/* Sidebar bottom Checkout calculations */}
              {cartItems.length > 0 && (
                <div className="p-6 bg-brand-card border-t border-brand-border space-y-4 select-none">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
                      <span>Subtotal dos cursos:</span>
                      <span className="line-through">
                        R$ {cartItems.reduce((acc, curr) => acc + curr.course.originalPrice, 0).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-white">Valor Promocional total:</span>
                      <span className="text-xl font-extrabold text-brand-accent font-mono tracking-tight">
                        R$ {calculateTotal().toFixed(2)}
                      </span>
                    </div>

                    <div className="bg-brand-accent/10 border border-brand-accent/15 p-2 rounded-lg text-[10px] text-brand-accent font-mono flex items-center gap-1.5 justify-center font-bold">
                      <span>🔥 ECONOMIA TOTAL DE:</span>
                      <strong className="font-extrabold text-brand-accent">
                        R$ {(cartItems.reduce((acc, curr) => acc + curr.course.originalPrice, 0) - calculateTotal()).toFixed(2)}
                      </strong>
                    </div>
                  </div>

                  {/* Final Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-xl bg-brand-cta hover:bg-brand-cta/90 text-white font-extrabold transition-all shadow-[0_4px_20px_rgba(244,63,94,0.35)] flex items-center justify-center gap-2 cursor-pointer group text-sm sm:text-base"
                  >
                    <MessageSquare className="h-5 w-5 fill-white" />
                    Finalizar no WhatsApp
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-1.5 justify-center text-[10.5px] text-neutral-500 font-mono">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-accent" />
                    <span>Conexão direta, criptografada e 100% segura</span>
                  </div>
                </div>
              )}

            </motion.div>
          </div>

        </div>
      )}
    </AnimatePresence>
  );
}
