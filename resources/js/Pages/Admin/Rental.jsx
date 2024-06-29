import ApproveRental from "@/Components/Rentals/ApproveRental";
import RentalTable from "@/Components/Rentals/RentalTable";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { useState } from "react";

const Rentals = ({ auth, rentals }) => {
    const [open, setOpen] = useState(false);
    const [selectedRental, setSelectedRental] = useState(null);

    const handleRowClick = (rental) => {
        setSelectedRental(rental);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelectedVehicle(null);
    };

    const openModal = () => {
        setOpen(true);
    };

    const { user } = auth;
    return (
        <AdminAuthenticatedLayout>
            <RentalTable
                rentals={rentals}
                role={user.role}
                onRowClick={handleRowClick}
            />
            {selectedRental && (
                <ApproveRental
                    rental={selectedRental}
                    openModal={openModal}
                    closeModal={closeModal}
                    open={open}
                />
            )}
        </AdminAuthenticatedLayout>
    );
};

export default Rentals;
