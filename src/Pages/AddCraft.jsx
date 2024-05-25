import Swal from "sweetalert2";
import "../Styles/AddCraft.css";

const AddCraft = () => {
  const handelAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const itme_name = form.itme_name.value;
    const subcategory_name = form.subcategory_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;
    const description = form.description.value;

    const newCraft = {
      image,
      itme_name,
      subcategory_name,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      user_name,
      user_email,
      description,
    };

    console.log(newCraft);

    fetch("http://localhost:5000/addcraft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Add Craft successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="main_addcraft_container">
      <div className="main_inner_addcraft_container">
        <div className="main_addcraft_input_container">
          <div className="addcraft_title_container">
            <h2>Add Craft Item</h2>
            <img src="https://i.ibb.co/YQNz8tD/5684260c0da46cd945aa0c23-separate-1.png" />
            <p>
              A symphony of colors dances across the canvas, capturing the
              essence of a fleeting moment. In every brushstroke lies a story,
              whispered through hues and shades.The canvas breathes life as the
              artist soul spills into every intricate detail.
            </p>
          </div>

          <div>
            <form onSubmit={handelAddCraft}>
              <div className="addcraft_input_form_container">
                <div
                  className="addcraft_inputs"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Image</p>
                  <input type="text" name="image" placeholder="URL" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Item name</p>
                  <input type="text" name="itme_name" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Subcategory name</p>
                  <input type="text" name="subcategory_name" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Price</p>
                  <input type="text" name="price" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Rating</p>
                  <input type="text" name="rating" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Customization</p>
                  <input
                    type="text"
                    name="customization"
                    placeholder="yes / no"
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Processing time</p>
                  <input type="text" name="processing_time" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Stock status</p>
                  <input type="text" name="stock_status" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>User name</p>
                  <input type="text" name="user_name" />
                </div>

                <div
                  className="addcraft_inputs"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>User email</p>
                  <input type="text" name="user_email" />
                </div>
              </div>

              <div
                className="additional_input_section"
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="last_addcraft_inputs">
                  <p>Short description</p>
                  <input
                    type="text"
                    name="description"
                    placeholder="description of image"
                  />
                </div>

                <div className="form_btn_container">
                  <label htmlFor="105">
                    <button className="addcraft_btn">
                      <input type="submit" value="Add" />
                    </button>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
