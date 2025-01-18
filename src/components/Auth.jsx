import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [signup, setSignup] = useState(false);

  function handleChangeComponent() {
    setSignup(!signup);
  }

  if (!signup) {
    return (
      <div className="  w-[400px] mx-auto px-5 py-5 h-[100vh] flex flex-col justify-center gap-2">
        <Login />
        <p className="text-center">OR</p>
        <button onClick={handleChangeComponent}>Signup Here</button>
      </div>
    );
  } else {
    return (
      <div className=" w-[400px] mx-auto px-5 py-5 h-[100vh] flex flex-col justify-center gap-2">
        <Signup />
        <p className="text-center">OR</p>
        <button onClick={handleChangeComponent}>Login Here</button>
      </div>
    );
  }
};

export default Auth;
