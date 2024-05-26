import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { TiThMenuOutline } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelSignOut = () => {
    logOut()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Sign Out successfully",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav>
      <div className="main_nav_container">
        <div className="main_inner_nav_container">
          <div className="web_name">
            <img
              src="https://i.ibb.co/2q7PBfm/art-gallery-modern-logo-design-graphic-vector-633300-2007-Photoroom-png-Photoroom.png"
              alt="logo"
            />
            <h2>Art Gallary</h2>
          </div>

          <div className="nav_routing_container">
            <ul>
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/craftitem">
                  <a>All Art & Craft Items</a>
                </Link>
              </li>
              {user && (
                <li>
                  <Link to="/addcraft">
                    <a>Add Craft Item</a>
                  </Link>
                </li>
              )}
              <li>
                <Link>
                  <a>My Art&Craft List</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="main_nav_btn_container">
            {user ? (
              <button onClick={handelSignOut} className="btn btn-neutral">
                Sign Out
              </button>
            ) : (
              <div className="main_nav_btn_container">
                <div className="nav_btn_in">
                  <Link to="/signin">
                    <button className="btn btn-neutral">Sign In</button>
                  </Link>
                </div>

                <div className="nav_btn_up">
                  <Link to="/signup">
                    <button className="btn btn-neutral">Sign Up</button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="nav_manue_icon">
              <button
                onClick={() => document.getElementById("101").showModal()}
              >
                <TiThMenuOutline />
              </button>
            </div>

            <dialog id="101" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box bg-[#ffffff]">
                <div className="flex items-center justify-center text-center">
                  <ul className="font-semibold text-xl text-[#000000]">
                    <p className="mb-3 text-xs   text-[#ababab]">
                      Seclect path
                    </p>

                    <li className="mb-5 p-1 rounded-lg border-[#26214c] active:bg-[#ededed]">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="mb-5 p-1 rounded-lg border-[#26214c] active:bg-[#ededed]">
                      All Art & Craft Items
                    </li>

                    <li className="mb-5 p-1 rounded-lg border-[#26214c] active:bg-[#ededed]">
                      Add Craft Item
                    </li>

                    <li className="mb-5 p-1 rounded-lg border-[#26214c] active:bg-[#ededed]">
                      My Art&Craft List
                    </li>

                    <div>
                      {user ? (
                        <button
                          onClick={handelSignOut}
                          className="btn btn-neutral"
                        >
                          Sign Out
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-5 text-[#ffffff]">
                          <li className="p-3 bg-slate-800 rounded-lg active:bg-slate-600">
                            <Link to="signin">Sing In</Link>
                          </li>

                          <li className="p-3 bg-slate-800 rounded-lg active:bg-slate-600">
                            <Link to="/signup">Sing Up</Link>
                          </li>
                        </div>
                      )}
                    </div>
                  </ul>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-success">Select</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
