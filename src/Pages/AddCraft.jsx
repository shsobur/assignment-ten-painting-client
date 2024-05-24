import "../Styles/AddCraft.css";

const AddCraft = () => {
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
            <form>

              <div className="addcraft_input_form_container">
                <div className="addcraft_inputs">
                  <p>Image</p>
                  <input type="text" placeholder="URL" />
                </div>

                <div className="addcraft_inputs">
                  <p>Item name</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>Subcategory name</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>Price</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>Rating</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>Customization</p>
                  <input type="text" placeholder="yes / no" />
                </div>

                <div className="addcraft_inputs">
                  <p>Processing time</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>Stock status</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>User name</p>
                  <input type="text" />
                </div>

                <div className="addcraft_inputs">
                  <p>User email</p>
                  <input type="text" />
                </div>
              </div>

              <div className="additional_input_section">

                <div className="last_addcraft_inputs">
                  <p>Short description</p>
                  <input type="text" placeholder="write hear..." />
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
