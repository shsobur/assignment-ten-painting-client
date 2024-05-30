import { useLoaderData } from "react-router-dom";
import "../../Styles/ItemDetails.css";
import { IoStarHalf } from "react-icons/io5";

const ItemDetails = () => {
  const paintInfo = useLoaderData()

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
              src={paintInfo.image}
              alt=""
              className="object-cover mt-10 w-full h-64 rounded sm:h-96 lg:col-span-6 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-6">
              <div className="main_details_container">
                <h2>{paintInfo.itme_name}</h2>
                <p>{paintInfo.subcategory_name}</p>
                <div className="about_section_details_container">
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>Price : </th>
                          <td>{paintInfo.price}$</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>Customization : </th>
                          <td>{paintInfo.customization}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>Status : </th>
                          <td>{paintInfo.stock_status}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                          <th>Time : </th>
                          <td>{paintInfo.processing_time}</td>
                        </tr>
                        {/* row 5 */}
                        <tr>
                          <th>Rating : </th>
                          <td className="flex items-center gap-2 ">
                            <div>{paintInfo.rating}</div>
                            <div>
                              <IoStarHalf />
                            </div>
                          </td>
                        </tr>
                        {/* row 6 */}
                        <tr>
                          <th>user name : </th>
                          <td>{paintInfo.user_name}</td>
                        </tr>
                        {/* row 7 */}
                        <tr>
                          <th>user email : </th>
                          <td>{paintInfo.user_email}</td>
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
                {paintInfo.description}
                </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetails;
