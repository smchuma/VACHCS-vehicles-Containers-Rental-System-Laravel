import React from "react";

const ReportTable = ({ title, columns, data }) => {
    return (
        <div className="container mx-auto mt-5 px-8 pb-10">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="border-2 border-gray-200">
                            <td className="text-center border-r-2 border-gray-200">
                                {item.rental_order_number}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.customer.id_number}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.customer.name}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.vehicle.Vehicle_No}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.vehicle.name}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.start_date}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.end_date}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.total_price}
                            </td>
                            <td className="text-center border-r-2 border-gray-200">
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportTable;
