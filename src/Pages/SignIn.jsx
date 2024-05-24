import { Link, useNavigate } from "react-router-dom";
import "../Styles/SignIn.css";
import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, googleSignUp, githubSignUp } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handelSignin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    setError("");

    signInUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
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
          title: "Sign In successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError("invalid username and password");
      });
  };

  const handelGoogleSignIn = () => {
    googleSignUp()
    .then(result => {
      console.log (result.user);
      navigate("/")
    })
    .catch(error => {
      console.log (error);
    })
  }

  const handelGithubSignIn = () => {
    githubSignUp()
    .then(result => {
      console.log (result.user);
      navigate("/");
    })
    .catch(error => {
      console.log (error);
    })
  }

  return (
    <div className="main_signin_container">
      <div className="main_inner_signin_container">
        <div
          className="main_signin_form_container"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="signin_title_container">
            <h2>Sign In</h2>
            <img src="https://i.ibb.co/YQNz8tD/5684260c0da46cd945aa0c23-separate-1.png" />
          </div>

          <div className="signin_input_container">
            <form onSubmit={handelSignin}>
              <div className="signin_inputs">
                <p>Email</p>
                <input type="email" name="email" placeholder="email" />
              </div>
              <div className="signin_inputs">
                <p>Password</p>
                <input type="password" name="password" placeholder="password" />
              </div>

              <label htmlFor="103">
                <div className="w-full btn btn-neutral mt-8 text-lg">
                  <input type="submit" value="Sing in" id="103" />
                </div>
              </label>

              <div>
                {error && (
                  <div>
                    <p className="text-red-500 text-center">{error}</p>
                  </div>
                )}
              </div>

              <div className="signin_socialmedia_conraienr">
                <ul>
                  <li>
                    <button onClick={handelGoogleSignIn}>
                      <FaGoogle />
                    </button>
                  </li>
                  <li>
                    <button onClick={handelGithubSignIn}>
                      <BsGithub />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-2">
                <p>
                  Dont have an account yet?{" "}
                  <Link to="/signup">
                    <span className="text-blue-800 font-semibold">SignUp</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
