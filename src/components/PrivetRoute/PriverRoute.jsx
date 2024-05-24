import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const PriverRoute = ({children}) => {
  const {user} = useContext(AuthContext);

  if (user) {
    return children;
  }

};

export default PriverRoute;