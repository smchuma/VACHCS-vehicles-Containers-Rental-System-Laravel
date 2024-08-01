import React from "react";
import Modal from "../Modal";
import { useForm } from "@inertiajs/react";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import InputError from "../InputError";

const UpdateEmployee = ({ user, closeModal, open }) => {
    const { data, setData, put, errors } = useForm({
        name: user.name,
        email: user.email || "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("employee.update", user.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Modal show={open} onClose={closeModal}>
            <div className="p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Update user</h2>
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
                                {/* <TextInput
                                    type="text"
                                    name="manufacture"
                                    value={data.email}


                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
                                /> */}
                                <h1 className="mt-3">{data.email}</h1>
                            </div>
                        </div>
                        <div>
                            <InputLabel className="block mb-2">
                                Password
                            </InputLabel>
                            <div className="flex flex-col">
                                <TextInput
                                    type="password"
                                    name="manufacture"
                                    value={data.password}
                                    placeholder="Update Password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full p-2 border border-gray-300 rounded"
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

export default UpdateEmployee;
