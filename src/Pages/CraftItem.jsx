import { useLoaderData } from "react-router-dom";
import "../Styles/CraftItem.css";
import CraftItemCart from "../components/CraftItemCart/CraftItemCart";

const CraftItem = () => {
  const paintCrafts = useLoaderData();

  return (
    <div className="main_cart_container">
      <div className="main_Inner_cart_contaner">
        <section className="text-gray-800">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="text-center mt-5">
              <h1
                className="font-semibold text-4xl pb-5 text-[#5882c6]"
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                Featured Art and Craft Collection
              </h1>
              <p className="text-sm pl-5 pr-5 text-[#868686] pb-10 border-b-2">
                Explore our curated collection of art and{" "}
                <b>craft masterpieces</b>, showcasing a diverse range of styles
                and techniques. From the iconic charm of the Mona Lisa to the
                vibrant street scenes of watercolor paintings, our gallery
                offers a visual feast for art enthusiasts.Enjoy your journey
                through our artistic wonderland!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {paintCrafts.map((paintCraft) => (
                <CraftItemCart
                  key={paintCraft._id}
                  paintCraft={paintCraft}
                ></CraftItemCart>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
              >
                Load more posts...
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CraftItem;
