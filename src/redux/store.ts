import { configureStore, Store } from '@reduxjs/toolkit';
import { ProductState, ProductAction } from '../utils/types';
import productReducer from './reducers/productReducer';

const store: Store<ProductState, ProductAction> = configureStore({
  reducer: productReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
