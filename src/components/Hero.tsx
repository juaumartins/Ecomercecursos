import { useEffect, useState } from 'react';
import { Play, Sparkles, ShieldCheck, Award, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreCourses: () => void;
}

export default function Hero({ onExploreCourses }: HeroProps) {
  const [studentCounter, setStudentCounter] = useState(19480);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Animate the student counter subtly
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCounter((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section" className="relative pt-8 pb-20 md:py-28 overflow-hidden">
      {/* Absolute gradient background stars/effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-brand-cta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Assets */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Promotion Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="h-4 w-4 text-brand-accent animate-spin" style={{ animationDuration: '4s' }} />
              Oferta Especial de Lançamento — 70% Off Hoje
            </div>

            {/* main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Domine as Habilidade Mais <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-accent via-emerald-300 to-brand-accent bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                Lucrativas e Demandadas
              </span>{' '}
              do Mundo Digital
            </h1>

            {/* subheadline */}
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Formações completas focadas no mercado real, com suporte vip direto, 
              acesso vitalício e projetos reais. Compre com segurança e comece agora 
              mesmo com checkout rápido no WhatsApp!
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="cta-ver-cursos"
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-cta text-white font-extrabold hover:bg-brand-cta/90 transition-all shadow-[0_4px_25px_rgba(244,63,94,0.4)] hover:shadow-[0_4px_30px_rgba(244,63,94,0.6)] cursor-pointer flex items-center justify-center gap-2 group text-base"
              >
                Garantir Minha Vaga
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#beneficios"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-neutral-300 font-bold hover:bg-neutral-800 hover:text-white transition-all text-center text-sm"
              >
                Ver Bônus Inclusos
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-border max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-accent mb-1">
                  <Users className="h-4 w-4" />
                  <span className="font-mono text-sm font-bold tracking-tight">
                    {studentCounter.toLocaleString('pt-BR')}+
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-medium">Alunos formados</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-accent mb-1">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-tight">AUTO-AVALIAÇÃO</span>
                </div>
                <p className="text-xs text-neutral-400 font-medium">Nota média de 4.9/5★</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-accent mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-tight">ACESSO VITALÍCIO</span>
                </div>
                <p className="text-xs text-neutral-400 font-medium">Assista quando quiser</p>
              </div>
            </div>

          </div>

          {/* Hero interactive visual banner (mockup preview) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-2 bg-brand-card border border-brand-border shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Card Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-brand-bg rounded-xl mb-2 border border-brand-border">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 block" />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                  EXPERT_STUDIO_INSIDE.EXE
                </span>
                <span className="h-4 w-4 rounded bg-brand-bg flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                </span>
              </div>

              {/* Video Mockup Frame */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-brand-bg flex flex-col items-center justify-center border border-brand-border group">
                
                {/* Simulated playback cover / poster */}
                {!isVideoPlaying ? (
                  <>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center brightness-35 group-hover:scale-105 transition-transform duration-700" />
                    
                    {/* Glowing grid effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent" />
                    
                    {/* Glowing play button inside */}
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="relative z-10 h-16 w-16 rounded-full bg-brand-cta hover:bg-brand-cta/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.5)] transition-all transform scale-100 hover:scale-110 active:scale-95 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.85)] cursor-pointer"
                    >
                      <Play className="h-7 w-7 text-white ml-1 fill-white" />
                    </button>

                    <div className="absolute bottom-4 left-4 z-10 text-left">
                      <span className="text-[10px] bg-brand-accent/20 text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider font-mono">
                        Visualizar plataforma
                      </span>
                      <p className="text-xs text-neutral-300 font-semibold mt-1">
                        Assista à demonstração rápida por dentro da área de membros
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-brand-bg p-4 flex flex-col items-center justify-center text-center space-y-4">
                    {/* simulated typing animation and system dashboard screens */}
                    <div className="w-full text-left font-mono text-[11px] text-brand-accent space-y-1 select-none overflow-hidden max-h-40">
                      <p className="text-neutral-500">&gt; npm run start:career</p>
                      <p className="text-brand-accent">&gt; Conectando à Área de Membros VIP de Alunos...</p>
                      <p className="text-brand-cta">&gt; Carregando Módulos das Formações...</p>
                      <p className="text-neutral-400">&gt; [OK] Acesso a 165+ Aulas Práticas</p>
                      <p className="text-neutral-400">&gt; [OK] Projetos Reais de Portfólio (Figma, GitHub, APIs)</p>
                      <p className="text-neutral-400">&gt; [OK] Suporte Especializado 1:1 Liberado</p>
                      <p className="text-brand-accent tracking-wider font-bold animate-pulse">&gt; GARANTA SUA INSCRIÇÃO NO BOTÃO ABAIXO!</p>
                    </div>

                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="px-4 py-2 bg-brand-card border border-brand-border hover:border-brand-accent/40 hover:text-white rounded-lg text-xs font-semibold text-neutral-400 cursor-pointer"
                    >
                      Voltar ao banner
                    </button>
                  </div>
                )}
              </div>

              {/* Bottom statistics panel inside the card */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-brand-bg p-3 rounded-lg border border-brand-border flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded bg-brand-accent/10 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-brand-accent animate-ping" />
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block font-bold font-mono">SUPORTE VIP</span>
                    <span className="text-xs font-semibold text-neutral-200">Suporte WhatsApp Ativo</span>
                  </div>
                </div>

                <div className="bg-brand-bg p-3 rounded-lg border border-brand-border flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded bg-brand-cta/10 flex items-center justify-center text-brand-cta text-xs font-bold font-mono">
                    ⚡
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block font-bold font-mono">ATUALIZAÇÃO</span>
                    <span className="text-xs font-semibold text-neutral-200">Conteúdo 100% vitalício</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
