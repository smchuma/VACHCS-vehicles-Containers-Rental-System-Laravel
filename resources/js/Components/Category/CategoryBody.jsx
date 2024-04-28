import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";
import CategoryCard from "./CategoryCard";

const CategoryBody = () => {
    const { category } = usePage().props;

    const { data } = category;

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (value) => {
        try {
            setSearchTerm(value);
            router.get(
                route("category"),
                {
                    search: value,
                },
                { preserveState: true }
            );
        } catch (error) {
            toast.error(error);
        }
    };
    return (
        <div>
            <div className="mt-6 md:flex md:items-center md:justify-end"></div>
            <>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                        className: "",
                        duration: 5000,
                        style: {
                            background: "#2fbe51",
                            color: "#fff",
                        },
                        success: {
                            duration: 5000,
                            theme: {
                                primary: "green",
                                secondary: "black",
                            },
                        },
                    }}
                />
                <div className="relative flex items-center justify-end mt-4 md:mt-0">
                    <span className="absolute">
                        <CiSearch className="w-5 h-5 mx-3 text-gray-400" />
                    </span>

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search.."
                        className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-300 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5   focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-500"
                    />
                </div>

                <div className="mt-10">
                    <CategoryCard categories={data} />
                </div>
            </>
        </div>
    );
};

export default CategoryBody;
