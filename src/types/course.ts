export interface Course {
  id: number;
  title: string;
  provider: string;
  image: string;
  logo: string;
  badge?: string;
  type: 'Course' | 'Professional Certificate' | 'Specialization';
  videoUrl?: string;
  studyMaterials?: {
    title: string;
    pdfUrl: string;
  }[];
}

export interface Category {
  title: string;
  slug: string;
  description: string;
  courses: Course[];
} 