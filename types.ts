
import type React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  company: string;
  quote: string;
}
