import { Link } from "react-router-dom";
import "../../Styles/CraftSection.css";

const CraftSection = () => {
  return (
    <div className="main_craft_section_container">
      <div className="main_inner_craft_section_container">
        <div className="craft_section_left_container">
          <div className="craft_image_container">
            <div
              className="craft_image_box_container"
              id="box_101"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            ></div>
            <div
              className="craft_image_box_container"
              id="box_102"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            ></div>
            <div
              className="craft_image_box_container"
              id="box_103"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            ></div>
            <div
              className="craft_image_box_container"
              id="box_104"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            ></div>
          </div>
        </div>
        <div className="craft_section_rigth_container">
          <div className="right_craft_section_inner_container">
            <h1
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              Craft Your Item Now!
            </h1>
            <p>
              “Art is never finished, only abandoned.” – Leonardo Da Vinci.
              “Everything has its beauty, but not everyone sees it.”
            </p>
            <Link to="/addcraft">
              <button className="btn btn-neutral text-lg pl-8 pr-8">
                Add Craft
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftSection;
