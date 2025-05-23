export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images?: string[];
  brand?: string;
  category?: string;
  rating?: number;
}