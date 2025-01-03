import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { Product } from "./types/types";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isListing, setIsListing] = useState(true);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product].sort((a, b) => a.price - b.price));
    setIsListing(true);
  };

  return (
    <>
      <div>
        <h1>Cadastro e Listagem de Produtos</h1>
        {isListing ? (
          <ProductList
            products={products}
            onAddNew={() => setIsListing(false)}
          />
        ) : (
          <ProductForm onSave={addProduct} />
        )}
      </div>
    </>
  );
};

export default App;
