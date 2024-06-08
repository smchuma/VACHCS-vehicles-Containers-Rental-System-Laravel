import RentalTable from "@/Components/Rentals/RentalTable";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";

const Rentals = ({ auth, rentals }) => {
    const { user } = auth;
    return (
        <AdminAuthenticatedLayout>
            <RentalTable rentals={rentals} role={user.role} />
        </AdminAuthenticatedLayout>
    );
};

export default Rentals;
