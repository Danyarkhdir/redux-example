import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updatePassword } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
export default function UpdatePassword() {
  const navigate = useNavigate();
  const userPassword = useSelector((state) => state.userInfo.user.password);
  const [userPasswords, setUserPasswords] = useState({});
  const dispatch = useDispatch();
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        if (userPasswords.oldPassword === userPassword) {
          if (userPasswords.newPassword === userPasswords.confirmPassword) {
            dispatch(updatePassword(userPasswords.newPassword));
            alert("Password updated");
            navigate("/user");
          } else {
            alert("The new passwords you entered are not the same.");
          }
        } else {
          alert("The old password you entered is incorrect.");
        }
      }}
      className=" bg-slate-800 p-6 w-6/12 items-center flex flex-col mx-auto mt-28 text-white border-2 border-slate-400 rounded-lg"
    >
      <h1 className="w-full text-center border-b-4 text-3xl font-bold border-white pb-4">
        Update Password
      </h1>
      <div className="flex justify-center w-full mt-6 items-center">
        <label htmlFor="oldPassword" className="font-bold text-xl p-2 ">
          Old Password
        </label>
        <input
          required
          type="text"
          id="oldPassword"
          placeholder="Enter Your Old Password"
          className="bg-transparent p-2 focus:outline-none text-xl ml-4 border-b-2  border-slate-400"
          onChange={(e) =>
            setUserPasswords({ ...userPasswords, oldPassword: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center w-full mt-6 items-center">
        <label htmlFor="newPassword" className="font-bold text-xl p-2 ">
          New Password
        </label>
        <input
          required
          type="text"
          id="newPassword"
          placeholder="Enter Your New Password"
          className="bg-transparent p-2 focus:outline-none text-xl ml-5 border-b-2  border-slate-400"
          onChange={(e) =>
            setUserPasswords({ ...userPasswords, newPassword: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center w-full mt-6 items-center">
        <label htmlFor="newPassword1" className="font-bold text-xl p-2 ">
          New Password
        </label>
        <input
          required
          type="text"
          id="newPassword1"
          placeholder="Re-Enter Your  Password"
          className="bg-transparent p-2 focus:outline-none text-xl ml-5 border-b-2  border-slate-400"
          onChange={(e) =>
            setUserPasswords({
              ...userPasswords,
              confirmPassword: e.target.value,
            })
          }
        />
      </div>
      <input
        type="submit"
        value="Update Password"
        className=" flex justify-start p-2 px-6 mt-6 items-center cursor-pointer ml-6 bg-green-600 font-extrabold rounded-lg"
      />
    </form>
  );
}
