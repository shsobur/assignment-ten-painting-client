import { Link, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const SignUp = () => {
  const { createUser, googleSignUp, githubSignUp } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSignup = (data) => {
    const { email, password } = data;

    console.log(data);

    setError("");

    if (password.length < 6) {
      setError("Your password should be at least 6 charatur or long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Include at least one uppercase(A-Z) letter in your password");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Include at least one lowercase(a-z) letter in your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
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
          title: "User create successfully",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        const googleSignUpUser = result.user;
        console.log(googleSignUpUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGithubSignUp = () => {
    githubSignUp()
    .then(result => {
      const githubSignUpUser = result.user;
      console.log (githubSignUpUser);
      navigate("/");
    })
    .catch(error => {
      console.log (error);
    })
  }

  return (
    <div className="main_signup_container">
      <div className="main_inner_signup_container">
        <div
          className="main_signup_form_container"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="signup_title_container">
            <h2>Sign Up</h2>
            <img src="https://i.ibb.co/YQNz8tD/5684260c0da46cd945aa0c23-separate-1.png" />
          </div>

          <div className="signup_input_container">
            <form onSubmit={handleSubmit(handelSignup)}>
              <div className="signup_inputs">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">This field is required!</span>
                )}
              </div>
              <div className="signup_inputs">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required!</span>
                )}
              </div>
              <div className="signup_inputs">
                <p>Photo URL</p>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  {...register("photo", { required: false })}
                />
                {errors.photo && (
                  <span className="text-red-600">This field is required!</span>
                )}
              </div>
              <div className="signup_inputs">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Set a Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required!</span>
                )}
              </div>

              <label htmlFor="104">
                <div className="w-full btn btn-neutral mt-8 text-lg">
                  <input type="submit" value="Sing Up" id="104" />
                </div>
              </label>
            </form>
          </div>

          <div className="signin_socialmedia_conraienr">
            <ul>
              <li>
                <button onClick={handelGoogleSignUp}>
                  <FaGoogle />
                </button>
              </li>
              <li>
                <button onClick={handelGithubSignUp}>
                  <BsGithub />
                </button>
              </li>
            </ul>
          </div>

          <div>
            {error && (
              <div>
                <p className="text-red-500 text-center">{error}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-2">
            <p>
              Alrady have an account?{" "}
              <Link to="/signin">
                <span className="text-blue-800 font-semibold">SignIn</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
