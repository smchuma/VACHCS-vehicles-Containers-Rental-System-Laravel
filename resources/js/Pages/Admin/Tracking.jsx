import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AdminAuthenticatedLayout from "@/Layouts/AdminAuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import MapComp from "@/Components/MapPage/MapComp";
import TextInput from "@/Components/TextInput";

const center = {
    lat: -6.7924,
    lng: 39.2083, // Centered on Dar es Salaam for initial load
};

const vehicles = [
    { id: 1, name: "Toyota", lat: -6.7924, lng: 39.2083 }, // Dar es Salaam
    { id: 2, name: "Honda", lat: -3.3869, lng: 36.6822 }, // Arusha
    { id: 3, name: "Nissan", lat: -10.3119, lng: 40.1793 }, // Mtwara
    { id: 4, name: "Suzuki", lat: -2.5164, lng: 32.9176 }, // Mwanza
];

const Tracking = () => {
    const [search, setSearch] = useState("");
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const handleSearch = () => {
        const vehicle = vehicles.find(
            (v) => v.name.toLowerCase() == search.toLowerCase()
        );
        setSelectedVehicle(vehicle);
    };

    return (
        <AdminAuthenticatedLayout>
            <main>
                <div className="flex justify-end">
                    <TextInput
                        type="text"
                        placeholder="Enter vehicle name"
                        className="w-2/6"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <PrimaryButton onClick={handleSearch}>Search</PrimaryButton>
                </div>
                <div className="mt-6">
                    <MapComp
                        selectedVehicle={selectedVehicle}
                        center={center}
                    />
                </div>
                <h1 className="text-center mt-5 font-bold italic">
                    Track your vehicle location
                </h1>
            </main>
        </AdminAuthenticatedLayout>
    );
};

export default Tracking;
