import NavLink from "../NavLink";
import TableHeader from "./TableHeader";
import CategoryEdit from "./CategoryEdit";

const TableBody = ({ data, links }) => {
    return (
        <div className="flex flex-col mt-6  ">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                        {/* <table className="min-w-full divide-y divide-gray-200 ">
                            <TableHeader />
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data &&
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                <div>
                                                    <h2 className="font-medium text-gray-800 ">
                                                        {item.id}
                                                    </h2>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-gray-500 gap-x-2">
                                                    {item.name}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-gray-500 gap-x-2">
                                                    {item.vehicles_count}
                                                </div>
                                            </td>
                                            <td>
                                                <CategoryEdit item={data} />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
            {/* <div className="mt-6 sm:flex sm:items-center sm:justify-center mb-24 ">
                {links &&
                    links.map((link) => (
                        <NavLink
                            href={link.url}
                            key={link.label}
                            className={`
                ${link.active ? "bg-[#1b252e] text-white" : "text-gray-800"}
                px-4   pt-1 pb-1 mx-1 rounded-md hover:bg-[#1b252e] hover:text-white


                `}
                        >
                            {link.label.replace(
                                /^(&laquo; Previous)|(Next &raquo;)/g,
                                ""
                            )}
                        </NavLink>
                    ))}
            </div> */}
        </div>
    );
};

export default TableBody;
