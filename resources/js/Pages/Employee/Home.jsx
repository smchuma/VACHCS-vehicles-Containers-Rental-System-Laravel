import VehicleList from "@/Components/Home/VehicleList";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Home({ auth, vehicles, categories }) {
    const { data } = vehicles;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="mt-10 ">
                <div className="">
                    <div className="flex justify-end mr-0 md:mr-12 ">
                        <TextInput
                            className="w-72 rounded-xl"
                            placeholder="Search here."
                        />
                        <PrimaryButton>Search</PrimaryButton>
                    </div>
                    <VehicleList vehicles={data} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
