import { usePage, Link } from "@inertiajs/react";
import EmpNavbar from "@/Components/EmpNavbar";
import CustomerForm from "@/Components/CustomerForm";
import { IoIosArrowBack } from "react-icons/io";
import VehicleShowImage from "@/Components/Vehicle/VehicleShowImage";

const VehicleShow = () => {
    const { props } = usePage();
    const { vehicle, auth } = props;

    return (
        <>
            <EmpNavbar user={auth.user} />
            <div className="container mx-auto mt-5 px-8 pb-10">
                <Link href="/" className="text-blue-500 mb-4 inline-block">
                    <div className="flex items-center gap-1 text-gray-900">
                        <IoIosArrowBack className="" />
                        <p className="">Back</p>
                    </div>
                </Link>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <VehicleShowImage vehicle={vehicle} />
                    </div>
                    <div className="flex-1">
                        <CustomerForm vehicle={vehicle} user={auth.user} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default VehicleShow;
