import { Code, Megaphone, Palette, Cpu, Layers } from 'lucide-react';

export type CategoryFilter = 'all' | 'programming' | 'marketing' | 'design' | 'business';

interface CourseCategoriesProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

export default function CourseCategories({ activeCategory, onSelectCategory }: CourseCategoriesProps) {
  const categoriesList = [
    { id: 'all', name: 'Todos os Cursos', icon: Layers, color: 'emerald' },
    { id: 'programming', name: 'Programação', icon: Code, color: 'blue' },
    { id: 'marketing', name: 'Marketing & Tráfego', icon: Megaphone, color: 'amber' },
    { id: 'design', name: 'UI/UX Design', icon: Palette, color: 'purple' },
    { id: 'business', name: 'IA & Automações', icon: Cpu, color: 'teal' },
  ] as const;

  return (
    <div id="course-categories-container" className="flex flex-wrap justify-center gap-2.5 md:gap-3.5 pb-8">
      {categoriesList.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeCategory === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => onSelectCategory(item.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
              isActive
                ? 'bg-brand-accent text-neutral-950 border-emerald-400 shadow-[0_4px_20px_rgba(34,197,94,0.3)] font-extrabold'
                : 'bg-brand-card/60 text-neutral-350 border-brand-border hover:border-brand-accent/30 hover:bg-brand-card hover:text-white'
            }`}
          >
            <IconComponent className={`h-4.5 w-4.5 ${isActive ? 'text-neutral-950 font-bold' : 'text-neutral-400'}`} />
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
