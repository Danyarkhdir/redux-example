import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function UserSetting() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setUser(newUser));
      }}
      className=" bg-slate-800 p-6 w-6/12 items-center flex flex-col mx-auto mt-28 text-white border-2 border-slate-400 rounded-lg"
    >
      <h1 className="w-full text-center border-b-4 text-3xl font-bold border-white pb-4">
        User Setting
      </h1>
      <div className="flex justify-center w-full mt-6 items-center">
        <label htmlFor="username" className="font-bold text-xl p-2 ">
          Username
        </label>
        <input
          required
          type="text"
          id="username"
          placeholder="Username"
          className="bg-transparent p-2 focus:outline-none text-xl ml-4 border-b-2  border-slate-400"
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
      </div>
      <div className="flex justify-center w-full mt-6 items-center">
        <label htmlFor="password" className="font-bold text-xl p-2 ">
          Password
        </label>
        <input
          required
          type="text"
          id="password"
          placeholder="Password"
          className="bg-transparent p-2 focus:outline-none text-xl ml-5 border-b-2  border-slate-400"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </div>
      <div className="flex items-center">
        <input
          type="submit"
          value="Sign Up"
          className=" flex justify-start p-2 px-6 mt-6 items-center cursor-pointer ml-6 bg-green-600 font-extrabold rounded-lg"
        />
        <Link
          to="/updatepassword"
          className="p-2 px-6 mt-6 bg-green-900 ml-6 text-white font-extrabold rounded-lg"
        >
          Update Password
        </Link>
      </div>
    </form>
  );
}
