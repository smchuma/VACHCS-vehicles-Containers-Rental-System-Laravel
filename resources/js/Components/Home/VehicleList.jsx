import React from "react";
import { Link } from "@inertiajs/react";
import VehicleCard from "./VehicleCard";

const VehicleList = ({ vehicles, role }) => {
    const handleClick = (e, vehicle) => {
        if (vehicle.status === "Rented") {
            e.preventDefault();
            alert("This Vehicle is Rented");
        } else if (vehicle.status === "Under Maintenance") {
            e.preventDefault();
            alert("This vehicle is under maintenance");
        }
    };

    const filteredVehicles =
        role === 2
            ? vehicles.filter((vehicle) => vehicle.status === "Available")
            : vehicles;

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-8 mb-52 ">
                {filteredVehicles.map((vehicle) => (
                    <Link
                        href={`/vehicles/${vehicle.id}`}
                        key={vehicle.id}
                        onClick={(e) => handleClick(e, vehicle)}
                    >
                        <VehicleCard vehicle={vehicle} />
                    </Link>
                ))}
            </div>
            {filteredVehicles.length === 0 && (
                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-800">
                        There are no available vehicles at the moment.
                    </p>
                </div>
            )}
        </>
    );
};

export default VehicleList;
