export default function Galery() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              Gallery
            </h2>

            <p className="max-w-screen-sm hidden md:block text-gray-500">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>
          </div>

          <a
            href="#"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            More
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.pexels.com/photos/7896166/pexels-photo-7896166.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Street
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              loading="lazy"
              alt="Photo by Magicle"
              className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Retro
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1000"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Casual
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.pexels.com/photos/7951192/pexels-photo-7951192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
              Modern
            </span>
          </a>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
}
