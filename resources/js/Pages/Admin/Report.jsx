import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

const Report = () => {
    const { get } = useForm();

    const handleReportClick = (status) => {
        get(`/report/${status}`);
    };

    return (
        <AdminAuthenticatedLayout>
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
        </AdminAuthenticatedLayout>
    );
};

export default Report;
