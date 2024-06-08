import RentalTable from "@/Components/Rentals/RentalTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const RentalOrders = ({ auth, rentals }) => {
    const { user } = auth;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Rental
                </h2>
            }
        >
            <Head title="Rentals" />
            <RentalTable rentals={rentals} role={user.role} />
        </AuthenticatedLayout>
    );
};

export default RentalOrders;
