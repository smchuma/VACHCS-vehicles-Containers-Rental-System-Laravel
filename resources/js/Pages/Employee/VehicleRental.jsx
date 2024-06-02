import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const VehicleRental = ({ auth }) => {
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
            <div className="mt-10 ">
                <h1>Rentals</h1>
            </div>
        </AuthenticatedLayout>
    );
};

export default VehicleRental;
