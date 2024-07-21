import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const UpcomingRentalTable = ({ rentals }) => {
    const [filteredData, setFilteredData] = useState(
        rentals.filter((ren) => ren.status == "Pending")
    );

    const getStatusClass = (status) => {
        switch (status) {
            case "Approved":
                return "bg-green-500 text-white px-3 py-1 rounded";
            case "Pending":
                return "bg-gray-500 text-white px-3 py-1 rounded";
            case "Rejected":
                return "bg-red-500 text-white px-3 py-1 rounded";
            default:
                return "bg-gray-500 text-white px-3 py-1 rounded";
        }
    };

    return (
        <>
            <div className="flex flex-col ">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="py-4">Rental Number</th>
                            <th>Vehicle Name</th>
                            <th>Customer Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((rental) => (
                            <tr
                                key={rental.id}
                                className="border-2 border-gray-200"
                            >
                                <td className="text-center border-r-2 border-gray-200 py-4">
                                    {rental.rental_order_number}
                                </td>
                                <td className="text-center border-r-2 border-gray-200">
                                    {rental.vehicle.name}
                                </td>
                                <td className="text-center border-r-2 border-gray-200">
                                    {rental.customer.name}
                                </td>
                                <td className="text-center border-r-2 border-gray-200">
                                    {rental.start_date}
                                </td>
                                <td className="text-center border-r-2 border-gray-200">
                                    {rental.end_date}
                                </td>
                                <td className="text-center border-r-2 border-gray-200">
                                    {rental.total_price}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                    <span
                                        className={getStatusClass(
                                            rental.status
                                        )}
                                    >
                                        {rental.status.charAt(0).toUpperCase() +
                                            rental.status.slice(1)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredData.length == 0 && (
                    <h1 className="text-center my-5">No Rental Found</h1>
                )}
                {/* <div className="flex justify-between  items-center gap-x-5 mt-5 mb-32">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="cursor-pointer"
                    >
                        <GrPrevious />
                    </button>
                    <span>
                        Page {page} of {rentals.last_page}
                    </span>
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === rentals.last_page}
                        className="cursor-pointer"
                    >
                        <GrNext />
                    </button>
                </div> */}
            </div>
        </>
    );
};

export default UpcomingRentalTable;
