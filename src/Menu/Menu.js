import React from "react";

import AuthContext from "../context/auth-context";

export const Menu = () => {
  const authContext = React.useContext(AuthContext);
  return (
    <>
      <button onClick={authContext.login}>LogIn</button>
      <p>Menu</p>
    </>
  );
};
