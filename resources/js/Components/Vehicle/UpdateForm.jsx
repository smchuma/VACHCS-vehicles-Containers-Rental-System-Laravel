import React from "react";
import Modal from "../Modal";
import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

const UpdateForm = ({ vehicle, closeModal, open }) => {
    const { data, setData, put, errors } = useForm({
        name: vehicle.name,
        type: vehicle.type || "",
        capacity: vehicle.capacity || "",
        status: vehicle.status || "",
        price_per_day: vehicle.price_per_day || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("vehicle.update", vehicle.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    const statusOptions = ["available", "rented", "under maintenance"];
    const filteredStatusOptions = statusOptions.filter(
        (status) => status !== vehicle.status.toLowerCase()
    );

    return (
        <Modal show={open} onClose={closeModal}>
            <div className="p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Update Vehicle</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <InputLabel className="block mb-2">Name</InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">Type</InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="type"
                                    value={data.type}
                                    onChange={(e) =>
                                        setData("type", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.type}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">
                                Capacity
                            </InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="capacity"
                                    value={data.capacity}
                                    onChange={(e) =>
                                        setData("capacity", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.capacity}
                                    className="mt-2"
                                />
                            </div>
                        </div>
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
                                <option value={vehicle.status}>
                                    {vehicle.status}
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
                        <div>
                            <InputLabel className="block mb-2">
                                Price Per Day
                            </InputLabel>
                            <div className="flex items-center">
                                <span className="inline-block p-2 bg-gray-200 border border-r-0 border-gray-300 rounded-l">
                                    TZS
                                </span>
                                <div className="flex flex-col w-full">
                                    <TextInput
                                        type="text"
                                        name="price_per_day"
                                        value={data.price_per_day}
                                        onChange={(e) =>
                                            setData(
                                                "price_per_day",
                                                e.target.value
                                            )
                                        }
                                        className="w-full p-2 border border-gray-300 rounded-r"
                                    />
                                    <InputError
                                        message={errors.price_per_day}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
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

export default UpdateForm;
