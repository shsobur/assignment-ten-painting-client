import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../../Styles/AllArtList.css";
import { IoIosStarHalf } from "react-icons/io";

const AllArtList = ({ paintCraft }) => {
  const {
    _id,
    image,
    itme_name,
    subcategory_name,
    rating,
    user_name,
    user_email,
  } = paintCraft;

  return (
    <tr className="hover:bg-[#a2c4fab2]">
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div className="main_username_container">
          <div className="user_image_contaienr">
            <img src={image} />
          </div>
          <div className="user_name_container">
            <h2>{user_name}</h2>
            <p>{user_email}</p>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div>
          <div className="name_titel_container">
            <h2>{itme_name}</h2>
            <p>
              <span>{subcategory_name}</span>
            </p>
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div className="flex items-center gap-2">
          <div className="text-[#5e6269] font-semibold">{rating}</div>
          <div>
            <IoIosStarHalf />
          </div>
        </div>
      </td>
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div>
          <Link to={`/itemdetails/${_id}`}>
            <button className="btn btn-neutral btn-sm">View Details</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

AllArtList.propTypes = {
  paintCraft: PropTypes.object,
}

export default AllArtList;
