import React from "react";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Reports = ({ auth }) => {
    const { get } = useForm();

    const handleReportClick = (status) => {
        get(`/rentals/${status}`);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container mx-auto mt-10 pb-10">
                <h1 className="text-2xl font-bold mb-9">Report Type</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button
                        className="p-4 border rounded shadow hover:bg-gray-100"
                        onClick={() => handleReportClick("pending")}
                    >
                        Pending Rentals
                    </button>
                    <button
                        className="p-4 border rounded shadow hover:bg-gray-100"
                        onClick={() => handleReportClick("approved")}
                    >
                        Approved Rentals
                    </button>
                    <button
                        className="p-4 border rounded shadow hover:bg-gray-100"
                        onClick={() => handleReportClick("rejected")}
                    >
                        Rejected Rentals
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Reports;
