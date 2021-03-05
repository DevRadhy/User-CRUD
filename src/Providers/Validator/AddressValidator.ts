import * as yup from 'yup';

export const addressScheme = yup.object().shape({
  address: yup.string().required(),
  number: yup.number().integer().positive().required(),
  complement: yup.string().required(),
  cep: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
});