import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../../../store/features/user/userSlice";
import { generateUsername } from "../../../utils/generateUsername";
import socket from "../../../socket";
import { setMessages } from "../../../store/features/messages/messagesSlice";

const UsernameForm = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const status = useSelector((state) => state.user.status);
  const currentOpenChat = useSelector(
    (state) => state.currentOpenChat.currentOpenChat
  );

  async function handleSubmit(values) {
    const generatedUsername = await generateUsername(values.userName);
    dispatch(setUsername(generatedUsername)); // Dispatch the action with the new username
    socket.emit("add-user", generatedUsername);

    // Add listner to messages
    socket.on("message", (msg) => {
      dispatch(setMessages(msg));
    });
  }

  const formik = useFormik({
    initialValues: { userName: "" },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(6, "Username must be at least 6 characters")
        .required("Username is required"),
    }),
    onSubmit: handleSubmit,
  });

  if (status === "Disconnected") {
    return (
      <div className="w-[500px] mx-auto text-white font-bold text-3xl">
        Oops! Something went wrong.
      </div>
    );
  }

  if (username.length > 0 && currentOpenChat.id) {
    return;
  }

  if (username.length > 0) {
    return (
      <div className="w-[500px] mx-auto text-white font-bold text-lg">
        Welcome! Select any user from sidebar to start chatting
      </div>
    );
  }

  return (
    <div className="w-[400px] mx-auto text-white">
      <h1 className="text-3xl font-bold">Set your username</h1>
      <form className="mt-5" onSubmit={formik.handleSubmit}>
        <label htmlFor="userId">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          className="block w-full mt-1 p-2 border rounded"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <p className="text-red-600">{formik.errors.userName}</p>
        ) : null}
        <button
          className="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          type="submit"
        >
          Start chatting
        </button>
      </form>
    </div>
  );
};

export default UsernameForm;
