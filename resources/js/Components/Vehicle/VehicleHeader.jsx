import PrimaryButton from "../PrimaryButton";
import { Link } from "@inertiajs/react";
import { IoIosAdd } from "react-icons/io";

const VehicleHeader = () => {
    return (
        <div className="sm:flex sm:items-center sm:justify-between">
            <div>
                <div className="flex items-center gap-x-3">
                    <h2 className="text-2xl font-medium text-gray-800 ">
                        Available Vehicles
                    </h2>
                </div>
            </div>

            <div className="flex items-center mt-4 gap-x-3">
                <Link href="/admin/vehicle/create">
                    <PrimaryButton className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 ">
                        <IoIosAdd className="w-5 h-5" />

                        <span>Add Vehicle</span>
                    </PrimaryButton>
                </Link>
            </div>
        </div>
    );
};

export default VehicleHeader;
