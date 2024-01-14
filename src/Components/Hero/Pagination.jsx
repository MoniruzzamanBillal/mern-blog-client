import React, { useState } from "react";

const Pagination = (props) => {
  const {
    currentPage,
    totalItemCount,
    dataPerPage,
    numofpages,
    pages,
    handleNextCurrent,
    handlePrev,
  } = props;

  return (
    <div className="paginationContainer mt-3 py-1 ">
      <div className="paginationWrapper">
        {/*  */}

        {/* pagination container  */}
        <div className="paginationContainer  sansFont relative z-[10] ">
          {/*  */}

          <div className="pagination    text-center text-xs xsm:text-sm sm:text-base  ">
            <button
              onClick={() => handlePrev()}
              className=" py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 border-r border-gray-600 text-white bg-gray-500  hover:bg-gray-700   "
            >
              Prev
            </button>
            {pages.map((page, ind) => (
              <button
                onClick={() => setCurrentPage(page + 1)}
                className={` py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white   ${
                  currentPage - 1 === page
                    ? "bg-[#e4c590] hover:bg-amber-300 "
                    : "bg-gray-500  hover:bg-gray-700"
                } border-r border-gray-600 `}
              >
                {" "}
                {page + 1}{" "}
              </button>
            ))}
            <button
              onClick={() => handleNextCurrent()}
              className="py-1.5 xsm:py-2.5 px-2.5 xsm:px-3 sm:px-4 text-white bg-gray-500  hover:bg-gray-700   "
            >
              Next
            </button>
          </div>
          {/*  */}
        </div>
        {/* pagination container  */}
      </div>
    </div>
  );
};

export default Pagination;
