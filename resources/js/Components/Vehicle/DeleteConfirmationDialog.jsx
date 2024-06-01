import { useForm } from "@inertiajs/react";
import React from "react";

const DeleteConfirmationDialog = ({ vehicle, onCancel }) => {
    const { delete: destroy } = useForm();

    const handleConfirmDelete = (e) => {
        e.preventDefault();
        destroy(route("vehicle.destroy", vehicle.id), {
            preserveScroll: true,
            onSuccess: () => onCancel(),
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Confirm Delete</h2>
                <p>Are you sure you want to delete the vehicle?</p>
                <p>
                    <strong>Name:</strong> {vehicle.name}
                </p>
                <p>
                    <strong>Vehicle No:</strong> {vehicle.Vehicle_No}
                </p>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirmDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationDialog;
