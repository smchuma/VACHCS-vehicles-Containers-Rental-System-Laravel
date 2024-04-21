import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { useState } from "react";

const Vehicles = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    return (
        <AdminAuthenticatedLayout>
            <div>Customers</div>
            <PrimaryButton onClick={openModal}>open</PrimaryButton>
            <Modal show={open} onClose={closeModal}>
                Hello
            </Modal>
        </AdminAuthenticatedLayout>
    );
};

export default Vehicles;
