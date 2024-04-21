import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Dropdown from "../Dropdown";
import { useForm } from "@inertiajs/react";
import Modal from "../Modal";
import { IoCreate } from "react-icons/io5";
import InputLabel from "../InputLabel";
import { IoIosClose } from "react-icons/io";
import TextInput from "../TextInput";
import InputError from "../InputError";
import PrimaryButton from "../PrimaryButton";

const CategoryEdit = ({ item }) => {
    const [open, setOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: item.name,
        slug: item.slug,
        description: item.description,
        image: item.image,
    });

    console.log(item);

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
        <div className="relative ">
            <Dropdown>
                <Dropdown.Trigger>
                    <FaEllipsisVertical className="text-gray-500" />
                </Dropdown.Trigger>

                <Dropdown.Content>
                    <Dropdown.Link>
                        <div
                            className="flex gap-2 items-center text-green-600"
                            onClick={openModal}
                        >
                            <FaEdit />
                            Edit
                        </div>
                        <Modal show={open} onClose={closeModal}>
                            <div>
                                <div className="flex mx-8 my-5 items-center justify-between ">
                                    <div className="flex items-center gap-2">
                                        <IoCreate className="text-xl" />

                                        <h1 className="text-xl font-semibold ">
                                            Edit Category
                                        </h1>
                                    </div>

                                    <IoIosClose
                                        className="text-2xl hover:scale-150 transition "
                                        onClick={closeModal}
                                    />
                                </div>
                                <form onSubmit={submit} className="m-8">
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Name"
                                        />

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
                                        <InputLabel
                                            htmlFor="slug"
                                            value="Slug"
                                        />

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
                                        <InputLabel
                                            htmlFor="image"
                                            value="Image"
                                        />

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
                    </Dropdown.Link>
                    <Dropdown.Link method="post" as="button">
                        <div className="flex gap-2 text-red-500">
                            <FaTrashAlt />
                            Delete
                        </div>{" "}
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
};

export default CategoryEdit;
