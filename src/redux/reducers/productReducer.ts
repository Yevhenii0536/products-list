import { ADD_PRODUCT, REMOVE_PRODUCT } from '../../utils/constants';
import { ProductState, ProductAction, Product } from '../../utils/types';

const productReducer = (
  state: ProductState = { products: [] },
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { name, count } = action.payload as { name: string; count: number };
      const newProduct: Product = {
        id: Math.random().toString(),
        name,
        count,
      };

      return { ...state, products: [...state.products, newProduct] };

    case REMOVE_PRODUCT:
      const productId = action.payload as string;
      return {
        ...state,
        products: state.products.filter(
          (product: Product) => product.id !== productId,
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
