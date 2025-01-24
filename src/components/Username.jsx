import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../store/features/username/usernameSlice";
import { generateUsername } from "../utils/generateUsername";

const Username = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.usernameSlice.username);
  const currentChatOpen = useSelector(
    (state) => state.currentOpenChatSlice.socketId
  );

  function handleSubmit(values) {
    dispatch(setUsername(generateUsername(values.userId))); // Dispatch the action with the new username
  }

  const formik = useFormik({
    initialValues: { userId: "" },
    validationSchema: Yup.object({
      userId: Yup.string()
        .min(6, "Username must be at least 6 characters")
        .required("Username is required"),
    }),
    onSubmit: handleSubmit,
  });

  if (username.length > 0 && currentChatOpen.length === 0) {
    return (
      <div className="w-[500px] mx-auto text-white font-bold text-lg">
        Welcome! Select any user from sidebar to start chatting
      </div>
    );
  }
  return (
    <div className="w-[400px] mx-auto text-white">
      <h1 className="text-3xl font-bold">Login here</h1>
      <form className="mt-5" onSubmit={formik.handleSubmit}>
        <label htmlFor="userId">Username</label>
        <input
          type="text"
          id="userId"
          name="userId"
          className="block w-full mt-1 p-2 border rounded"
          value={formik.values.userId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.userId && formik.errors.userId ? (
          <p className="text-red-600">{formik.errors.userId}</p>
        ) : null}
        <button
          className="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Username;
