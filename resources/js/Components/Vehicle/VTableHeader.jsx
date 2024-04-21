const VTableHeader = () => {
    return (
        <thead className="bg-[#1b252e] ">
            <tr>
                <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white"
                >
                    <button className="flex items-center gap-x-3 focus:outline-none">
                        <span>Vehicle No</span>
                    </button>
                </th>

                <th
                    scope="col"
                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Vehicle Name
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Type
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Capacity
                </th>
                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Price per day
                </th>
                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Capacity
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Image
                </th>
                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Category
                </th>
                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Status
                </th>

                <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
    );
};

export default VTableHeader;
