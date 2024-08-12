import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

function Protectedrouter({ component, ...some }) {
  let Rendercomponent = component;
  let hastoken = localStorage.getItem("mm");
  return (
    <Routes>
      <Route
        {...some}
        render={(props) => {
          return hastoken !== null && hastoken !== "" ? (
            <Rendercomponent {...props} />
          ) : (
            <Redirect to={{ pathname: "/" }} />
          );
        }}
      />
    </Routes>
  );
}

export default Protectedrouter;
