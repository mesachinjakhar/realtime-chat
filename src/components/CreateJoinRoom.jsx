import React from "react";

const CreateJoinRoom = () => {
  return (
    <div className="w-[400px] mx-auto flex flex-col justify-center gap-3">
      <h1 className="text-3xl text-center">Join Room</h1>
      <form className="mt-3">
        <label htmlFor="">Room Id</label>
        <input type="number" id="number" />
        <button>Join Room</button>
      </form>
      <p className="text-center">OR</p>
      <button>Create Room</button>
    </div>
  );
};

export default CreateJoinRoom;
