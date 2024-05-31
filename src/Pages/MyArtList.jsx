const MyArtList = () => {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-50 text-gray-800">
            <div className="flex space-x-4">
              <img
                alt=""
                src="https://source.unsplash.com/100x100/?portrait"
                className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  Leroy Jenkins
                </a>
                <span className="text-xs text-gray-600">4 hours ago</span>
              </div>
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/100x100/?5"
                alt=""
                className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500"
              />
              <h2 className="mb-1 text-xl font-semibold">
                Nam cu platonem posidonium sanctus debitis te
              </h2>
              <p className="text-sm text-gray-600">
                Eu qualisque aliquando mel, id lorem detraxit nec, ad elit
                minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius,
                vim ad illud atqui apeirian...
              </p>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="space-x-2">
                <button
                  aria-label="Share this post"
                  type="button"
                  className="p-2 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current text-violet-600"
                  >
                    <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                  </svg>
                </button>
                <button
                  aria-label="Bookmark this post"
                  type="button"
                  className="p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current text-violet-600"
                  >
                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex space-x-2 text-sm text-gray-600">
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5"
                >
                  <span>30</span>
                </button>
                <button
                  type="button"
                  className="flex items-center p-1 space-x-1.5"
                >
                  <span>283</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtList;
