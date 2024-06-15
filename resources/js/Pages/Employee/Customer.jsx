import CustomerHeader from "@/Components/Customers/CustomerHeader";
import CustomersTable from "@/Components/Customers/CustomersTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";

const Customer = ({ auth }) => {
    const { customers } = usePage().props;
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleRowClick = (customer) => {
        setSelectedVehicle(customer);
        setOpen(true);
    };

    const handleDeleteClick = (customer) => {
        setVehicleToDelete(customer);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Customers" />
            <CustomerHeader />
            <div className=" ">
                {!customers.data && (
                    <div className="flex justify-center items-center h-64">
                        <h1 className="text-2xl text-gray-400">
                            No Customers Found
                        </h1>
                    </div>
                )}
                {customers && (
                    <CustomersTable
                        customer={customers}
                        onRowClick={handleRowClick}
                        onDeleteClick={handleDeleteClick}
                    />
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Customer;
