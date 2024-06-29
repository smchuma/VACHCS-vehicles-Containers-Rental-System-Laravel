import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const RentalTable = ({ rentals, role, onRowClick }) => {
    const [filteredData, setFilteredData] = useState(rentals.data);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(rentals.current_page);

    const { delete: destroy } = useForm();

    const handleDelete = (rental) => {
        Swal.fire({
            title: `Rental Number: ${rental.rental_order_number}`,
            text: `Are you sure you want to delete this rental order?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("rental-orders.destroy", rental.id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        setFilteredData(
                            filteredData.filter((v) => v.id !== rental.id)
                        );
                    },
                });
                Swal.fire(
                    "Deleted!",
                    "The rental order has been deleted.",
                    "success"
                );
            }
        });
    };

    useEffect(() => {
        setFilteredData(
            rentals.data.filter(
                (v) =>
                    v.rental_order_number
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    v.vehicle.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    v.customer.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, rentals.data]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

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
            <div className="flex flex-col  pr-6 mt-16">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-xl">Available Rentals</h1>
                    <div className="flex justify-end items-center mb-4 px-2 border border-gray-500 rounded-lg w-80">
                        <CiSearch size={25} />
                        <input
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            placeholder="Search vehicles..."
                            className=" border-0 bg-transparent placeholder:text-gray-600 w-80 outline-none focus:ring-0"
                        />
                    </div>
                </div>
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="py-4">Rental Number</th>
                            <th>Vehicle Name</th>
                            <th>Customer Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Actions</th>
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
                                <td className="text-center border-r-2 border-gray-200 ">
                                    {role == 1 ? (
                                        <button
                                            onClick={() => onRowClick(rental)}
                                            className="mr-2"
                                        >
                                            <FaPencilAlt
                                                className="text-gray-500"
                                                size={12}
                                            />
                                        </button>
                                    ) : (
                                        ""
                                    )}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(rental);
                                        }}
                                    >
                                        <FaTrashAlt
                                            className="text-red-500"
                                            size={12}
                                        />
                                    </button>
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

export default RentalTable;
