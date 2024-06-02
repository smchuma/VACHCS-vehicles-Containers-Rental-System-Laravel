import { IoIosSettings } from "react-icons/io";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { MdCarRental } from "react-icons/md";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { usePage } from "@inertiajs/react";
import { BsBorderStyle } from "react-icons/bs";

const EmpSidebar = () => {
    const { url } = usePage();

    const links = [
        {
            href: "/",
            icon: <MdCarRental className="text-black" size={25} />,
            label: "Vehicles & Containers",
        },
        {
            href: "/rentals-orders",
            icon: <BsBorderStyle className="text-black" size={25} />,
            label: "Rentals Orders",
        },
        {
            href: "/customers",
            icon: <FaUser className="text-black" size={25} />,
            label: "Customers",
        },
        {
            href: "/reports",
            icon: <TbReportSearch className="text-black" size={25} />,
            label: "Reports",
        },
        {
            href: "/settings",
            icon: <IoIosSettings className="text-black" size={25} />,
            label: "Settings",
        },
    ];

    return (
        <main className="bg-white mt-20 shadow-2xl -translate-x-80 fixed inset-0 z-50  m-h-full w-72 transition-transform duration-300 lg:translate-x-0 rounded-t-2xl mx-2">
            <div className="mt-16 flex flex-col gap-y-5 ">
                {links.map((item, index) => (
                    <ResponsiveNavLink
                        key={index}
                        href={item.href}
                        active={item.href === url}
                        activeClassName="bg-gray-200 text-white"
                        className="hover:bg-gray-200"
                    >
                        <div className="flex gap-5 items-center">
                            {item.icon}
                            <h1 className="text-black">{item.label}</h1>
                        </div>
                    </ResponsiveNavLink>
                ))}
            </div>
        </main>
    );
};

export default EmpSidebar;
