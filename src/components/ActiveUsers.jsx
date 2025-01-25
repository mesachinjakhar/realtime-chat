import React, { useEffect } from "react";
import socket from "../socket";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveUsers,
  setActiveUsersCount,
} from "../store/features/activeUsers/activeUsersSlice";

const ActiveUsers = () => {
  const activeUsers = useSelector((state) => state.activeUsers.activeUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect rendered");
    const handleActiveUsers = (usersList) => {
      dispatch(setActiveUsers(usersList));
      dispatch(setActiveUsersCount(usersList.length));
    };

    socket.on("active-users", (usersList) => {
      handleActiveUsers(usersList);
    });

    // Emit the ready-to-receive event to the server
    socket.emit("ready-to-receive-active-users");

    // Clean up the listener when the component unmounts
    return () => {
      socket.off("active-users", handleActiveUsers);
    };
  }, []);

  if (!activeUsers || activeUsers.length === 0) {
    return (
      <div className="mt-5 h-[83vh] overflow-y-auto text-center font-bold">
        No active users
      </div>
    );
  }

  return (
    <div className="mt-5 h-[83vh] overflow-y-auto">
      {activeUsers.map((user) => {
        return (
          <div className=" flex items-center cursor-pointer hover:bg-[#5479e5] hover:text-white">
            <i class="bi bi-person-circle text-3xl px-5"></i>
            <div className=" border-[0.5px] border-gray-500 border-t-0 border-l-0 border-r-0 w-[100%] py-4 hover:border-0">
              <h1>{user.username}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveUsers;
