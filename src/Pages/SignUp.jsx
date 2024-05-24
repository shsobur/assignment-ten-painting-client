import { Link } from "react-router-dom";
import "../Styles/SignUp.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);

  const handelSignup = (e) => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log (name, email, photo, password);

    createUser(email, password)
    .then(result => {
      const signInUser = result.user;
      console.log (signInUser);
    })
    .then(error => {
      console.log(error);
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

            <form onSubmit={handelSignup}>
              <div className="signup_inputs">
                <p>Name</p>
                <input type="text" name="name" placeholder="Enter Your Name" />
              </div>
              <div className="signup_inputs">
                <p>Email</p>
                <input type="email" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="signup_inputs">
                <p>Photo URL</p>
                <input type="text" name="photo" placeholder="Photo URL" />
              </div>
              <div className="signup_inputs">
                <p>Password</p>
                <input type="password" name="password" placeholder="Set a Password" />
              </div>

              <label htmlFor="104">
                <div className="w-full btn btn-neutral mt-8 text-lg">
                  <input type="submit" value="Sing Up" id="104" />
                </div>
              </label>
            </form>

          </div>


          <div className="text-center mt-2">
            <p>Alrady have an account? <Link to="/signin"><span className="text-blue-800 font-semibold">SignIn</span></Link></p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SignUp;
