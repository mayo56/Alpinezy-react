import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

///////////////////////////////////////////////--------------
//  Socket.io  //
import { io } from 'socket.io-client';
const socket = io("wss://websocket.alpinezy.com");
socket.on("connect", () => {
  console.log(socket.id)
  socket.on('hello', (id, message) => {
    if (socket.id !== id) return;
    console.log(message)
  })
})
///////////////////////////////////////////////--------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);