import React from "react";
import PrimaryButton from "../PrimaryButton";

const CategoryHeader = () => {
    return (
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <div className="flex items-center gap-x-3">
                    <h2 className="text-2xl font-medium text-gray-800 ">
                        Available Categories
                    </h2>
                </div>
            </div>

            <div className="flex items-center mt-4 gap-x-3">
                <PrimaryButton className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 ">
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg> */}

                    <span>Add Category</span>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default CategoryHeader;
