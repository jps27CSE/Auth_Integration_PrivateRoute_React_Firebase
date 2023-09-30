import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authValue = {
    createUser,
    user,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
