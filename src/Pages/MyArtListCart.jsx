import { IoStarHalf } from "react-icons/io5";

const MyArtListCart = ({ myArt }) => {
  const {
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
  } = myArt;

  return (
    <div>
      <div className="max-w-lg p-4 shadow-md bg-gray-200 text-gray-800 mt-10">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center"></div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-2xl font-bold text-[#649bf4] font-serif">
                Facere ipsa nulla corrupti
              </h3>
            </a>
            <div className="leading-snug text-gray-600">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>Price : </th>
                    <td>5,400,000$</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>Rating : </th>
                    <td className="flex items-center gap-2 ">
                      <div>4.6</div>
                      <div>
                        <IoStarHalf />
                      </div>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>Customization : </th>
                    <td>Yes</td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <th>Status : </th>
                    <td>In Stok</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between ">
              <div>
                <h2 className="font-bold">
                  By :{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    Sobur Hossen
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-10 ">
                <div>
                  <button className="btn btn-neutral btn-sm">Update</button>
                </div>
                <div>
                  <button className="btn btn-neutral btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtListCart;
