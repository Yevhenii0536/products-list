import React from 'react';
import './ProductCard.scss';
import { Product } from '../../utils/types';

type Props = {
  product: Product;
  onRemove: () => void;
};

const ProductCard: React.FC<Props> = ({ product, onRemove }) => {
  return (
    <div className="product-card">
      <h3 className="product-card__name">{product.name}</h3>
      <h3 className="product-card__count">{product.count}</h3>
      <button className="product-card__remove-button" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
