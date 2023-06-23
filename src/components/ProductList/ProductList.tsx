import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addProduct, removeProduct } from '../../redux/actions/productActions';
import AddProductModal from '../AddProductModal/AddProductModal';
import RemoveConfirmationModal from '../RemoveConfirmationModal/RemoveConfirmationModal';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../utils/types';
import './ProductList.scss';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [showNotification, setShowNotification] = useState(false);

  const handleAddProduct = (product: string) => {
    dispatch(addProduct(product));
    setShowAddModal(false);
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(selectedProductId));
    setShowRemoveModal(false);
    setShowNotification(true);
  };

  const openRemoveModal = (productId: string) => {
    setSelectedProductId(productId);
    setShowRemoveModal(true);
  };

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a: Product, b: Product) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } 
    
      return 0;
    });
    return sortedProducts;
  };

  const handleSortOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortOption(event.target.value);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div className="product-list">
      <h1 className="product-list__title">Список товарів</h1>
      <div className="product-list__controls">
        <button
          className="product-list__add-button"
          onClick={() => setShowAddModal(true)}>
          Додати товар
        </button>
        <select
          className="product-list__sort-select"
          value={sortOption}
          onChange={handleSortOptionChange}>
          <option value="name">Сортувати за назвою</option>
          <option value="count">Сортувати за кількістю</option>
        </select>
      </div>

      {sortProducts().map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={() => openRemoveModal(product.id)}
        />
      ))}

      {showAddModal && (
        <div className="modal-wrapper">
          <div className="modal-content">
            <AddProductModal
              onAdd={handleAddProduct}
              onClose={handleAddModalClose}
            />
          </div>
        </div>
      )}
      {showRemoveModal && (
        <div className="modal-wrapper">
          <div className="modal-content">
            <RemoveConfirmationModal
              onCancel={() => setShowRemoveModal(false)}
              onConfirm={handleRemoveProduct}
            />
          </div>
        </div>
      )}
      {showNotification && (
        <div className="notification">
          <p>Товар успішно видалено!</p>
          <button
            className="notification__close-button"
            onClick={handleNotificationClose}>
            Закрити
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
