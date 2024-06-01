import { useLoaderData } from "react-router-dom";
import "../Styles/AllArt.css";
import AllArtList from "../components/AllArtList/AllArtList";

const AllArt = () => {
  const paintCrafts = useLoaderData();

  return (
    <div className="main_art_container">
      <div className="text-center mt-5">
        <h1
          className="font-semibold text-4xl pb-5 text-[#5882c6]"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          Comprehensive Art & Craft Listings
        </h1>
        <p className="text-sm pl-5 pr-5 text-[#868686] pb-10 border-b-2">
          Browse our extensive list of art and craft items, showcasing the
          creative works of diverse artists. Each entry includes details on the
          creator, artwork title, and genre, along with user ratings. Click{" "}
          <b>View Details</b> to explore each piece further and appreciate the
          unique artistry behind every creation. Dive into the rich world of art
          and craft today!
        </p>
      </div>

      <div className="main_art_inner_container mt-20">
        <div className="container mx-auto my-2">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b-2 border-[#a2c4fa] ">
                  Users
                </th>
                <th className="py-2 border-[#a2c4fa] px-4 border-b-2  text-left">
                  Name
                </th>
                <th className="py-2 px-4  border-[#a2c4fa] border-b-2 text-left">
                  Rating
                </th>
                <th className="py-2 px-4 border-b-2 border-[#a2c4fa] text-left">
                  Visit
                </th>
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
