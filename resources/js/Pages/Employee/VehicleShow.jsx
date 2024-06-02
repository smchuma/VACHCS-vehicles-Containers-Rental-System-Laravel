import React, { useState, useEffect } from "react";
import { usePage, Link, useForm } from "@inertiajs/react";
import { differenceInDays, format } from "date-fns";

const VehicleShow = () => {
    const { props } = usePage();
    const { vehicle } = props;

    const { data, setData, post, processing, errors } = useForm({
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        customer_address: "",
        customer_city: "",
        start_date: "",
        end_date: "",
        total_price: 0,
        vehicle_id: vehicle.id,
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        if (data.start_date && data.end_date) {
            const startDate = new Date(data.start_date);
            const endDate = new Date(data.end_date);
            const calculatedDays = differenceInDays(endDate, startDate) + 1; // Include the start date
            const calculatedTotalPrice = calculatedDays * vehicle.price_per_day;
            setDays(calculatedDays);
            setTotalPrice(calculatedTotalPrice);
            setData("total_price", calculatedTotalPrice);
        } else {
            setDays(0);
            setTotalPrice(0);
            setData("total_price", 0);
        }
    }, [data.start_date, data.end_date, vehicle.price_per_day]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/rental", {
            preserveScroll: true,
            onSuccess: () => {
                // Handle success
            },
            onError: () => {
                // Handle error
            },
        });
    };

    const today = format(new Date(), "yyyy-MM-dd");

    return (
        <div className="container mx-auto mt-10 px-8">
            <Link href="/" className="text-blue-500 mb-4 inline-block">
                Back
            </Link>
            <div className="flex gap-10">
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <strong>Name:</strong> {vehicle.name}
                        </div>
                        <div>
                            <strong>Status:</strong> {vehicle.status}
                        </div>
                        <div>
                            <strong>Capacity:</strong> {vehicle.capacity}
                        </div>
                        <div>
                            <strong>Price per Day:</strong>{" "}
                            {vehicle.price_per_day}
                        </div>
                    </div>
                    <img
                        src={`/storage/${vehicle.image}`}
                        alt={vehicle.name}
                        className="w-full"
                    />
                </div>
                <div className="flex-1">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Customer Name
                            </label>
                            <input
                                type="text"
                                value={data.customer_name}
                                onChange={(e) =>
                                    setData("customer_name", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.customer_name && (
                                <div className="text-red-500">
                                    {errors.customer_name}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Customer Email
                            </label>
                            <input
                                type="email"
                                value={data.customer_email}
                                onChange={(e) =>
                                    setData("customer_email", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.customer_email && (
                                <div className="text-red-500">
                                    {errors.customer_email}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Customer Phone
                            </label>
                            <input
                                type="text"
                                value={data.customer_phone}
                                onChange={(e) =>
                                    setData("customer_phone", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.customer_phone && (
                                <div className="text-red-500">
                                    {errors.customer_phone}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Customer Address
                            </label>
                            <input
                                type="text"
                                value={data.customer_address}
                                onChange={(e) =>
                                    setData("customer_address", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.customer_address && (
                                <div className="text-red-500">
                                    {errors.customer_address}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Customer City
                            </label>
                            <input
                                type="text"
                                value={data.customer_city}
                                onChange={(e) =>
                                    setData("customer_city", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.customer_city && (
                                <div className="text-red-500">
                                    {errors.customer_city}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                Start Date
                            </label>
                            <input
                                type="date"
                                value={data.start_date}
                                min={today}
                                onChange={(e) =>
                                    setData("start_date", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.start_date && (
                                <div className="text-red-500">
                                    {errors.start_date}
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">
                                End Date
                            </label>
                            <input
                                type="date"
                                value={data.end_date}
                                min={today}
                                onChange={(e) =>
                                    setData("end_date", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.end_date && (
                                <div className="text-red-500">
                                    {errors.end_date}
                                </div>
                            )}
                        </div>
                        <div className="mb-4 flex gap-5">
                            <div className="div">
                                <h1>Number of days</h1>
                                <p>{days}</p>
                            </div>
                            <div className="div">
                                <h1>Total Price</h1>
                                <p>{totalPrice}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                                disabled={processing}
                            >
                                Submit
                            </button>
                            <Link
                                href="/"
                                className="bg-gray-500 text-white py-2 px-4 rounded"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VehicleShow;
