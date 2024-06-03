import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../components/Footer/Footer";

const Root = () => {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
