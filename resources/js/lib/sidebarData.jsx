import { BiCategory } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaTruck, FaUserCheck } from "react-icons/fa6";
import { MdCarRental, MdDashboardCustomize } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { FaCarAlt, FaUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { BsBorderStyle } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

export const adminSidebarData = [
    {
        id: 1,
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: <MdDashboardCustomize size={20} />,
    },
    {
        id: 2,
        name: "Category Management",
        href: "/admin/category",
        icon: <BiCategory size={20} />,
    },
    {
        id: 3,
        name: "Vehicle Management",
        href: "/admin/vehicle",
        icon: <FaTruck size={20} />,
    },
    {
        id: 4,
        name: "Rental Management",
        href: "/admin/rentals",
        icon: <MdCarRental size={20} />,
    },
    {
        id: 5,
        name: "User Management",
        href: "/admin/employees",
        icon: <FaUserAlt size={20} />,
    },

    {
        id: 6,
        name: "Customer Management",
        href: "/admin/customers",
        icon: <FaUserCheck size={20} />,
    },
    {
        id: 7,
        name: "Report Management",
        href: "/admin/reports",
        icon: <HiDocumentReport size={20} />,
    },
];

export const EmpSidebarData = [
    {
        href: "/",
        icon: <MdCarRental className="text-black" size={25} />,
        label: "Vehicles",
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
        href: "",
        icon: <IoIosSettings className="text-black" size={25} />,
        label: "Settings",
    },
];
