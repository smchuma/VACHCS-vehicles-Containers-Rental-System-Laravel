import React from "react";
import Modal from "../Modal";
import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

const ApproveRental = ({ rental, closeModal, open, onRowClick }) => {
    const { data, setData, put, errors } = useForm({
        status: rental.status || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("rental.update", rental.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    const statusOptions = ["Pending", "Approved", "Rejected"];
    const filteredStatusOptions = statusOptions.filter(
        (status) => status !== rental.status.toLowerCase()
    );

    return (
        <Modal show={open} onClose={closeModal}>
            <div className="p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Update Rental</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-14">
                        <div>
                            <InputLabel className="block mb-2">
                                Status
                            </InputLabel>
                            <select
                                name="status"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value={rental.status}>
                                    {rental.status}
                                </option>
                                {filteredStatusOptions.map((status) => (
                                    <option key={status} value={status}>
                                        {status.charAt(0).toUpperCase() +
                                            status.slice(1)}
                                    </option>
                                ))}
                            </select>
                            <InputError
                                message={errors.status}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 py-2 border border-gray-300 mr-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ApproveRental;
