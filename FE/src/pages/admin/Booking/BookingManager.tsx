const BookingManager = () => {
  return (
    <body className="relative bg-yellow-50 overflow-hidden max-h-screen">
      <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end ">
            {/* items-center justify-between */}

            <button
              id="all-room-button"
              className="w-28 p-2 flex items-center justify-between hover:bg-amber-200 hover:text-white bg-white border border-amber-400 rounded-md	"
            >
              <div>All Room</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>

            <div id="room-list">
              {/* <!-- Các phòng sẽ được hiển thị ở đây --> */}
            </div>

            <script>
              {/* const allRoomButton = document.getElementById('all-room-button');
  const roomList = document.getElementById('room-list');

  // Mô phỏng dữ liệu phòng
  const rooms = [
    'Phòng 1',
    'Phòng 2',
    'Phòng 3',
    // Thêm các loại phòng khác vào đây
  ];

  // Hàm hiển thị tất cả các loại phòng
  function showAllRooms() {
    roomList.innerHTML = ''; // Xóa nội dung hiện tại
    rooms.forEach((room) => {
      const roomItem = document.createElement('div');
      roomItem.textContent = room;
      roomList.appendChild(roomItem);
    });
  }

  // Đặt sự kiện click cho nút
  allRoomButton.addEventListener('click', showAllRooms); */}
            </script>

            <div className="mx-3 border-l border-gray-400 h-10"></div>
            <div>
              <button className="w-18 p-2 hover:bg-amber-200 hover:text-white bg-white border border-amber-400 rounded-md	">
                <p>Daily</p>
              </button>
            </div>

            <div>
              <button className="w-24 p-2 mx-3 hover:bg-amber-200 hover:text-white bg-white border border-amber-400 rounded-md	">
                <p>Monthly</p>
              </button>
            </div>
            <div className="mr-3 border-l border-gray-400 h-10"></div>
            <div>
              <button
                type="button"
                className=" flex w-50 p-2 hover:bg-white hover:text-amber-500 bg-amber-200	border border-amber-400 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className=" w-8 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <p>Create new booking</p>
              </button>
            </div>
          </div>
        </div>
      </header>

      <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 py-6 text-center border-b">
              <h1 className="text-xl font-bold leading-none">
                {/* <span className="text-yellow-700">Task Manager</span> App */}
              </h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                    </svg>
                    Booking
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    Hotel
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    RoomType
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-lg mr-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                    User
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <button
              type="button"
              className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className=""
                viewBox="0 0 16 16"
              >
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </button>{" "}
            <span className="font-bold text-sm ml-2">Logout</span>
          </div>
        </div>
      </aside>

      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5 ">
              <div>
                <h2 className="text-2xl font-bold mb-3">Deluxe Suites</h2>
              </div>
              <div className="p-4">
                <hr />
              </div>

              <div className="grid grid-cols-4">
                <div className=" ml-8 mt-4">
                  <p className="font-bold text-2xl text-gray-800">Suite1</p>

                  <p className="text-green-400">Room 12</p>
                </div>

                <div className="flex col-span-2">
                  <div>
                    <div className="p-4 bg-green-100 border border-teal-400 rounded-md ">
                      <div className="font-bold text-gray-800 leading-none">
                        Good day, Kristin dsgddddddddddddd
                      </div>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                  <div className="p-2 bg-yellow-100 border border-yellow-400 rounded-md mx-5 text-gray-800">
                    <div className="font-bold leading-none">20</div>
                    <div className="mt-2">Tasks finished</div>
                  </div>
                  <button
                    type="button"
                    className=" items-center bg-slate-100 border border-slate-500 rounded-md "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className=" w-10 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <hr />
              </div>

              <div className="grid grid-cols-4">
                <div className=" ml-8 mt-4">
                  <p className="font-bold text-2xl text-gray-800">Suite1</p>
                  <p className="text-green-400">Room 12</p>
                </div>
                <div className="flex col-span-2">
                  <div>
                    <div className="p-4 bg-green-100 border border-teal-400 rounded-md">
                      <div className="font-bold text-gray-800 leading-none">
                        Good day, Kristin djkskghskgsgslglsgslgslgjslgjskl
                        alooooo cuong mau dep triiiii
                      </div>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                  <div className="p-2 bg-yellow-100 border border-yellow-400 rounded-md mx-5 text-gray-800">
                    <div className="font-bold leading-none">20</div>
                    <div className="mt-2">Tasks finished</div>
                  </div>
                  <button
                    type="button"
                    className=" items-center bg-slate-100 border border-slate-500 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className=" w-10 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <hr />
              </div>

              <div className="grid grid-cols-4 ">
                <div className=" ml-8 mt-4">
                  <p className="font-bold text-2xl text-gray-800">Suite1</p>
                  <p className="text-green-400">Room 12</p>
                </div>
                <div className="flex col-span-2">
                  <div>
                    <div className="p-4 bg-green-100 border border-teal-400 rounded-md">
                      <div className="font-bold text-gray-800 leading-none">
                        Good day, Kristin
                      </div>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                  <div className="p-2 bg-yellow-100 border border-yellow-400 rounded-md mx-5 text-gray-800">
                    <div className="font-bold leading-none">20</div>
                    <div className="mt-2">Tasks finished</div>
                  </div>
                  <button
                    type="button"
                    className=" items-center bg-slate-100	 border border-slate-500 rounded-md "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className=" w-10 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-5">
                <hr />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Supreme Suites</h2>
              </div>
              <div className="p-4">
                <hr />
              </div>

              <div className="grid grid-cols-4">
                <div className=" ml-8 mt-4">
                  <p className="font-bold text-2xl text-gray-800">Suite1</p>
                  <p className="text-green-400">Room 12</p>
                </div>
                <div className="flex col-span-2">
                  <div>
                    <div className="p-4 bg-green-100 border border-teal-400 rounded-md ">
                      <div className="font-bold text-gray-800 leading-none">
                        Good day, Kristin
                      </div>
                      <div className="mt-5"></div>
                    </div>
                  </div>
                  <div className="p-2 bg-yellow-100 border border-yellow-400 rounded-md mx-5 text-gray-800">
                    <div className="font-bold leading-none">20</div>
                    <div className="mt-2">Tasks finished</div>
                  </div>
                  <button
                    type="button"
                    className=" bg-slate-300 border border-slate-500 rounded-md "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default BookingManager;
