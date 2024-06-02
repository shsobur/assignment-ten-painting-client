import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoStarHalf } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyArtList = () => {
  const { user } = useContext(AuthContext) || {};
  const [myArts, setMyArts] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:5000/myartlist/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyArts(data);
        })
        .catch((error) => {
          console.error("Error fetching", error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addcraft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingArt = myArts.filter((myArt) => myArt._id !== id);
              setMyArts(remainingArt);
            } else {
              console.log("Failed to delete");
            }
          })
          .catch((error) => {
            console.error("Error deleting art:", error);
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center mt-5 p-5">
        <h2
          className="font-semibold text-4xl pb-5 text-[#5882c6] font-serif"
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          My Art & Craft Collection
        </h2>
        <p className="text-sm pl-5 pr-5 text-[#868686] pb-10 border-b-2">
          Welcome to your personalized art and <b>craft collection!</b> Here,
          you can view and manage all your listed artworks and crafts. Each
          entry showcases the pieces details, including price, rating, and a
          brief description. Keep track of your creative journey and share your
          masterpieces with others. Enjoy browsing through your unique
          collection!
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center p-5">
        {Array.isArray(myArts) &&
          myArts.map((myArt) => (
            <div key={myArt._id}>
              <div>
                <div
                  className="max-w-lg p-4 shadow-md bg-gray-200 text-gray-800 mt-10"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <img
                        src={myArt.image}
                        alt=""
                        className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-2xl font-bold text-[#4c84dd] font-serif">
                          {myArt.itme_name}
                        </h3>
                      </a>
                      <div className="leading-snug text-gray-600">
                        <table className="table">
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>Price : </th>
                              <td>{myArt.price}</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>Rating : </th>
                              <td className="flex items-center gap-2 ">
                                <div>{myArt.rating}</div>
                                <div>
                                  <IoStarHalf />
                                </div>
                              </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>Customization : </th>
                              <td>{myArt.customization}</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                              <th>Status : </th>
                              <td>{myArt.stock_status}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="flex items-center justify-between ">
                        <div>
                          <h2 className="font-bold">
                            <span className="text-gray-400 text-sm font-normal">
                              {myArt.user_email}
                            </span>
                          </h2>
                        </div>
                        <div className="flex items-center gap-10 ">
                          <div>
                            <Link to={`/updatecraft/${myArt._id}`}>
                              <button className="btn btn-neutral btn-sm">
                                Update
                              </button>
                            </Link>
                          </div>
                          <div>
                            <button
                              onClick={() => handleDelete(myArt._id)}
                              className="btn btn-neutral btn-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyArtList;
