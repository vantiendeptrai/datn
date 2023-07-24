const HotelPagination = () => {
  const page = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col items-center justify-between border-t px-4 py-3 sm:px-6 bg-light dark:bg-dark">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
        <div className="mb-2 sm:mb-0">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span>
          </p>
        </div>

        <div className="flex items-center mt-2 sm:mt-0">
          <nav className="flex space-x-2">
            {/* PREVIOUS */}
            <a
              href="#"
              className="block p-2 text-gray-400 rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/*  */}

            {/* CHUYỂN TRANG */}
            {page.map((item) => {
              return (
                <a
                  key={item}
                  href=""
                  className="block p-2 text-sm font-semibold text-textLight2nd hover:bg-indigo-600 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  aria-current="page"
                >
                  {item}
                </a>
              );
            })}

            <a
              href="#"
              className="block p-2 text-gray-400 rounded-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HotelPagination;
