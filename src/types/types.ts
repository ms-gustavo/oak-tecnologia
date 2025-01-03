export type Product = {
  name: string;
  price: number;
  description: string;
  available: boolean;
};

export type ProductListProps = {
  products: Product[];
  onAddNew: () => void;
};

export type ProductFormProps = {
  onSave: (product: Product) => void;
};
