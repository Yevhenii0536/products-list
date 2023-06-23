import { ADD_PRODUCT, REMOVE_PRODUCT } from '../../utils/constants';

export const addProduct = (product: { name: string; count: number }) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (productId: string) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});
