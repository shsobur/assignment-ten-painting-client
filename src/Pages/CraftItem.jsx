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
