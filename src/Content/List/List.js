import React from "react";

import AuthContext from "../../context/auth-context";

export const List = props => {
  const authContext = React.useContext(AuthContext);
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <>
            <div>Super Lista</div>
            <p>
              {authContext.authenticated
                ? "Authenticated succesfull"
                : "Authenticated fail!"}
            </p>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};
