import { usePage } from "@inertiajs/react";
import VehicleTable from "./VehicleTable";

const VehicleBody = () => {
    const { vehicle } = usePage().props;

    return (
        <div>
            <div className="mt-6 md:flex md:items-center md:justify-end"></div>

            {vehicle && <VehicleTable vehicle={vehicle} />}
        </div>
    );
};

export default VehicleBody;
