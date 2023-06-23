import React, { useState } from 'react';
import './AddProductModal.scss';

type Props = {
  onAdd: (product: string) => void;
  onClose: () => void;
};

const AddProductModal: React.FC<Props> = ({ onAdd, onClose }) => {
  const [productName, setProductName] = useState('');

  const handleAddClick = () => {
    if (productName.trim() !== '') {
      onAdd(productName);
      setProductName('');
      onClose();
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <h2>Add Product</h2>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <div>
          <button onClick={handleAddClick}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
