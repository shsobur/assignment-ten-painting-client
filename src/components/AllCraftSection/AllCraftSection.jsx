/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../../Styles/AllCraftSection.css";

const AllCraftSection = () => {
  return (
    <div className="main_allCraftSection_container">
      <div className="main_inner_allCraftSection_container">
        <div className="main_allCraftSection_left_right_container">
          <div className="allCraftSection_left_contanier">
            <div>
              <h2
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                Find Your Favourite <br /> <span>Craft!</span>
              </h2>
              <p>
                This is Vincent van Goghs "Starry Night" painted in 1889. It's
                one of the most famous artworks, known for its vibrant swirling
                night sky and deep emotional expression.
              </p>
              <Link to="/allart">
                <button className="btn btn-neutral text-lg pl-8 pr-8">
                  All Arts{" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="allCraftSection_right_contanier">
            <div
              className="right_container_inner_left_contain"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            ></div>
            <div
              className="right_container_inner_right_contain"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCraftSection;
