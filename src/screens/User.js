import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  const user = useSelector((state) => state.userInfo.user);
  return (
    <div className=" bg-slate-800 p-6 w-6/12 items-center flex flex-col mx-auto mt-28 text-white border-8 border-slate-400 rounded-lg">
      <h2 className="p-4 border-2 border-white my-2 text-lg font-bold rounded-xl">
        Username : {user.username}
      </h2>
      <h2 className="p-4 border-2 border-white my-2 text-lg font-bold rounded-xl">
        Password : {user.password}
      </h2>
    </div>
  );
}
