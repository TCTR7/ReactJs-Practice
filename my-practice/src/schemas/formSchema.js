
import * as yup from "yup";


const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(2, "At least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  age: yup
    .number()
    .transform((v) => (isNaN(v) ? undefined : v))
    .min(18, "Must be at least 18 years old")
    .max(100, "Must be less than 100 years old")
    .nullable(),
  gender: yup.string().required("Please select your gender"),
  terms: yup.boolean().oneOf([true], "You must accept the terms"),
});

export default schema;