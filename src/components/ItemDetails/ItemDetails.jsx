import "../../Styles/ItemDetails.css";
import { IoStarHalf } from "react-icons/io5";

const ItemDetails = () => {

  return (
    <div>
      <section className="bg-gray-200 text-gray-800">
        <div className="container max-w-6xl pt-5 mx-auto space-y-6 sm:space-y-2">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-2 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#ffffff]"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover mt-10 w-full h-64 rounded sm:h-96 lg:col-span-6 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-6">
              <div className="main_details_container">
                <h2>Girl with a Pearl Earring</h2>
                <p>High Renaissance Art</p>
                <div className="about_section_details_container">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>Price : </th>
                          <td>5,000,000$</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>Customization : </th>
                          <td>NO</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>Status : </th>
                          <td>In Stock</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <th>Time : </th>
                          <td>20th-century</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                          <th>Rating : </th>
                          <td className="flex items-center gap-2 ">
                            <div>4.8</div>
                            <div>
                              <IoStarHalf />
                            </div>
                          </td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                          <th>user name : </th>
                          <td>Sobur Hossen</td>
                        </tr>
                        {/* row 7 */}
                        <tr>
                          <th>user email : </th>
                          <td>shsoburhossen951@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="main_description_container">
            <div className="main_description_inner_container">
              <h1>
                <span className="text-xl font-bold underline">Description :</span>
                <span> </span>
                This painting depicts a vibrant mid-20th-century car wash scene,
                likely from the 1950s based on the design of the cars and the
                signage. The central focus is the car wash building with bold,
                eye-catching signs advertising a 99¢ car wash. The painting
                showcases a variety of classic cars, including a light blue
                sedan, a green coupe, and a purple station wagon, indicative of
                the eras automotive style. People are seen interacting with the
                cars, either washing or polishing them, adding a sense of
                activity and liveliness to the scene. The architecture and
                surrounding elements, such as the vintage gas pump and the large
                arrow-shaped sign pointing towards the car wash, evoke nostalgia
                for the mid-century American roadside culture. The soft, pastel
                color palette and the detailed yet idealized portrayal of the
                scene contribute to the paintings nostalgic and idyllic charm.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetails;
