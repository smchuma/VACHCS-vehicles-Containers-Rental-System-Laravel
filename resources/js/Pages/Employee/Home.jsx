import VehicleList from "@/Components/Home/VehicleList";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Home({ auth, vehicles }) {
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(vehicles.data);

    useEffect(() => {
        setFilteredData(
            vehicles.data.filter((v) =>
                v.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, vehicles.data]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

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
                            value={search}
                            onChange={handleSearch}
                        />
                        <PrimaryButton>Search</PrimaryButton>
                    </div>
                    {filteredData.length === 0 && (
                        <div className="flex justify-center flex-col items-center text-gray-400 text-center my-20 ">
                            <p className="text-xl font-bold mt-3  ">
                                No Vehicles Found
                            </p>
                        </div>
                    )}
                    <VehicleList vehicles={filteredData} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
