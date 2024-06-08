import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import VehicleTable from "./VehicleTable";
import UpdateForm from "./UpdateForm";
import UpdateImage from "./UpdateImage";
import Swal from "sweetalert2";

const VehicleBody = () => {
    const { vehicle } = usePage().props;
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [openUpdateImage, setOpenUpdateImage] = useState(false);
    const [open, setOpen] = useState(false);
    const { delete: destroy } = useForm();

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
        Swal.fire({
            title: `Vehicle Number: ${vehicle.Vehicle_No}`,
            text: `Are you sure you want to delete this vehicle?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("vehicle.destroy", vehicle.id), {
                    preserveScroll: true,
                });
                Swal.fire(
                    "Deleted!",
                    "The vehicle has been deleted.",
                    "success"
                );
            }
        });
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
            \
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
