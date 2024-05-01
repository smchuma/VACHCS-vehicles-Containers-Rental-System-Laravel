// VehicleCard.js
import { BsPeopleFill } from "react-icons/bs";

const VehicleCard = ({ image, name, status, capacity, pricePerDay }) => {
    const getStatusColor = () => {
        switch (status.toLowerCase()) {
            case "available":
                return "bg-green-500";
            case "rented":
                return "bg-yellow-500";
            case "unavailable":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div className=" bg-white shadow-lg rounded-xl overflow-hidden h-80 ">
            <img
                src={image ? `/storage/${image}` : "images/default.png"}
                alt={name}
                className="w-full h- p-10 object-cover object-center"
            />
            <div className="px-4 py-2">
                <h2 className="text-gray-800 font-semibold text-sm">{name}</h2>
            </div>
            <div className="flex justify-between p-2 items-center border">
                <div
                    className={`col-span-2 ${getStatusColor()} text-white px-2 py-1 rounded-lg`}
                >
                    <span className="text-sm">{status}</span>
                </div>
                <div className="text-sm flex items-center text-gray-500 gap-1">
                    <BsPeopleFill />
                    {capacity}
                </div>
                <div className="text-sm font-bold">{pricePerDay}K/day</div>
            </div>
        </div>
    );
};

export default VehicleCard;
