import AvailableVehiclesGraph from "@/Components/Dashboard/AvailableVehiclesGraph";
import RentalLineGraph from "@/Components/Dashboard/RentalLineGraph";
import UpcomingRentals from "@/Components/Dashboard/UpcomingRentals";
import RentalStatusCards from "@/Components/Rentals/RentalStatusCards";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";

const AdminDashboard = ({ rentals, vehicles }) => {
    const statusCounts = rentals.reduce(
        (counts, rental) => {
            if (rental.status === "Pending") {
                counts.pending += 1;
            } else if (rental.status === "Approved") {
                counts.approved += 1;
            } else if (rental.status === "Rejected") {
                counts.rejected += 1;
            }
            return counts;
        },
        { pending: 0, approved: 0, rejected: 0 }
    );

    console.log(vehicles);

    return (
        <AdminAuthenticatedLayout>
            <main>
                <RentalStatusCards
                    pendingCount={statusCounts.pending}
                    approvedCount={statusCounts.approved}
                    rejectedCount={statusCounts.rejected}
                />
                <div className="flex flex-col md:flex-row mt-5 ">
                    <div className="flex-1 p-2">
                        <AvailableVehiclesGraph vehicles={vehicles} />
                    </div>
                    <div className="flex-1 p-2">
                        <RentalLineGraph rentals={rentals} />
                    </div>
                </div>
                <UpcomingRentals rentals={rentals} />
            </main>
        </AdminAuthenticatedLayout>
    );
};

export default AdminDashboard;
