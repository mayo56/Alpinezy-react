import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Thread from "./Pages/Thread";
import TOS from "./Pages/TOS";

function App() {
  return (
    <Routes>
      {/* Redirection vers le menu Home */}
      <Route path="/" element={<Home />}/>

      {/* Login et tos de l'app */}
      <Route path="/tos" element={<TOS />}/>
      <Route path="/login/:id" element={<Login />}/>

      {/* Coeur de l'app */}
      <Route path="/thread" element={<Thread />}/>
      <Route path="/profile/:id" element={<Profile />}/>
    </Routes>
  );
};

export default App;
