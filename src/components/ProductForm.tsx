import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Product, ProductFormProps } from "../types/types";
import { yupProductFormSchema } from "../utils/yupSchemas/YupProductFormSchema";

const ProductForm: React.FC<ProductFormProps> = ({ onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: yupResolver(yupProductFormSchema),
  });

  const onSubmit: SubmitHandler<Product> = (data) => {
    onSave({ ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label>Descrição:</label>
        <textarea {...register("description")} />
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <div>
        <label>Valor:</label>
        <input type="number" {...register("price")} />
        {errors.price && <span>{errors.price.message}</span>}
      </div>
      <div>
        <label>Disponível:</label>
        <select {...register("available")}>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      <button type="submit">Salvar Produto</button>
    </form>
  );
};

export default ProductForm;
