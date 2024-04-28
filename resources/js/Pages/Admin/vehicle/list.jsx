import VehicleBody from "@/Components/Vehicle/VehicleBody";
import VehicleHeader from "@/Components/Vehicle/VehicleHeader";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";

const Vehicles = () => {
    return (
        <AdminAuthenticatedLayout>
            <main className="container">
                <VehicleHeader />
                <VehicleBody />
            </main>
        </AdminAuthenticatedLayout>
    );
};

export default Vehicles;
