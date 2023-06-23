import React from 'react';
import './ProductDetails.scss';
import { ProductDetailsProps } from '../../utils/interfaces';



const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onClose,
}) => {

  return (
    <div className="product-details">
      <h1 className="product-details__title">Product Details</h1>
      <p className="product-details__id">Product ID: {product.id}</p>
      <p className="product-details__name">Product Name: {product.name}</p>
      <p className="product-details__count">Product Count: {product.count}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductDetails;
