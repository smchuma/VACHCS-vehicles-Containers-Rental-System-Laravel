import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MapComp from "@/Components/MapPage/MapComp";

const center = {
    lat: -6.7924,
    lng: 39.2083,
};

const TANZANIA_REGIONS = [
    { latMin: -3.5, latMax: -3.0, lngMin: 36.5, lngMax: 37.0 }, // Arusha
    { latMin: -6.25, latMax: -5.75, lngMin: 35.5, lngMax: 36.0 }, // Dodoma
    { latMin: -9.0, latMax: -8.5, lngMin: 33.4, lngMax: 34.0 }, // Mbeya
    { latMin: -7.0, latMax: -6.5, lngMin: 37.5, lngMax: 38.0 }, // Morogoro
    { latMin: -6.95, latMax: -6.85, lngMin: 39.23, lngMax: 39.27 }, // Temeke
    { latMin: -6.78, latMax: -6.72, lngMin: 39.22, lngMax: 39.25 }, // Sinza
];

const generateRandomCoordinates = () => {
    const region =
        TANZANIA_REGIONS[Math.floor(Math.random() * TANZANIA_REGIONS.length)];
    const lat = Math.random() * (region.latMax - region.latMin) + region.latMin;
    const lng = Math.random() * (region.lngMax - region.lngMin) + region.lngMin;
    return { lat, lng };
};

const Tracking = ({ auth, rentals }) => {
    const [search, setSearch] = useState("");
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        // Generate random coordinates for each vehicle
        const vehiclesWithCoordinates = rentals.data.map((rental) => ({
            id: rental.id,
            name: rental.vehicle.name,
            number: rental.vehicle.Vehicle_No,
            image: rental.vehicle.image,
            ...generateRandomCoordinates(),
        }));
        setVehicles(vehiclesWithCoordinates);
    }, [rentals]);

    const handleVehicleClick = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <h1 className="mt-5 text-md font-bold"> Track vehicles location</h1>
            <main className="mx-5 flex flex-col h-screen">
                <div className="mt-6 flex overflow-x-auto space-x-4">
                    {vehicles.map((vehicle) => (
                        <div
                            key={vehicle.id}
                            className="p-4 rounded-md bg-gray-50 flex-shrink-0 shadow-md flex cursor-pointer"
                            onClick={() => handleVehicleClick(vehicle)}
                            style={{ minWidth: "200px" }}
                        >
                            <img
                                src={`/storage/${vehicle.image}`}
                                alt=""
                                className="mr-2 h-10 object-contain rounded-t-lg"
                            />
                            <div className="f">
                                <h2 className="font-bold text-xs">
                                    {vehicle.name}
                                </h2>
                                <h2 className="font-bold text-sm">
                                    {vehicle.number}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 mt-6">
                    <MapComp
                        selectedVehicle={selectedVehicle}
                        center={center}
                    />
                </div>
            </main>
        </AuthenticatedLayout>
    );
};

export default Tracking;
