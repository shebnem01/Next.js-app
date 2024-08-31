import { Product, Review, User } from '@prisma/client';

export interface BasketProduct extends Product {
  quantity: number;
}
export interface ProductWithReviews extends Product {
  reviews: (Review & { user: User })[];
}
export interface FormData  {
  email: string
  password: string
 
};