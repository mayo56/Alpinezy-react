import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ParamterController from "./Pages/parametres/ParamterController";
import Profile from "./Pages/Profile";
import Thread from "./Pages/Thread";
import TOS from "./Pages/TOS";

export const API_URL = "http://2.10.7.105:9999";

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
      <Route path="/paramters/:id" element={<ParamterController />}/>
    </Routes>
  );
};

export default App;
