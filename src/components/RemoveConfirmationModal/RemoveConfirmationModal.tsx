import React from 'react';
import './RemoveConfirmationModal.scss';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
};

const RemoveConfirmationModal: React.FC<Props> = ({ onCancel, onConfirm }) => {
  return (
    <div className="remove-confirmation-modal">
      <h2 className="remove-confirmation-modal__title">Remove Product?</h2>
      <p className="remove-confirmation-modal__message">
        Are you sure you want to remove this product?
      </p>
      <button className="remove-confirmation-modal__button" onClick={onCancel}>
        Cancel
      </button>
      <button className="remove-confirmation-modal__button" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default RemoveConfirmationModal;
