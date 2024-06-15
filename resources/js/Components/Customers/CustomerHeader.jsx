import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoCreate } from "react-icons/io5";
import toast from "react-hot-toast";
import PrimaryButton from "../PrimaryButton";
import Modal from "../Modal";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import InputError from "../InputError";

const CustomerHeader = () => {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        customer_address: "",
        customer_city: "",
        customer_id_number: "",
    });

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/customers", {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                closeModal();
            },
            onError: (errors) => {
                // Handle error
                toast.error("Failed");
            },
        });
    };

    return (
        <div className="sm:flex sm:items-center sm:justify-between pr-10 pt-10">
            <div className="flex items-center mt-4 w-full">
                <div className="w-full flex justify-end">
                    <PrimaryButton
                        onClick={openModal}
                        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 "
                    >
                        <IoIosAdd className="w-5 h-5" />

                        <span>Add Customer</span>
                    </PrimaryButton>
                </div>
                <Modal show={open} onClose={closeModal}>
                    <div>
                        <div className="flex mx-8 my-5 items-center justify-between ">
                            <div className="flex items-center gap-2">
                                <IoCreate className="text-xl" />

                                <h1 className="text-xl font-semibold ">
                                    Add Customer
                                </h1>
                            </div>

                            <IoIosClose
                                className="text-2xl hover:scale-150 transition "
                                onClick={closeModal}
                            />
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
                        >
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <InputLabel
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        for="grid-name"
                                        required
                                    >
                                        Customer Name
                                    </InputLabel>
                                    <TextInput
                                        className="placeholder:text-sm appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                        id="grid-name"
                                        type="text"
                                        value={data.customer_name}
                                        onChange={(e) =>
                                            setData(
                                                "customer_name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter the name"
                                    />
                                    <InputError
                                        message={errors.customer_name}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <InputLabel
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        for="grid-email"
                                        required
                                    >
                                        Customer Email
                                    </InputLabel>
                                    <TextInput
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 placeholder:text-sm"
                                        id="grid-email"
                                        type="email"
                                        placeholder="Enter email"
                                        value={data.customer_email}
                                        onChange={(e) =>
                                            setData(
                                                "customer_email",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.customer_email}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <InputLabel
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        for="grid-phone"
                                        required
                                    >
                                        Customer Phone
                                    </InputLabel>
                                    <TextInput
                                        className="placeholder:text-sm appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                                        id="grid-phone"
                                        type="text"
                                        placeholder="Enter the phone number"
                                        value={data.customer_phone}
                                        onChange={(e) =>
                                            setData(
                                                "customer_phone",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.customer_phone}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <InputLabel
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        for="grid-license-number"
                                        required
                                    >
                                        Customer License Number
                                    </InputLabel>
                                    <TextInput
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 placeholder:text-sm"
                                        id="grid-license-number"
                                        type="text"
                                        placeholder="Enter the license number"
                                        value={data.customer_id_number}
                                        onChange={(e) =>
                                            setData(
                                                "customer_id_number",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.customer_id_number}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-full px-3">
                                    <InputLabel
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        for="grid-address"
                                    >
                                        Customer Address
                                    </InputLabel>
                                    <TextInput
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                                        id="grid-address"
                                        type="text"
                                        placeholder="Enter the address"
                                        value={data.customer_address}
                                        onChange={(e) =>
                                            setData(
                                                "customer_address",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.customer_address}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3 mb-6 md:mb-0">
                                    <InputLabel
                                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                        for="grid-city"
                                    >
                                        City
                                    </InputLabel>
                                    <TextInput
                                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                                        id="grid-city"
                                        type="text"
                                        placeholder="Albuquerque"
                                        value={data.customer_city}
                                        onChange={(e) =>
                                            setData(
                                                "customer_city",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.customer_city}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-x-6 mt-2 justify-end">
                                <PrimaryButton
                                    type="submit"
                                    className="bg-blue-500 text-white py-2 px-4 rounded w-1/3 "
                                >
                                    ADD
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default CustomerHeader;
