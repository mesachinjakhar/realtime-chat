import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// handle form submit
async function handleSubmit(values) {
  try {
    const response = await fetch("localhost:3001/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.status == true) {
      alert("Signup Success");
    } else {
      alert(response.message);
    }
  } catch (err) {
    console.log("ERROR calling fetch");
  }
}

// UI Component
const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
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
      <h1 className="text-3xl text-center">Login here</h1>
      <form className="mt-5" onSubmit={formik.handleSubmit}>
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
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-600">{formik.errors.password}</p>
        ) : null}
        <button className="mt-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
