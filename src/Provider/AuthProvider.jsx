import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {
    users,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export default AuthProvider;