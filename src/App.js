import { Route, Routes } from "react-router-dom";
import './app.css';
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserLists from "./pages/user/UserLists";


function App() {
  return (
    <>
      <TopBar />
      <div class="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<UserLists />} />
          <Route path='user/:userId' element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
