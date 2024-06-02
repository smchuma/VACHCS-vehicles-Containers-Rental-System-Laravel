import React from "react";
import VehicleCard from "./VehicleCard";
import { Link } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";

const VehicleList = ({ vehicles }) => {
    const handleClick = (e, vehicle) => {
        if (vehicle.status === "Rented") {
            e.preventDefault();
            toast("This Vehicle is Rented");
        } else if (vehicle.status === "Under Maintenance") {
            e.preventDefault();
            toast("This vehicle is under maintenance");
        }
    };
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#1a0e04",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-8 ">
                {vehicles.map((vehicle) => (
                    <Link
                        href={`/vehicles/${vehicle.id}`}
                        key={vehicle.id}
                        onClick={(e) => handleClick(e, vehicle)}
                    >
                        <VehicleCard
                            image={vehicle.image}
                            name={vehicle.name}
                            status={vehicle.status}
                            capacity={vehicle.capacity}
                            pricePerDay={vehicle.price_per_day}
                        />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default VehicleList;
