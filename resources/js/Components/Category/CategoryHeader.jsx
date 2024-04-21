import { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Modal from "../Modal";
import { useForm } from "@inertiajs/react";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";
import InputError from "../InputError";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoCreate } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const CategoryHeader = () => {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        slug: "",
        description: "",
        image: "",
    });

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("category.store", { preserveScroll: true }), {
                onSuccess: () => {
                    reset();
                    closeModal();
                },
            });
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="sm:flex sm:items-center sm:justify-between">
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#2fbe51",
                        color: "#fff",
                    },
                    success: {
                        duration: 5000,
                        theme: {
                            primary: "green",
                            secondary: "black",
                        },
                    },
                }}
            />
            <div>
                <div className="flex items-center gap-x-3">
                    <h2 className="text-2xl font-medium text-gray-800 ">
                        Available Categories
                    </h2>
                </div>
            </div>

            <div className="flex items-center mt-4 gap-x-3">
                <PrimaryButton
                    onClick={openModal}
                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 "
                >
                    <IoIosAdd className="w-5 h-5" />

                    <span>Add Category</span>
                </PrimaryButton>
                <Modal show={open} onClose={closeModal}>
                    <div>
                        <div className="flex mx-8 my-5 items-center justify-between ">
                            <div className="flex items-center gap-2">
                                <IoCreate className="text-xl" />

                                <h1 className="text-xl font-semibold ">
                                    Create Category
                                </h1>
                            </div>

                            <IoIosClose
                                className="text-2xl hover:scale-150 transition "
                                onClick={closeModal}
                            />
                        </div>
                        <form onSubmit={submit} className="m-8">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    placeholder="Enter Name"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="slug" value="Slug" />

                                <TextInput
                                    id="slug"
                                    type="text"
                                    name="slug"
                                    placeholder="Enter Slug"
                                    value={data.slug}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("slug", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.slug}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="image" value="Image" />

                                <TextInput
                                    id="image"
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    value={data.image}
                                    className="mt-1 block w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 text-base leading-normal focus:outline-none focus:ring focus:border-blue-500"
                                    onChange={(e) =>
                                        setData("image", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-8">
                                <PrimaryButton
                                    className="w-full"
                                    disabled={processing}
                                >
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default CategoryHeader;
