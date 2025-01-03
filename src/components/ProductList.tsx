import React from "react";
import { ProductListProps } from "../types/types";

const ProductList: React.FC<ProductListProps> = ({ products, onAddNew }) => {
  return (
    <div>
      <button onClick={onAddNew}>Cadastrar Novo Produto</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>R${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
