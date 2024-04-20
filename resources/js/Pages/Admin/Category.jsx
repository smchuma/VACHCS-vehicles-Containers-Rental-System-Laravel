import CategoryBody from "@/Components/Category/CategoryBody";
import CategoryHeader from "@/Components/Category/CategoryHeader";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";

const AdminDashboard = () => {
    return (
        <AdminAuthenticatedLayout>
            <main className="container">
                <CategoryHeader />
                <CategoryBody />
            </main>
        </AdminAuthenticatedLayout>
    );
};

export default AdminDashboard;
