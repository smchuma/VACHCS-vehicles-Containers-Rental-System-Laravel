import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import carIconUrl from "../../../../public/images/car.png";

const carIcon = new L.Icon({
    iconUrl: carIconUrl,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

const VehicleMarker = ({ vehicle }) => {
    const map = useMap();

    useEffect(() => {
        if (vehicle) {
            map.flyTo([vehicle.lat, vehicle.lng], 9);
        }
    }, [vehicle, map]);

    return (
        vehicle && (
            <Marker position={[vehicle.lat, vehicle.lng]} icon={carIcon}>
                <Popup>{vehicle.name}</Popup>
            </Marker>
        )
    );
};

const MapComp = ({ selectedVehicle, center }) => {
    return (
        <MapContainer
            center={center}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <VehicleMarker vehicle={selectedVehicle} icon={carIcon} />
        </MapContainer>
    );
};

export default MapComp;
