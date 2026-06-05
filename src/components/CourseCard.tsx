import { Star, Clock, BookOpen, MessageSquare, ShoppingCart, ArrowUpRight } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  onQuickBuy: (course: Course) => void;
  onAddToCart: (course: Course) => void;
  isInCart: boolean;
  key?: string;
}

export default function CourseCard({ course, onViewDetails, onQuickBuy, onAddToCart, isInCart }: CourseCardProps) {
  
  // Format the visual price representation neatly
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const categoryLabels: Record<string, string> = {
    programming: 'Programação Web & Back-End',
    marketing: 'Growth Marketing & Copywriting',
    design: 'Design UI/UX & Design Systems',
    business: 'Inteligência Artificial & No-Code',
  };

  const categoryPillColors: Record<string, string> = {
    programming: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    marketing: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    design: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    business: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      className="flex flex-col h-full rounded-2xl bg-brand-card border border-brand-border overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-brand-accent/40 hover:shadow-[0_4px_30px_rgba(34,197,94,0.15)] transition-all duration-300"
    >
      {/* Course Banner Cover */}
      <div className="relative aspect-video overflow-hidden group/image">
        <img
          src={course.image}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
        
        {/* Category Pill Tag */}
        <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider font-mono px-3 py-1 rounded-full border ${categoryPillColors[course.category]}`}>
          {categoryLabels[course.category]}
        </span>

        {/* Rating overlay banner */}
        <div className="absolute bottom-3 right-3 bg-brand-bg/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-border flex items-center gap-1">
          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500 animate-pulse" />
          <span className="text-xs font-bold text-white font-mono">{course.rating.toFixed(1)}</span>
          <span className="text-[10px] text-neutral-400">({course.ratingCount})</span>
        </div>
      </div>

      {/* Content Space */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between space-y-4">
        
        {/* Title and details overview */}
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug hover:text-brand-accent transition-colors cursor-pointer" onClick={() => onViewDetails(course)}>
            {course.title}
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 pb-1">
            {course.subtitle}
          </p>
        </div>

        {/* Stats metadata items */}
        <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 py-1.5 border-y border-brand-border">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-brand-accent" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5 text-brand-accent" />
            <span>{course.lecturesCount} aulas</span>
          </div>
          <div className="ml-auto text-[10px] bg-brand-bg border border-brand-border px-2 py-0.5 rounded text-neutral-300 font-bold uppercase">
            {course.level}
          </div>
        </div>

        {/* Pricing Segment */}
        <div className="flex items-baseline justify-between py-1">
          <div>
            <span className="text-xs text-neutral-500 line-through font-mono tracking-tight block">
              De R$ {course.originalPrice.toFixed(2)}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-brand-accent font-bold uppercase font-mono tracking-wider">PIX / Cartão:</span>
              <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight font-mono">
                R$ {course.promotionalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] bg-brand-accent/15 text-brand-accent font-bold px-2 py-0.5 rounded-md border border-brand-accent/25 uppercase font-mono animate-bounce" style={{ animationDuration: '3s' }}>
              Economize R$ {(course.originalPrice - course.promotionalPrice).toFixed(0)}
            </span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="space-y-2 pt-1.5 select-none">
          
          {/* Quick direct Checkout WhatsApp */}
          <button
            onClick={() => onQuickBuy(course)}
            className="w-full py-3.5 rounded-xl bg-brand-cta text-white font-extrabold text-xs sm:text-sm hover:bg-brand-cta/90 transition-all duration-200 active:scale-98 shadow-[0_4px_15px_rgba(244,63,94,0.3)] hover:shadow-[0_4px_25px_rgba(244,63,94,0.5)] flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="h-4.5 w-4.5 fill-white" />
            Comprar pelo WhatsApp
          </button>

          {/* Secondary Actions : Add to Cart & View details */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onAddToCart(course)}
              className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1 cursor-pointer ${
                isInCart
                  ? 'bg-neutral-850 border-brand-border text-brand-accent shadow-inner'
                  : 'bg-brand-bg border-brand-border text-neutral-300 hover:border-brand-accent/30 hover:bg-zinc-800/50 hover:text-white'
              }`}
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              {isInCart ? 'No carrinho' : 'Adicionar'}
            </button>
            
            <button
              onClick={() => onViewDetails(course)}
              className="py-2.5 px-2 rounded-xl text-neutral-400 border border-brand-border hover:border-brand-accent/30 bg-brand-bg hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              Ver Detalhes
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
