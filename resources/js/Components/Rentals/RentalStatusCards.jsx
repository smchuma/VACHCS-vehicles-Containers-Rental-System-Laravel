import React from "react";
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";

const RentalStatusCards = ({ pendingCount, approvedCount, rejectedCount }) => {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 py-10 flex justify-between">
                <div className="flex items-center gap-2">
                    <FaHourglassHalf className="text-xl" />
                    <h2 className=" font-semibold ">Pending Rentals</h2>
                </div>
                <div className="flex items-center gap-5">
                    <p className="text-3xl">{pendingCount}</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 py-10 flex justify-between">
                <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-xl mr-4" />
                    <h2 className="font-semibold">Approved Rentals</h2>
                </div>
                <div className="flex items-center gap-5">
                    <p className="text-3xl">{approvedCount}</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 py-10 flex justify-between">
                <div className="flex items-center gap-2">
                    <FaTimesCircle className="text-xl mr-4" />
                    <h2 className="font-semibold">Rejected Rentals</h2>
                </div>
                <div className="flex items-center gap-5">
                    <p className="text-3xl">{rejectedCount}</p>
                </div>
            </div>
        </div>
    );
};

export default RentalStatusCards;
