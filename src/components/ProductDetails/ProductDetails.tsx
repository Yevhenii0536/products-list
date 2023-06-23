import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.scss';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="product-details">
      <h1 className="product-details__title">Product Details</h1>
      <p className="product-details__id">Product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
