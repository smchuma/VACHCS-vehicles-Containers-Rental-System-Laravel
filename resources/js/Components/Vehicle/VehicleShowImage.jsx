import {
    FaBarcode,
    FaCar,
    FaClipboardCheck,
    FaDollarSign,
    FaTag,
} from "react-icons/fa";

const VehicleShowImage = ({ vehicle }) => {
    return (
        <div className="mt-10 max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <img
                src={`/storage/${vehicle.image}`}
                alt={vehicle.name}
                className="w-full h-64 object-contain rounded-t-lg"
            />
            <div className="p-4 grid grid-cols-2 gap-5 mt-10">
                <div className="flex items-center text-sm text-gray-700 font-bold mb-2">
                    <FaBarcode className="mr-2" />
                    <span>Vehicle Number:</span>{" "}
                    <span className="ml-1 font-normal">
                        {vehicle.Vehicle_No}
                    </span>
                </div>
                <div className="flex items-center text-sm text-gray-700 font-bold mb-2">
                    <FaCar className="mr-2" />
                    <span>Name:</span>{" "}
                    <span className="ml-1 font-normal">{vehicle.name}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 font-bold mb-2">
                    <FaDollarSign className="mr-2" />
                    <span>Price per day:</span>{" "}
                    <span className="ml-1 font-normal">
                        {vehicle.price_per_day}
                    </span>
                </div>
                <div className="flex items-center text-sm text-gray-700 font-bold mb-2">
                    <FaTag className="mr-2" />
                    <span>Type:</span>{" "}
                    <span className="ml-1 font-normal">{vehicle.type}</span>
                </div>
                <div className="flex items-center text-sm text-gray-700 font-bold">
                    <FaClipboardCheck className="mr-2" />
                    <span>Status:</span>{" "}
                    <span className="ml-1 font-normal">{vehicle.status}</span>
                </div>
            </div>
        </div>
    );
};

export default VehicleShowImage;
