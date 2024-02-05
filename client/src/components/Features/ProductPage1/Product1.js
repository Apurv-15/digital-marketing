import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Product1.css';

const Product1 = () => {
  const navigate = useNavigate();

  const handleAddItem = () => {
    // Navigate to the new page and replace the current one
    navigate('/product2', { replace: true });
  };

  return (
    <div className="add-item-container">
      <button className="add-item-button" onClick={handleAddItem}>
        <FaPlus className="icon" /> Add Item
      </button>
    </div>
  );
};

export default Product1;
