export type Product = {
  id: string;
  name: string;
};

export type ProductState = {
  products: Product[];
};

export type ProductAction = {
  type: string;
  payload: string | Product;
};
