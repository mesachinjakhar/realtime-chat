import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// handle form submit
async function handleSubmit(values) {
  try {
    const response = await fetch("localhost:3001/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.status === true) {
      alert("Signup Success");
    } else {
      alert(response.message);
    }
  } catch (err) {
    console.log("ERROR calling fetch");
  }
}

// UI Component
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Enter valid email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be atleast 6 characters")
        .required("Password is required"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <h1 className="text-3xl text-center">Signup here</h1>
      <form onSubmit={formik.handleSubmit} className="mt-5">
        <label htmlFor="">Name</label>
        <input
          type="text"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.name && formik.errors.name ? (
          <p className="text-red-600">{formik.errors.name}</p>
        ) : null}

        <label htmlFor="">Email</label>
        <input
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-600">{formik.errors.email}</p>
        ) : null}

        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-600">{formik.errors.password}</p>
        ) : null}

        <button type="submit" className="mt-2">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
