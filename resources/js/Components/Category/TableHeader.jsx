const TableHeader = () => {
    return (
        <thead className="bg-[#1b252e] ">
            <tr>
                <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white"
                >
                    <button className="flex items-center gap-x-3 focus:outline-none">
                        <span>Id</span>
                    </button>
                </th>

                <th
                    scope="col"
                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Category Name
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    Slug
                </th>

                <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                >
                    image
                </th>

                <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
    );
};

export default TableHeader;
