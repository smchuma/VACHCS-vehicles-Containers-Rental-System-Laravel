import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { CiSearch } from "react-icons/ci";
import TextInput from "../TextInput";

const CustomerSearch = ({ onSelect }) => {
    const { customers } = usePage().props;
    const [filteredCustomers, setFilteredCustomers] = useState();
    const [search, setSearch] = useState("");
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredCustomers([]);
            setNoResults(true);
        } else {
            const results = customers.data.filter((customer) =>
                customer.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredCustomers(results);
            setNoResults(results.length === 0);
        }
    }, [search, customers.data]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <h1 className="m-8 mb-4 border-b-2 pb-2">
                <span className="text-2xl font-bold">Search the Customer </span>
            </h1>
            <div className="m-8">
                <div className="flex justify-end items-center mb-4 px-2 border border-gray-500 rounded-lg w-full">
                    <CiSearch size={25} />
                    <TextInput
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search the customer name here..."
                        className=" border-0 bg-transparent placeholder:text-gray-600 w-full outline-none focus:ring-0"
                    />
                </div>
            </div>
            <div className="mx-5 mb-10">
                <table className="min-w-full leading-normal">
                    <thead className="p-2">
                        <tr className="border-2 bg-gray-900 text-white ">
                            <th className="p-4 ">License No.</th>
                            <th className="p-4 ">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Phone No.</th>
                            <th className="p-4">Address</th>
                            <th className="p-4">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCustomers &&
                            filteredCustomers.map((customer) => (
                                <tr
                                    key={customer.id}
                                    className="border-2 border-gray-200 cursor-pointer"
                                    onClick={() => onSelect(customer)}
                                >
                                    <td className="text-center py-5">
                                        {customer.id_number}
                                    </td>
                                    <td className="text-center py-5 ">
                                        {customer.name}
                                    </td>
                                    <td className="text-center py-5">
                                        {customer.email}
                                    </td>
                                    <td className="text-center py-5">
                                        {customer.phone_number}
                                    </td>
                                    <td className="text-center py-5">
                                        {customer.address}
                                    </td>
                                    <td className="text-center py-5">
                                        {customer.city}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {noResults && search.trim() !== "" && (
                    <div className="mt-4 text-center">
                        <p className="">
                            Customer not found, please add the customer
                        </p>
                    </div>
                )}
                {noResults && search.trim() === "" && (
                    <div className="mt-4 text-center">
                        <p className="">Search your customer</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerSearch;
