import { useForm } from "@inertiajs/react";
import Modal from "../Modal";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import InputError from "../InputError";

const UpdateCustomer = ({ customer, closeModal, open }) => {
    const { data, setData, put, errors } = useForm({
        id_number: customer.id_number || "",
        name: customer.name || "",
        email: customer.email || "",
        phone_number: customer.phone_number || "",
        address: customer.address || "",
        city: customer.city || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("customer.update", customer.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Modal show={open} onClose={closeModal}>
            <div className="p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Update Customer</h2>
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
                            <InputLabel className="block mb-2">
                                Email
                            </InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">
                                Phone Number
                            </InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="phone_number"
                                    value={data.phone_number}
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.phone_number}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">
                                License Number
                            </InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="id_number"
                                    value={data.id_number}
                                    onChange={(e) =>
                                        setData("id_number", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.id_number}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">City</InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="city"
                                    value={data.city}
                                    onChange={(e) =>
                                        setData("city", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.city}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">
                                Address
                            </InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="text"
                                    name="id_number"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <InputError
                                    message={errors.address}
                                    className="mt-2"
                                />
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

export default UpdateCustomer;
