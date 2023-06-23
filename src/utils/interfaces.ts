import { Product } from './types';

export interface ProductState {
  products: Product[];
}

export interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}
