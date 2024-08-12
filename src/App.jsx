import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Urlshort from "./compo/Urlsho";
import Login from "./Login";
import Result from "./compo/result";
import Edit from "./compo/Edit";
import Register from "./Register";
import Forget from "./Forget";
import Htmlreq from "./Htmlreq";
import Protectedrouter from "./protectedrouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset-pass/:id/:token" element={<Htmlreq />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <Protectedrouter>
              <Urlshort />
            </Protectedrouter>
          }
        />
        <Route
          path="/result"
          element={
            <Protectedrouter>
              <Result />
            </Protectedrouter>
          }
        />
        <Route
          path="/edit"
          element={
            <Protectedrouter>
              <Edit />
            </Protectedrouter>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
