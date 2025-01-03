import * as yup from "yup";

export const yupProductFormSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
  price: yup
    .number()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? undefined : value
    )
    .typeError("O valor deve ser um número")
    .min(0, "Valor deve ser positivo")
    .required("O valor é obrigatório"),
  available: yup.boolean().required("A disponibilidade é obrigatória"),
});
