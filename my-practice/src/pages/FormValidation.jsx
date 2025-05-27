// 📬 FormValidation.jsx
// Purpose: This form uses react-hook-form to efficiently manage form state,
// combined with Yup to validate form fields clearly and extensibly.

// Hooks used:
// - useForm (from react-hook-form): to declare form, manage input, errors, and handle submit
// - watch (from react-hook-form): to monitor form changes
// - yupResolver: connects Yup schema validation with react-hook-form

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState, useEffect } from "react";

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

export default function FormValidation() {
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formValues = watch();

  useEffect(() => {
    if (!submittedData || !isSubmitted) return;

    const hasChanged = Object.keys(formValues).some(
      (key) => String(formValues[key]) !== String(submittedData[key])
    );
    if (hasChanged) {
      setIsSubmitted(false);
    }
  }, [submittedData, formValues, isSubmitted]);

  const onSubmit = (data) => {
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📬 Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            id="email"
            {...register("email")}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="age" className="block font-medium">
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register("age")}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-red-500 text-sm">{errors.age?.message}</p>
        </div>

        <div>
          <label htmlFor="gender" className="block font-medium">
            Gender
          </label>
          <select
            id="gender"
            {...register("gender")}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" {...register("terms")} className="mr-2" />I
            agree to the terms and conditions
          </label>
          <p className="text-red-500 text-sm">{errors.terms?.message}</p>
        </div>

        <button
          type="submit"
          className={`bg-indigo-600 text-white px-4 py-2 rounded ${
            isSubmitted
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : "bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02] hover:shadow-lg transition-colors duration-300 hover:cursor-pointer"
          }`}
          disabled={isSubmitted}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-8 bg-slate-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Submitted Data:</h2>
          <pre className="text-sm">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
