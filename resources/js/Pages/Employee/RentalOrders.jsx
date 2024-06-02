import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";

const RentalOrders = ({ auth, rentals }) => {
    const [filteredData, setFilteredData] = useState(rentals.data);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(rentals.current_page);

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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Rental
                </h2>
            }
        >
            <Head title="Rentals" />
            <div className="flex flex-col items-end px-6 mt-16">
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

                                <td className="text-center border-r-2 border-gray-200">
                                    {rental.status}
                                </td>
                                <td className="text-center border-r-2 border-gray-200 ">
                                    <button></button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            // onDeleteClick(rental);
                                        }}
                                    >
                                        <FaTrashAlt className="text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-between  items-center gap-x-5 mt-5 mb-32">
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default RentalOrders;
