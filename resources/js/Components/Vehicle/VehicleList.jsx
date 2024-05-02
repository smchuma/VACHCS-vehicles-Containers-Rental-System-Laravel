import React from "react";
import VehicleCard from "./VehicleCard";
import { Link } from "@inertiajs/react";

const VehicleList = ({ vehicles }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-12 ">
            {vehicles.map((vehicle) => (
                <Link href="">
                    <VehicleCard
                        key={vehicle.id}
                        image={vehicle.image}
                        name={vehicle.name}
                        status={vehicle.status}
                        capacity={vehicle.capacity}
                        pricePerDay={vehicle.price_per_day}
                    />
                </Link>
            ))}
        </div>
    );
};

export default VehicleList;