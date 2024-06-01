import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";

const VehicleTable = ({ vehicle, onRowClick, onDeleteClick, onImageClick }) => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(vehicle.current_page);
    const [filteredData, setFilteredData] = useState(vehicle.data);

    useEffect(() => {
        setFilteredData(
            vehicle.data.filter(
                (v) =>
                    v.name.toLowerCase().includes(search.toLowerCase()) ||
                    v.Vehicle_No.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, vehicle.data]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handlePageChange = (newPage) => {
        // Handle pagination logic here, possibly with Inertia router
    };

    return (
        <div className="flex flex-col items-end">
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
                        <th className="py-4">Image</th>
                        <th>No</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Capacity</th>
                        <th>Status</th>
                        <th>Price Per Day</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((vehicle) => (
                        <tr
                            key={vehicle.id}
                            className="border-2 border-gray-200"
                        >
                            <td className="flex justify-center border-r-2 border-gray-200">
                                <img
                                    src={`/storage/${vehicle.image}`}
                                    alt={vehicle.name}
                                    className="w-16 h-16  object-contain"
                                    onClick={() => onImageClick(vehicle)}
                                />
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {vehicle.Vehicle_No}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {vehicle.name}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {vehicle.type}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {vehicle.capacity}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {vehicle.status}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {vehicle.price_per_day}
                            </td>
                            <td className="text-center border-r-2 border-gray-200 ">
                                <button>
                                    <GiPencil
                                        className="mr-4"
                                        onClick={() => onRowClick(vehicle)}
                                    />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onDeleteClick(vehicle);
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
                    Page {page} of {vehicle.last_page}
                </span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === vehicle.last_page}
                    className="cursor-pointer"
                >
                    <GrNext />
                </button>
            </div>
        </div>
    );
};

export default VehicleTable;
