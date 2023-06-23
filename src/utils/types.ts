export type Product = {
  id: string;
  name: string;
  count: number;
};

export type ProductState = {
  products: Product[];
};

export type ProductAction = {
  type: string;
  payload: string | Product;
};
