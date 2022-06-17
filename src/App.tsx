import { Routes, Route } from "react-router-dom";
import Channel from "./Pages/Channel";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ParamterController from "./Pages/parametres/ParamterController";
import Profile from "./Pages/Profile";
import Thread from "./Pages/Thread";
import TOS from "./Pages/TOS";

export const API_URL = "https://api.alpinezy.com";

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

      {/* Partie message */}
      <Route path="/guild/:idGuild">
        <Route path=":idChannel" element={<Channel />}/>
      </Route>
    </Routes>
  );
};

export default App;
