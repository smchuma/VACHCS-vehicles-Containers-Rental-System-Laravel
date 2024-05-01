import React from "react";
import VehicleCard from "./VehicleCard";
import { Link } from "@inertiajs/react";

const VehicleList = ({ v }) => {
    const vehicles = [
        {
            id: 1,
            name: "Toyota Corolla",
            imageUrl: "https://via.placeholder.com/300x200",
            status: "Available",
            capacity: "5 seats",
            pricePerDay: 50,
        },
        {
            id: 2,
            name: "Honda Civic",
            imageUrl: "https://via.placeholder.com/300x200",
            status: "Rented",
            capacity: "4 seats",
            pricePerDay: 60,
        },
        {
            id: 3,
            name: "Ford Mustang",
            imageUrl: "https://via.placeholder.com/300x200",
            status: "Unavailable",
            capacity: "2 seats",
            pricePerDay: 70,
        },
    ];
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-10 cursor-pointer ">
            {vehicles.map((vehicle) => (
                <Link href="">
                    <VehicleCard
                        key={vehicle.id}
                        imageUrl={vehicle.imageUrl}
                        name={vehicle.name}
                        status={vehicle.status}
                        capacity={vehicle.capacity}
                        pricePerDay={vehicle.pricePerDay}
                    />
                </Link>
            ))}
        </div>
    );
};

export default VehicleList;
