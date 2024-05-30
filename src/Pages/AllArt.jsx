import { useLoaderData } from "react-router-dom";
import "../Styles/AllArt.css";
import AllArtList from "../components/AllArtList/AllArtList";

const AllArt = () => {
  const paintCrafts = useLoaderData();

  return (
    <div className="main_art_container">

      <div className="art_section_title">
        <h1>All Art & Craft Items</h1>
      </div>

      <div className="main_art_inner_container ">
        <div className="container mx-auto my-2">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-[#a2c4fa] text-left">
                  Users
                </th>
                <th className="py-2 px-4 border-b-2 border-[#a2c4fa] text-left">Name</th>
                <th className="py-2 px-4 border-b-2 border-[#a2c4fa] text-left">Rating</th>
                <th className="py-2 px-4 border-b-2 border-[#a2c4fa] text-left">Visit</th>
              </tr>
            </thead>
            <tbody>
              {paintCrafts.map((paintCraft) => (
                <AllArtList key={paintCraft._id} paintCraft={paintCraft} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArt;
