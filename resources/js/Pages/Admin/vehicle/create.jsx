import React from "react";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
import { IoChevronBack } from "react-icons/io5";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Line } from "rc-progress";

const create = ({ categories, statuses }) => {
    const { session } = usePage().props;

    const { data, setData, post, errors, reset } = useForm({
        Vehicle_No: "",
        name: "",
        type: "",
        capacity: "",
        price_per_day: "",
        status: "",
        category_id: "",
        image: "",
    });

    const submit = (e) => {
        e.preventDefault();

        try {
            post(route("vehicle.store", { preserveScroll: true }), {
                onSuccess: () => {
                    reset();
                    toast.success(session.success);
                },
            });
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <AdminAuthenticatedLayout>
            <main className="pt-5">
                <div className="flex gap-1 items-center ">
                    <Link href="/admin/vehicle">
                        <IoChevronBack size={25} />
                    </Link>
                    <h1 className="text-2xl font-semibold">Add a Vehicle </h1>
                </div>

                <form
                    onSubmit={submit}
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    <div className="bg-white p-4 rounded-xl shadow-md  ">
                        <div className="my-3 mb-5 ">
                            <InputLabel
                                htmlFor="Vehicle_No"
                                value="Vehicle No"
                                className="mb-2 font-semibold"
                            />

                            <TextInput
                                id="Vehicle_No"
                                type="text"
                                name="Vehicle_No"
                                value={data.Vehicle_No}
                                className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                placeholder="Enter the Vehicle No"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("Vehicle_No", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.Vehicle_No}
                                className="mt-2"
                            />
                        </div>
                        <div className="my-3 mb-5">
                            <InputLabel
                                htmlFor="name"
                                value="Vehicle Name"
                                className="mb-2 font-semibold"
                            />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                placeholder="Enter the Vehicle Name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="my-3 mb-5">
                            <InputLabel
                                htmlFor="type"
                                value="Vehicle Type"
                                className="mb-2 font-semibold"
                            />

                            <TextInput
                                id="type"
                                type="text"
                                name="type"
                                value={data.type}
                                className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                placeholder="Enter the Vehicle Type"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("type", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.type}
                                className="mt-2"
                            />
                        </div>
                        <div className="my-3 mb-5">
                            <InputLabel
                                htmlFor="capacity"
                                value="Vehicle Capacity"
                                className="mb-2 font-semibold"
                            />

                            <TextInput
                                id="capacity"
                                type="text"
                                name="capacity"
                                value={data.capacity}
                                className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                placeholder="Enter the Vehicle Capacity"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("capacity", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.capacity}
                                className="mt-2"
                            />
                        </div>
                        <div className="my-3 mb-5">
                            <InputLabel
                                htmlFor="image"
                                value="Vehicle Image"
                                className="mb-2 font-semibold"
                            />

                            <TextInput
                                id="image"
                                type="file"
                                name="image"
                                accept="image/*"
                                className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
                            />

                            <InputError
                                message={errors.image}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className=" p-4 rounded-xl  ">
                        <div className="mb-4 bg-white p-5 rounded-xl shadow-md ">
                            <h2 className="text-lg font-semibold mb-4 border-b pb-3 ">
                                Price
                            </h2>
                            <InputLabel
                                htmlFor="price_per_day"
                                value="Price Per Day"
                                className="mb-2 font-semibold"
                            />

                            <TextInput
                                id="capacity"
                                type="text"
                                name="capacity"
                                value={data.price_per_day}
                                className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs mb-5 "
                                placeholder="Enter the Vehicle Capacity"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("price_per_day", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.price_per_day}
                                className="mt-2"
                            />
                        </div>
                        <div className="bg-white p-4 rounded-xl">
                            <div className="my-3 mb-5">
                                <InputLabel
                                    htmlFor="category_id"
                                    value="Vehicle Category"
                                    className="mb-2 font-semibold"
                                />

                                <select
                                    id="category_id"
                                    value={data.category_id}
                                    className="mt-1 block w-full text-gray-600 placeholder:text-xs border-gray-300 rounded-md "
                                    onChange={(e) =>
                                        setData("category_id", e.target.value)
                                    }
                                >
                                    <option value="" className="text-sm">
                                        Select
                                    </option>
                                    {categories.map((category) => (
                                        <option
                                            className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))}
                                </select>

                                <InputError
                                    message={errors.category_id}
                                    className="mt-2"
                                />
                            </div>
                            <div className="my-3 mb-5">
                                <InputLabel
                                    htmlFor="status"
                                    value="Status"
                                    className="mb-2 font-semibold"
                                />

                                <select
                                    id="status"
                                    value={data.status}
                                    className="mt-1 block w-full text-gray-600 placeholder:text-xs border-gray-300 rounded-md "
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="" className="text-sm">
                                        Select
                                    </option>
                                    {statuses.map((st) => (
                                        <option
                                            className="mt-1 block w-full placeholder:text-gray-400 placeholder:text-xs"
                                            key={st}
                                            value={st}
                                        >
                                            {st}
                                        </option>
                                    ))}
                                </select>

                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-20 mt-3 gap-3">
                        <PrimaryButton className="w-32">Add</PrimaryButton>
                        <Link href="/admin/vehicle">
                            <PrimaryButton
                                type="s"
                                className="w-32 bg-transparent border border-black text-black hover:text-white "
                            >
                                CANCEL
                            </PrimaryButton>
                        </Link>
                    </div>
                </form>
            </main>
        </AdminAuthenticatedLayout>
    );
};

export default create;
