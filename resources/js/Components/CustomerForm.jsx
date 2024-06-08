import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import { Button } from "@material-tailwind/react";
import { Link, useForm } from "@inertiajs/react";
import { differenceInDays, format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

const CustomerForm = ({ vehicle }) => {
    const generateRentalOrderNumber = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        return `REN-${randomNumber}`;
    };

    const { data, setData, post, processing, errors } = useForm({
        rental_order_number: generateRentalOrderNumber(),
        customer_name: "",
        customer_email: "",
        customer_phone: "",
        customer_address: "",
        customer_city: "",
        customer_id_number: "",
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
                toast.success("Rental order created successfully");
            },
            onError: () => {
                // Handle error
                toast.error("An error occurred. Please try again.");
            },
        });
    };

    const today = format(new Date(), "yyyy-MM-dd");

    return (
        <>
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
                                setData("customer_name", e.target.value)
                            }
                            placeholder="Enter the name"
                        />
                        {errors.customer_name && (
                            <div className="text-red-500 text-xs mb-2">
                                {errors.customer_name}
                            </div>
                        )}
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
                                setData("customer_email", e.target.value)
                            }
                        />
                        {errors.customer_email && (
                            <div className="text-red-500 text-xs my-2">
                                {errors.customer_email}
                            </div>
                        )}
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
                                setData("customer_phone", e.target.value)
                            }
                        />
                        {errors.customer_phone && (
                            <div className="text-red-500 text-xs mb-2">
                                {errors.customer_phone}
                            </div>
                        )}
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
                                setData("customer_id_number", e.target.value)
                            }
                        />
                        {errors.customer_id_number && (
                            <div className="text-red-500 text-xs my-2">
                                {errors.customer_id_number}
                            </div>
                        )}
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
                                setData("customer_address", e.target.value)
                            }
                        />
                        {errors.customer_address && (
                            <div className="text-red-500 text-xs mb-2">
                                {errors.customer_address}
                            </div>
                        )}
                    </div>
                </div>

                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
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
                                setData("customer_city", e.target.value)
                            }
                        />
                        {errors.customer_city && (
                            <div className="text-red-500 text-xs mb-2">
                                {errors.customer_city}
                            </div>
                        )}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <InputLabel
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            for="grid-start-date"
                            required
                        >
                            Start date
                        </InputLabel>
                        <TextInput
                            type="date"
                            className="w-full border rounded p-2"
                            min={today}
                            value={data.start_date}
                            onChange={(e) =>
                                setData("start_date", e.target.value)
                            }
                        />
                        {errors.start_date && (
                            <div className="text-red-500 text-xs my-2">
                                {errors.start_date}
                            </div>
                        )}
                    </div>
                    <div className="md:w-1/2 px-3">
                        <InputLabel
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            for="grid-end-date"
                            required
                        >
                            End Date
                        </InputLabel>
                        <TextInput
                            type="date"
                            className="w-full border rounded p-2"
                            min={today}
                            value={data.end_date}
                            onChange={(e) =>
                                setData("end_date", e.target.value)
                            }
                        />
                        {errors.end_date && (
                            <div className="text-red-500 text-xs my-2">
                                {errors.end_date}
                            </div>
                        )}
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                        <InputLabel
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            for="grid-number-of-days"
                        >
                            Number of Days
                        </InputLabel>
                        <TextInput
                            className="bg-gray-200 placeholder:text-sm appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                            id="grid-number-of-days"
                            type="text"
                            value={days}
                            disabled
                        />
                    </div>
                    <div className="md:w-1/2 px-3">
                        <InputLabel
                            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                            for="grid-total-price"
                        >
                            Total Price
                        </InputLabel>
                        <TextInput
                            className="bg-gray-200 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 placeholder:text-sm "
                            id="grid-total-price"
                            type="text"
                            disabled
                            value={totalPrice}
                        />
                    </div>
                </div>

                <div className="flex gap-x-6">
                    <PrimaryButton
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded w-1/3 "
                    >
                        Submit
                    </PrimaryButton>
                    <Link href="/">
                        <Button
                            type="submit"
                            className="bg-transparent border-2 text-black !shadow-sm py-2 px-4 rounded"
                        >
                            Cancel
                        </Button>
                    </Link>
                </div>
            </form>
        </>
    );
};

export default CustomerForm;
