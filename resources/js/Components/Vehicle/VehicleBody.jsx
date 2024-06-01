import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import VehicleTable from "./VehicleTable";
import UpdateForm from "./UpdateForm";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import UpdateImage from "./UpdateImage";

const VehicleBody = () => {
    const { vehicle } = usePage().props;
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [vehicleToDelete, setVehicleToDelete] = useState(null);
    const [openUpdateImage, setOpenUpdateImage] = useState(false);
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const openUpdateImageModal = () => {
        setOpenUpdateImage(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelectedVehicle(null);
    };

    const closeUpdateImageModal = () => {
        setOpenUpdateImage(false);
        setSelectedVehicle(null);
    };

    const handleRowClick = (vehicle) => {
        setSelectedVehicle(vehicle);
        setOpen(true);
    };

    const handleDeleteClick = (vehicle) => {
        setVehicleToDelete(vehicle);
    };

    const handleCancelDelete = () => {
        setVehicleToDelete(null);
    };

    const handleImageClick = (vehicle) => {
        setSelectedVehicle(vehicle);
        setOpenUpdateImage(true);
    };

    return (
        <div>
            <div className="mt-6 md:flex md:items-center md:justify-end"></div>
            {vehicle && (
                <VehicleTable
                    vehicle={vehicle}
                    onRowClick={handleRowClick}
                    onDeleteClick={handleDeleteClick}
                    onImageClick={handleImageClick}
                />
            )}
            {selectedVehicle && (
                <UpdateForm
                    vehicle={selectedVehicle}
                    openModal={openModal}
                    closeModal={closeModal}
                    open={open}
                />
            )}
            {vehicleToDelete && (
                <DeleteConfirmationDialog
                    vehicle={vehicleToDelete}
                    onCancel={handleCancelDelete}
                />
            )}
            {selectedVehicle && (
                <UpdateImage
                    vehicle={selectedVehicle}
                    open={openUpdateImage}
                    closeModal={closeUpdateImageModal}
                />
            )}
        </div>
    );
};

export default VehicleBody;
