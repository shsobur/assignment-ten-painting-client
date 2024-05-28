import { Link } from "react-router-dom";
import "../../Styles/CraftItemCart.css";
import PropTypes from 'prop-types';
import { IoIosStarOutline } from "react-icons/io";

const CraftItemCart = ({ paintCraft }) => {
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
  } = paintCraft;
  return (
    <div>
      <section className="py-6 sm:py-12 bg-transparent text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="single_cart">
            <article
              className="flex flex-col bg-[#a2c4fa]"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src={image}
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-xl font-semibold leading-snug">
                  {itme_name}
                </h3>
                <h2>{subcategory_name}</h2>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-sm text-gray-600">
                  <span>
                    <div>{stock_status}</div>
                  </span>
                  <span className="flex gap-1 items-center justify-center">
                    <div>{rating}</div>
                    <div>
                      <IoIosStarOutline />
                    </div>
                  </span>
                </div>
                <div className="mt-5">
                  <Link>
                    <button className="btn btn-neutral">View Details</button>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

CraftItemCart.propTypes =  {
  paintCraft: PropTypes.object
}

export default CraftItemCart;
