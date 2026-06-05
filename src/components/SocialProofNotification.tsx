import { useEffect, useState } from 'react';
import { Sparkles, MessageSquare, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDENT_NAMES, CITIES, COURSES } from '../data';

interface SocialNotification {
  name: string;
  location: string;
  courseTitle: string;
}

export default function SocialProofNotification() {
  const [notification, setNotification] = useState<SocialNotification | null>(null);

  useEffect(() => {
    // Show first notification after 4 seconds
    const initialTimeout = setTimeout(() => {
      triggerNotification();
    }, 4000);

    // Dynamic Interval of 25 seconds
    const interval = setInterval(() => {
      triggerNotification();
    }, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const triggerNotification = () => {
    // Roll random names, cities, courses
    const name = STUDENT_NAMES[Math.floor(Math.random() * STUDENT_NAMES.length)];
    const city = CITIES[Math.floor(Math.random() * CITIES.length)];
    const course = COURSES[Math.floor(Math.random() * COURSES.length)];

    setNotification({
      name,
      location: city,
      courseTitle: course.title,
    });

    // Automatically remove after 6.5 seconds
    setTimeout(() => {
      setNotification(null);
    }, 6500);
  };

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.9, transition: { duration: 0.25 } }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-brand-card/95 border border-brand-border p-4 rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex items-start gap-3.5 backdrop-blur-md select-none pointer-events-auto"
        >
          {/* Pulsing fire indicator logo/avatar */}
          <div className="h-10 w-10 rounded-lg bg-brand-cta/10 border border-brand-cta/20 flex items-center justify-center shrink-0">
            <Flame className="h-5 w-5 text-brand-cta animate-pulse" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 justify-between">
              <span className="text-[10px] font-mono text-brand-accent font-bold uppercase tracking-wider">
                VAGA PREENCHIDA AGORA 🔥
              </span>
              <span className="text-[9.5px] font-mono text-neutral-500">Há uns segundos</span>
            </div>
            
            <p className="text-xs text-neutral-200 mt-1.5 font-sans leading-normal">
              <strong>{notification.name}</strong> de {notification.location} acabou de confirmar sua inscrição no curso: <br />
              <span className="text-neutral-400 font-medium">"{notification.courseTitle}"</span>
            </p>
          </div>

          {/* Inline clean dismissal tool */}
          <button
            onClick={() => setNotification(null)}
            className="text-neutral-500 hover:text-neutral-350 p-0.5 rounded cursor-pointer"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
