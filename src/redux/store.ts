import { createStore, Store } from 'redux';
import { ProductState, ProductAction } from '../utils/types';
import productReducer from './reducers/productReducer';

const store: Store<ProductState, ProductAction> = createStore(productReducer);

export type RootState = ReturnType<typeof store.getState>;
export default store;

