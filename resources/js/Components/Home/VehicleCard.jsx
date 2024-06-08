// VehicleCard.js
import { BsPeopleFill } from "react-icons/bs";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const VehicleCard = ({ image, name, status, capacity, pricePerDay }) => {
    const getStatusColor = () => {
        switch (status.toLowerCase()) {
            case "available":
                return "bg-green-500";
            case "rented":
                return "bg-gray-900";
            case "unavailable":
                return "bg-red-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <Card className="mt-6 max-w-s border-2 border-gray-200 ">
            <CardHeader className="relative h-56 !shadow-[0px] border-b-2 border-gray-200 bg-gray-100 !m-0 ">
                <img
                    src={image ? `/storage/${image}` : "images/default.png"}
                    alt="card-image"
                    className="p-6"
                />
            </CardHeader>
            <CardBody className="!px-3 ">
                <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mt-[-15px]  "
                >
                    {name}
                </Typography>
            </CardBody>
            <CardFooter className=" mt-[-15px] !px-3 pt-0">
                <div className="flex justify-between  items-center">
                    <div
                        className={` ${getStatusColor()} text-white px-2 py-1 rounded-lg`}
                    >
                        <span className="text-xs">{status}</span>
                    </div>
                    <div className="text-sm flex items-center text-gray-500 gap-1">
                        <BsPeopleFill />
                        {capacity}
                    </div>
                    <div className="text-sm font-bold">TSH {pricePerDay}/D</div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default VehicleCard;
