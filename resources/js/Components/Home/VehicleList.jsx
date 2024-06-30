import React from "react";
import { Link } from "@inertiajs/react";
import VehicleCard from "./VehicleCard";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-8 mb-52 ">
                {vehicles.map((vehicle) => (
                    <Link
                        href={`/vehicles/${vehicle.id}`}
                        key={vehicle.id}
                        onClick={(e) => handleClick(e, vehicle)}
                    >
                        <VehicleCard vehicle={vehicle} />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default VehicleList;
