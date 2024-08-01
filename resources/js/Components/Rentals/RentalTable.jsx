import { useForm, usePage } from "@inertiajs/react";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEnvelope, FaPencilAlt, FaPrint, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "jspdf-autotable"; // Import jsPDF autotable plugin

const RentalTable = ({ rentals, role, onRowClick }) => {
    const [filteredData, setFilteredData] = useState(rentals.data);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(rentals.current_page);

    const { post, delete: destroy } = useForm();

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
    const handleDownloadReceipt = (rental) => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.text("Rental Receipt", 105, 40, { align: "center" });

        // Subtitle
        doc.setFontSize(12);
        doc.setTextColor(60);
        doc.text(
            `Your rental request for the vehicle: ${rental.vehicle.name} has been approved.`,
            105,
            50,
            { align: "center" }
        );
        doc.text(
            "Thank you for renting with us. Here are the details of your rental:",
            105,
            60,
            { align: "center" }
        );

        // Table
        doc.autoTable({
            startY: 70,
            head: [["Field", "Details"]],
            body: [
                ["Rental Number", rental.rental_order_number],
                ["Vehicle Name", rental.vehicle.name],
                ["Customer Name", rental.customer.name],
                ["Start Date", rental.start_date],
                ["End Date", rental.end_date],
                ["Total Price", rental.total_price],
            ],
            theme: "striped",
            headStyles: { fillColor: [41, 128, 185] },
            styles: { fontSize: 12 },
        });

        // Bank Details
        const finalY = doc.autoTable.previous.finalY; // Get the Y position of the last table row
        doc.setFontSize(12);
        doc.setTextColor(40);
        doc.text(
            "Please make the payment to the following bank details:",
            14,
            finalY + 20
        );
        doc.text("Use: 0152476335300 CRDB to pay the bill", 14, finalY + 30);

        // Footer
        doc.setFontSize(12);
        doc.setTextColor(40);
        doc.text("Thanks,", 105, finalY + 50, {
            align: "center",
        });
        doc.text("VHCS", 105, finalY + 60, {
            align: "center",
        });

        // Save the PDF
        doc.save(`receipt_${rental.rental_order_number}.pdf`);
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
                                    {rental.status === "Approved" && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDownloadReceipt(rental);
                                            }}
                                        >
                                            <FaPrint
                                                className="text-blue-500 mx-3"
                                                size={12}
                                            />
                                        </button>
                                    )}
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
