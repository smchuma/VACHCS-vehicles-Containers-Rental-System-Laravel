import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import CategoryCard from "./CategoryCard";
import { BiCategory } from "react-icons/bi";

const CategoryBody = () => {
    const { category } = usePage().props;

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(category.data);

    useEffect(() => {
        setFilteredData(
            category.data.filter((v) =>
                v.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, category.data]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>
            <div className="mt-6 md:flex md:items-center md:justify-end"></div>
            <>
                <div className="relative flex items-center justify-end mt-4 md:mt-0">
                    <span className="absolute">
                        <CiSearch className="w-5 h-5 mx-3 text-gray-400" />
                    </span>

                    <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search.."
                        className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-300 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5   focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-gray-500"
                    />
                </div>

                <div className="mt-10">
                    {filteredData.length === 0 && (
                        <div className="flex justify-center flex-col items-center text-gray-400 text-center my-20 ">
                            <BiCategory size={50} />

                            <p className="text-xl font-bold mt-3  ">
                                No Categories Available
                            </p>
                        </div>
                    )}
                    <CategoryCard categories={filteredData} />
                </div>
            </>
        </div>
    );
};

export default CategoryBody;
