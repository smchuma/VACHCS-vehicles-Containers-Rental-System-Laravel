import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { format } from "date-fns";

const Orders = ({ auth, rentals }) => {
    return (
        <main>
            <AuthenticatedLayout user={auth.user}>
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800 mt-10">
                        My Rentals
                    </h1>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        {rentals.length == 0 ? (
                            <p className="text-gray-500 text-lg">
                                You have no rentals.
                            </p>
                        ) : (
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Order Number
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Vehicle
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Start Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            End Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Total Price
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {rentals.map((rental) => (
                                        <tr key={rental.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {rental.rental_order_number}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {rental.vehicle.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {format(
                                                    new Date(rental.start_date),
                                                    "MMM d, yyyy"
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {format(
                                                    new Date(rental.end_date),
                                                    "MMM d, yyyy"
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {rental.total_price}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-medium leading-5 rounded-full ${
                                                        rental.status ===
                                                        "Pending"
                                                            ? "bg-yellow-100 text-gray-800"
                                                            : "bg-green-100 text-green-800"
                                                    }`}
                                                >
                                                    {rental.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="mt-6 text-gray-700">
                        {rentals.map((rental) => (
                            <div
                                key={rental.id}
                                className="my-4 p-4 border rounded-md shadow-sm bg-white"
                            >
                                {rental.status === "Pending" ? (
                                    <p className="text-gray-700">
                                        Please wait for the admin to approve
                                        your rental request.
                                    </p>
                                ) : (
                                    <p className="text-green-700">
                                        Your rental has been approved. Please
                                        come and collect your car at the nearest
                                        office.
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </AuthenticatedLayout>
        </main>
    );
};

export default Orders;
