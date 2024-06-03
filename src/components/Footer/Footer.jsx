import { useContext } from "react";
import "../../Styles/Footer.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="main_footer_container">
      <div className="main_inner_footer_container">
        <div className="inner_footer_section_container">
          <div className="footer_container_one">
            <div>
              <h2>Art Gallary</h2>
            </div>
          </div>
          <div className="footer_container_two">
            <div>
              <ul>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "underline text-[#ffffff]" : "text-[#f6f6f6]"
                  }
                >
                  <li>
                    <a>Home</a>
                  </li>
                </NavLink>
                <NavLink
                  to="/craftitem"
                  className={({ isActive }) =>
                    isActive ? "underline text-[#ffffff]" : "text-[#f6f6f6]"
                  }
                >
                  <li>
                    <a>Craft Items</a>
                  </li>
                </NavLink>
                <NavLink
                  to="/allart"
                  className={({ isActive }) =>
                    isActive ? "underline text-[#ffffff]" : "text-[#f6f6f6]"
                  }
                >
                  <li>
                    <a>All Art & Craft Items</a>
                  </li>
                </NavLink>
                {user && (
                  <NavLink
                    to="/addcraft"
                    className={({ isActive }) =>
                      isActive ? "underline text-[#ffffff]" : "text-[#f6f6f6]"
                    }
                  >
                    <li>
                      <a>Add Craft Item</a>
                    </li>
                  </NavLink>
                )}
                {user && (
                  <NavLink
                    to="/myartlist"
                    className={({ isActive }) =>
                      isActive ? "underline text-[#ffffff]" : "text-[#f6f6f6]"
                    }
                  >
                    <li>
                      <a>My Art&Craft List</a>
                    </li>
                  </NavLink>
                )}
              </ul>
            </div>
          </div>
          <div className="footer_container_three">
            <div><FaFacebook /></div>
            <div><FaGoogle /></div>
            <div><FaGithub /></div>
            <div><FaLinkedin /></div>
          </div>
        </div>
        <div className="copyright_container">
          <h2>Copyright © 2024 Art Gallary ®</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
