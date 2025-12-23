export interface Episode {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  episodeNumber: string;
  date: string;
  category: string;
}

export interface Host {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    instagram?: string;
  };
}

export type Page = 'home' | 'episodes' | 'about' | 'contact' | 'subscribe';

export interface NavItem {
  label: string;
  page: Page;
}