import { Link, usePage } from "@inertiajs/react";
import ReportTable from "@/Components/Reports/ReportTable";
import DownloadReport from "@/Components/Reports/DownloadReport";
import { IoIosArrowBack } from "react-icons/io";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";

const ReportStatus = ({ auth }) => {
    const { rentals, status } = usePage().props;

    console.log(auth);

    const reportData = {
        title: `${status.charAt(0).toUpperCase() + status.slice(1)} Rentals`,
        columns: [
            "Rental ID",
            "Customer ID",
            "Customer Name",
            "Vehicle Number",
            "Vehicle Name",
            "Start Date",
            "End Date",
            "Total Price",
            "Status",
        ],
    };
    const handleDownload = (format) => {
        const { title, columns } = reportData;
        const data = rentals.map((rental) => ({
            "Rental ID": rental.rental_order_number,
            "Customer ID": rental.customer.id_number,
            "Customer Name": rental.customer.name,
            "Vehicle Number": rental.vehicle.Vehicle_No,
            "Vehicle Name": rental.vehicle.name,
            "Start Date": rental.start_date,
            "End Date": rental.end_date,
            "Total Price": rental.total_price,
            Status: rental.status,
        }));

        if (format === "excel") {
            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, title);
            XLSX.writeFile(workbook, `${title}.xlsx`);
        } else if (format === "pdf") {
            const doc = new jsPDF();
            doc.text(title, 20, 10);
            doc.autoTable({
                head: [columns],
                body: data.map((row) => Object.values(row)),
            });
            doc.save(`${title}.pdf`);
        }
    };

    return (
        <AdminAuthenticatedLayout user={auth.user}>
            <div className="container mx-auto mt-10 pb-10">
                <div className="flex items-center justify-between px-5">
                    <Link href="/reports">
                        <button className="mb-4 rounded flex items-center text-lg font-bold">
                            <IoIosArrowBack /> Back
                        </button>
                    </Link>
                    <DownloadReport onSelect={handleDownload} />
                </div>
                <ReportTable
                    title={reportData.title}
                    columns={reportData.columns}
                    data={rentals}
                />
            </div>
        </AdminAuthenticatedLayout>
    );
};

export default ReportStatus;
