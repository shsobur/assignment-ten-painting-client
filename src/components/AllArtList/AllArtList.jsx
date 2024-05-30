import { Link } from "react-router-dom";
import "../../Styles/AllArtList.css";
import { IoIosStarHalf } from "react-icons/io";

const AllArtList = ({ paintCraft }) => {
  return (
    <tr className="hover:bg-[#a2c4fab2]">
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div className="main_username_container">

          <div className="user_image_contaienr">
            <img src="https://i.ibb.co/qDF2tdh/watercolor-painting-mountain-forest-landscape-with-river-forest-river-hand-painted-illustration-2211.jpg" />
          </div>
          <div className="user_name_container">
            <h2>Watercolor painting</h2>
            <p>sobur@gmaol456.com</p>
          </div>

        </div>
      </td>
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div>

          <div className="name_titel_container">
            <h2>Watercolor painting</h2>
            <p><span>High Renaissance Art</span></p>
          </div>

        </div>
      </td>
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div className="flex items-center gap-2">

          <div className="text-[#5e6269] font-semibold">4.8</div>
          <div><IoIosStarHalf /></div>

        </div>
      </td>
      <td className="py-2 px-4 border-b border-[#a2c4fa]">
        <div>
          <Link>
            <button className="btn btn-neutral btn-sm">View Details</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AllArtList;
