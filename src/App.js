import React from "react";

import "./App.css";
import { Menu } from "./Menu/Menu";
import { Content } from "./Content/Content";
import AuthContext from "./context/auth-context";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleClick = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ authenticated: isAuthenticated, login: handleClick }}
      >
        <Menu />
        <Content />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
