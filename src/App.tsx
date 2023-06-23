import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { Product } from './utils/types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route
          path="/products/:id"
          element={
            selectedProduct ? (
              <ProductDetails
                product={selectedProduct}
                onClose={handleCloseProductDetails}
              />
            ) : (
              <div>Loading...</div> // or handle the case when product is null
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
