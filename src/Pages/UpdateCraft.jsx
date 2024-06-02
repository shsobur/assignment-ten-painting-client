import "../Styles/UpdateCraft.css";

const UpdateCraft = () => {
  return (
    <div className="main_update_page_container">
      <div className="main_inner_update_page_container">
        <div className="main_update_form_container">
          <div className="update_form_tatle text-center pt-8">
            <h2 className="font-semibold text-4xl pb-5 text-[#242c36] font-serif">
              {" "}
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
              <form>
                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Image</p>
                  <input type="text" name="image" placeholder="URL" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Item Name</p>
                  <input type="text" name="item_name" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Subcategory Name</p>
                  <input type="text" name="subcategory_name" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Description</p>
                  <input type="text" name="description" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Price</p>
                  <input type="text" name="price" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Rating</p>
                  <input type="text" name="rating" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Customization</p>
                  <input
                    type="text"
                    name="customization"
                    placeholder="YES / NO"
                  />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Time</p>
                  <input type="text" name="processing_time" />
                </div>

                <div className="addcraft_inputs" id="Update_inputs">
                  <p>Status</p>
                  <input type="text" name="stock_status" />
                </div>

                <div className="flex items-center justify-center mt-5">
                  <label htmlFor="108">
                    <div>
                      <input
                        className="btn btn-neutral btn-sm w-[800px]"
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
