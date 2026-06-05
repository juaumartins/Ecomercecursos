export interface SyllabusModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  category: 'programming' | 'marketing' | 'design' | 'business';
  subtitle: string;
  rating: number;
  ratingCount: number;
  totalStudents: number;
  originalPrice: number;
  promotionalPrice: number;
  image: string;
  duration: string;
  lecturesCount: number;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos os níveis';
  description: string;
  syllabus: SyllabusModule[];
  bonuses: string[];
  skillsAcquired: string[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface CartItem {
  course: Course;
  quantity: number; // For courses on WhatsApp, quantity is usually 1, but we can structure standard cart.
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  courseId: string;
}

export interface SocialProofNotification {
  id: string;
  name: string;
  location: string;
  courseTitle: string;
  timeAgo: string;
}
