import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PriverRoute = ({children}) => {
  const {user} = useContext(AuthContext);
  const navigat = useNavigate();

  if (user) {
    return children;
  }
  else {
    navigat("/");
  }

};

export default PriverRoute;