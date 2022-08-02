import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./screens/Home";
import User from "./screens/User";
import UserSetting from "./features/user/UserSetting";
import UpdatePassword from "./screens/UpdatePassword";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/setting" element={<UserSetting />} />
        <Route path="/updatepassword" element={<UpdatePassword />} />
      </Routes>
    </div>
  );
}

export default App;
