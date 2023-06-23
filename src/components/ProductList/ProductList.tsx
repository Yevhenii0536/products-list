import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addProduct, removeProduct } from '../../redux/actions/productActions';
import AddProductModal from '../AddProductModal/AddProductModal';
import RemoveConfirmationModal from '../RemoveConfirmationModal/RemoveConfirmationModal';
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
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortDirectionSymbol = sortDirection === 'asc' ? '\u2193' : '\u2191';

  const handleAddProduct = (product: { name: string; count: number }) => {
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
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
      } else if (sortOption === 'count') {
        return a.count - b.count;
      }
      return 0;
    });

    if (sortOption === 'name') {
      return sortDirection === 'asc'
        ? sortedProducts
        : sortedProducts.reverse();
    } else {
      return sortDirection === 'asc'
        ? sortedProducts
        : sortedProducts.reverse();
    }
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

  const handleSortDirectionChange = () => {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
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
        <button
          className="product-list__sort-direction-button"
          onClick={handleSortDirectionChange}>
          {sortDirectionSymbol}
        </button>
      </div>

      <table className="product-list__table">
        <thead>
          <tr>
            <th>Назва товару</th>
            <th>Кількість</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortProducts().map((product: Product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.count}</td>
              <td>
                <button onClick={() => openRemoveModal(product.id)}>
                  Видалити
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
