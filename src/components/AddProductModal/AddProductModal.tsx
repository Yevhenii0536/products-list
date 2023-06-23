import { FC, useState } from 'react';
import './AddProductModal.scss';

type Props = {
  onAdd: (product: { name: string; count: number }) => void;
  onClose: () => void;
};

const AddProductModal: FC<Props> = ({ onAdd, onClose }) => {
  const [productName, setProductName] = useState('');
  const [productCount, setProductCount] = useState(1);

  const handleAddClick = () => {
    if (productName.trim() !== '' && productCount > 0) {
      const product = { name: productName, count: productCount };
      onAdd(product);
      setProductName('');
      setProductCount(0);
      onClose();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const count = parseInt(e.target.value, 10);
    setProductCount(isNaN(count) ? 0 : count);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <h2>Add Product</h2>

        <input
          type="text"
          value={productName}
          onChange={handleNameChange}
        />

        <input
          type="number"
          value={productCount}
          onChange={handleCountChange}
        />

        <div>
          <button onClick={handleAddClick}>
            Add
          </button>

          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
