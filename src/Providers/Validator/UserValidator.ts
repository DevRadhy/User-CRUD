import * as yup from 'yup';

export const userScheme = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().integer().positive().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  weight: yup.number().integer().positive().required(),
  ethnicity_id: yup.string().required(),
});