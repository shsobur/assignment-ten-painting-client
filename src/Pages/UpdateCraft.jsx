import { useLoaderData } from "react-router-dom";
import "../Styles/UpdateCraft.css";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const paintInfo = useLoaderData();
  const {
    _id,
    image,
    itme_name,
    subcategory_name,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    description,
  } = paintInfo;

  const handelDelete = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stock_status = form.stock_status.value;
    const description = form.description.value;

    const updateCraft = {
      image,
      item_name,
      subcategory_name,
      price,
      rating,
      customization,
      processing_time,
      stock_status,
      description,
    };

    console.log(updateCraft);

    fetch(`https://assignment-ten-painting-server.vercel.app/addcraft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Success",
            text: "Your craft is updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="main_update_page_container">
      <div className="main_inner_update_page_container">
        <div className="main_update_form_container">
          <div className="update_form_title text-center pt-8">
            <h2 className="font-semibold pb-5 text-[#242c36]">
              Update Craft Item
            </h2>
            <img src="https://i.ibb.co/YQNz8tD/5684260c0da46cd945aa0c23-separate-1.png" />
            <p className="text-sm pl-20 pr-20 pt-5 text-[#868686] pb-102">
              Easily update and manage your craft items using this section. Fill
              in the details below to update the image, item name, subcategory,
              description, price, rating, and any other necessary information.
              Ensure all fields are accurately completed to keep your craft
              collection up-to-date and appealing to potential buyers or
              viewers.
            </p>
          </div>

          <div className="update_form_inputs_container">
            <div className="inner_update_form_inputs_container">
              <form onSubmit={handelDelete}>
                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p>Image</p>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="URL"
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1100"
                >
                  <p>Item Name</p>
                  <input
                    type="text"
                    name="item_name"
                    defaultValue={itme_name}
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1200"
                >
                  <p>Subcategory Name</p>
                  <input
                    type="text"
                    name="subcategory_name"
                    defaultValue={subcategory_name}
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1300"
                >
                  <p>Description</p>
                  <input
                    type="text"
                    name="description"
                    defaultValue={description}
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1400"
                >
                  <p>Price</p>
                  <input type="text" name="price" defaultValue={price} />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1500"
                >
                  <p>Rating</p>
                  <input type="text" name="rating" defaultValue={rating} />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1600"
                >
                  <p>Customization</p>
                  <input
                    type="text"
                    name="customization"
                    defaultValue={customization}
                    placeholder="YES / NO"
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1700"
                >
                  <p>Time</p>
                  <input
                    type="text"
                    name="processing_time"
                    defaultValue={processing_time}
                  />
                </div>

                <div
                  className="addcraft_inputs"
                  id="Update_inputs"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1800"
                >
                  <p>Status</p>
                  <input
                    type="text"
                    name="stock_status"
                    defaultValue={stock_status}
                  />
                </div>

                <div className="flex items-center justify-center mt-5">
                  <label htmlFor="108">
                    <div>
                      <input
                        className="update_sub_btn btn btn-neutral btn-sm w-[800px]"
                        type="submit"
                        value="Update"
                        id="108"
                      />
                    </div>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCraft;
