import EmployeeBody from "@/Components/Employee/EmployeeBody";
import EmployeeHeader from "@/Components/Employee/EmployeeHeader";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";

const Vehicles = () => {
    return (
        <AdminAuthenticatedLayout>
            <main className="container">
                <EmployeeHeader />
                <EmployeeBody />
            </main>
        </AdminAuthenticatedLayout>
    );
};

export default Vehicles;
