import { useState } from 'react';
import { X, Play, Clock, BookOpen, Star, CheckCircle, Gift, ChevronDown, ChevronUp, Shield, MessageSquare, Award } from 'lucide-react';
import { Course } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onQuickBuy: (course: Course) => void;
  onAddToCart: (course: Course) => void;
  isInCart: boolean;
}

export default function CourseDetailModal({ course, onClose, onQuickBuy, onAddToCart, isInCart }: CourseDetailModalProps) {
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(0);

  if (!course) return null;

  const toggleModule = (index: number) => {
    setActiveModuleIndex(activeModuleIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        
        {/* Backdrop overlay filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm"
        />

        {/* Modal viewport alignment */}
        <div className="flex min-h-screen items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-4xl rounded-2xl bg-brand-card border border-brand-border text-neutral-100 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
          >
            
            {/* Close Button Trigger */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-bg/80 border border-brand-border text-neutral-400 hover:text-white hover:border-neutral-700 transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Layout Split: Cover & Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] overflow-y-auto">
              
              {/* Left Column: Visual cap and actions summary */}
              <div className="md:col-span-5 bg-[#121214] p-6 md:p-8 flex flex-col justify-between border-r border-brand-border">
                <div className="space-y-6">
                  
                  {/* Cap cap image */}
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-brand-border">
                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-neutral-950/25" />
                  </div>

                  {/* Rating metadata */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-accent">
                      Curso de altíssima satisfação
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="text-sm font-bold font-mono text-white">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs text-neutral-400">
                      Avaliado por mais de <strong>{course.ratingCount}</strong> alunos inscritos.
                    </p>
                  </div>

                  {/* Bullet specifics */}
                  <div className="space-y-3 pt-2 text-xs font-mono text-neutral-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-accent" />
                      <span>Duração Total: <strong>{course.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-brand-accent" />
                      <span>Grade: <strong>{course.lecturesCount} aulas</strong> em vídeo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-brand-accent" />
                      <span>Certificado Digital Verificado</span>
                    </div>
                  </div>

                  <hr className="border-brand-border" />

                  {/* Instructor brief badge */}
                  <div className="flex items-center gap-3 bg-brand-bg/50 p-3 rounded-lg border border-brand-border">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover border border-brand-accent/25"
                    />
                    <div>
                      <span className="text-[10px] text-neutral-500 block font-bold font-mono">INSTRUTOR(A)</span>
                      <p className="text-xs font-bold text-neutral-200">{course.instructor.name}</p>
                      <p className="text-[10px] text-neutral-400 leading-tight">{course.instructor.role}</p>
                    </div>
                  </div>

                </div>

                {/* Left Bottom Quick Price & CTAs */}
                <div className="space-y-3 pt-6 border-t border-brand-border mt-6 md:mt-0 select-none">
                  <div>
                    <span className="text-xs text-neutral-500 line-through font-mono">
                      De R$ {course.originalPrice.toFixed(2)}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-white font-mono">
                        R$ {course.promotionalPrice.toFixed(2)}
                      </span>
                      <span className="text-xs text-brand-accent font-bold font-mono">PIX 12% OFF</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onQuickBuy(course)}
                    className="w-full py-3.5 rounded-xl bg-brand-cta hover:bg-brand-cta/90 text-white font-extrabold text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_15px_rgba(244,63,94,0.3)] hover:shadow-[0_4px_25px_rgba(244,63,94,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-white" />
                    Inscrever-se pelo WhatsApp
                  </button>

                  <button
                    onClick={() => onAddToCart(course)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                      isInCart
                        ? 'bg-neutral-850 border-brand-border text-brand-accent'
                        : 'bg-brand-bg border-brand-border text-neutral-300 hover:border-brand-accent/30 hover:bg-brand-card hover:text-white'
                    }`}
                  >
                    {isInCart ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}
                  </button>
                </div>

              </div>

              {/* Right Column: Detailed summary specs */}
              <div className="md:col-span-7 p-6 md:p-8 space-y-6 overflow-y-auto">
                
                {/* Title & overview */}
                <div>
                  <span className="text-xs font-semibold text-brand-accent font-mono tracking-widest uppercase">
                    Ementa e Conteúdo Prático
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-white mt-1 leading-snug">
                    {course.title}
                  </h2>
                </div>

                {/* Description details */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-bold">SOBRE O CURSO</h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {course.description}
                  </p>
                </div>

                {/* Skills Acquired */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-bold">O QUE VOCÊ VAI APRENDER</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-300">
                    {course.skillsAcquired.map((skill, index) => (
                      <div key={index} className="flex items-start gap-2 bg-brand-bg/60 p-2.5 rounded-lg border border-brand-border">
                        <CheckCircle className="h-4 w-4 text-brand-accent shrink-0 mt-0.5" />
                        <span className="text-xs leading-normal font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accordion: Full Syllabus */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-bold">GRADE CURRICULAR COMPLETA</h4>
                  <div className="space-y-2.5">
                    {course.syllabus.map((module, index) => {
                      const isOpen = activeModuleIndex === index;
                      return (
                        <div key={index} className="rounded-xl border border-brand-border overflow-hidden bg-brand-bg/30">
                          
                          {/* Accordion Header bar */}
                          <button
                            onClick={() => toggleModule(index)}
                            className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-neutral-850/30 transition-all duration-150 cursor-pointer"
                          >
                            <div>
                              <span className="text-[10px] text-brand-accent font-bold font-mono">MÓDULO {index + 1}</span>
                              <h5 className="text-xs sm:text-sm font-semibold text-white mt-0.5">{module.title}</h5>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[10.5px] font-mono text-neutral-500 font-semibold">{module.duration}</span>
                              {isOpen ? <ChevronUp className="h-4 w-4 text-neutral-400" /> : <ChevronDown className="h-4 w-4 text-neutral-400" />}
                            </div>
                          </button>

                          {/* Accordion List items */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden border-t border-brand-border bg-brand-bg/65"
                              >
                                <ul className="p-4 space-y-2 text-xs text-neutral-350">
                                  {module.topics.map((topic, tIdx) => (
                                    <li key={tIdx} className="flex items-center gap-2">
                                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent block shrink-0" />
                                      <span className="font-medium">{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Exquisite Bonuses Area */}
                <div className="p-5 rounded-xl border border-brand-accent/15 bg-brand-bg/40 space-y-3">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-brand-accent animate-bounce" />
                    <h5 className="text-xs font-extrabold uppercase font-mono tracking-wider text-brand-accent">
                      Super Bônus Inclusos Gratuitamente
                    </h5>
                  </div>
                  <ul className="text-xs text-neutral-300 space-y-2 font-medium">
                    {course.bonuses.map((bonus, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 bg-brand-bg/50 p-2.5 rounded-lg border border-brand-border">
                        <span className="text-brand-accent font-extrabold font-mono shrink-0">✓</span>
                        <span className="leading-normal">{bonus}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer security trust banner inside details */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-brand-border">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-brand-accent" />
                    <div>
                      <p className="text-[11px] font-bold text-white uppercase leading-none">Compra Segura</p>
                      <p className="text-[9.5px] text-neutral-500 mt-1">Sua vaga garantida imediatamente.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-accent" />
                    <div>
                      <p className="text-[11px] font-bold text-white uppercase leading-none">Garantia Incondicional</p>
                      <p className="text-[9.5px] text-neutral-500 mt-1">7 dias de teste sem compromisso.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </AnimatePresence>
  );
}
