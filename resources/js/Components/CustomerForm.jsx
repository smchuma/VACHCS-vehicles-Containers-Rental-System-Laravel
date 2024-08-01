import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import { differenceInDays, format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import Modal from "./Modal";
import CustomerSearch from "./Customers/CustomerSearch";
import CustomerDetails from "./Customers/CustomerDetails";
import { Button } from "@material-tailwind/react";

const CustomerForm = ({ vehicle }) => {
    const generateRentalOrderNumber = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        return `REN-${randomNumber}`;
    };

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const { data, setData, post, errors } = useForm({
        rental_order_number: generateRentalOrderNumber(),
        customer_id: "",
        start_date: "",
        end_date: "",
        total_price: 0,
        vehicle_id: vehicle.id,
    });

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        if (data.start_date && data.end_date) {
            const startDate = new Date(data.start_date);
            const endDate = new Date(data.end_date);
            if (endDate >= startDate) {
                const calculatedDays = differenceInDays(endDate, startDate) + 1; // Include the start date
                const calculatedTotalPrice =
                    calculatedDays * vehicle.price_per_day;
                setDays(calculatedDays);
                setTotalPrice(calculatedTotalPrice);
                setData("total_price", calculatedTotalPrice);
            } else {
                setDays(0);
                setTotalPrice(0);
                setData("total_price", 0);
                toast.error("End date cannot be before start date");
            }
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
        });
    };

    const today = format(new Date(), "yyyy-MM-dd");

    const handleCustomerSelect = (customer) => {
        setData("customer_id", customer.id);
        setSelectedCustomer(customer);
        closeModal();
    };

    return (
        <>
            <div className="flex justify-end items-center mb-4 px-2 border border-gray-500 rounded-lg w-full">
                <CiSearch size={25} />
                <TextInput
                    type="text"
                    onClick={openModal}
                    placeholder="Click to search customer"
                    className=" border-0 bg-transparent placeholder:text-gray-600 w-full outline-none focus:ring-0"
                />
                <Modal show={open} onClose={closeModal}>
                    <CustomerSearch onSelect={handleCustomerSelect} />
                </Modal>
            </div>
            <CustomerDetails selectedCustomer={selectedCustomer} />
            <form
                onSubmit={handleSubmit}
                className="rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
            >
                <div className="-mx-3 md:flex mb-6">
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
                            min={data.start_date || today}
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
