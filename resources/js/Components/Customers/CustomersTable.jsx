import { useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";
import Swal from "sweetalert2";

const CustomersTable = ({ customer, onRowClick }) => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(customer.current_page);
    const [filteredData, setFilteredData] = useState(customer.data);
    const { delete: destroy } = useForm();

    useEffect(() => {
        setFilteredData(
            customer.data.filter((v) =>
                v.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, customer.data]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handlePageChange = (newPage) => {
        // Handle pagination logic here, possibly with Inertia router
    };

    const handleDelete = (customer) => {
        Swal.fire({
            title: `Customer Name: ${customer.name}`,
            text: `Are you sure you want to delete this customer?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("customer.destroy", customer.id), {
                    preserveScroll: true,
                    onSuccess: () => {
                        setFilteredData(
                            filteredData.filter((v) => v.id !== customer.id)
                        );
                    },
                });
                Swal.fire(
                    "Deleted!",
                    "The customer has been deleted.",
                    "success"
                );
            }
        });
    };

    return (
        <div className="flex flex-col px-6 mt-10">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-xl">Available Customers</h1>
                <div className="flex justify-end items-center px-2 border border-gray-500 rounded-lg w-80">
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
                        <th className="py-4">License Number</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((customer) => (
                        <tr
                            key={customer.id}
                            className="border-2 border-gray-200"
                        >
                            <td className="text-center border-r-2 border-gray-200 py-4">
                                {customer.id_number}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {customer.name}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {customer.email}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {customer.phone_number}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {customer.address}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {customer.city}
                            </td>
                            <td className="text-center border-r-2 border-gray-200 ">
                                <button>
                                    <GiPencil
                                        className="mr-4"
                                        onClick={() => onRowClick(customer)}
                                    />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(customer);
                                    }}
                                >
                                    <FaTrashAlt className="text-red-500" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {filteredData.length == 0 && (
                <h1 className="text-center my-5">No Customers Found</h1>
            )}
            <div className="flex justify-between  items-center gap-x-5 mt-5 mb-32">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="cursor-pointer"
                >
                    <GrPrevious />
                </button>
                <span>
                    Page {page} of {customer.last_page}
                </span>
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === customer.last_page}
                    className="cursor-pointer"
                >
                    <GrNext />
                </button>
            </div>
        </div>
    );
};

export default CustomersTable;
