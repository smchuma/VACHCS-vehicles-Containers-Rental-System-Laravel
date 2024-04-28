import { BiCategory } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaTruck, FaUserCheck } from "react-icons/fa6";
import { MdCarRental, MdDashboardCustomize } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";

export const adminSidebarData = [
    {
        id: 1,
        name: "Dashboard",
        href: "/admin/dashboard",
        icon: <MdDashboardCustomize size={20} />,
    },
    {
        id: 2,
        name: "Category",
        href: "/admin/category",
        icon: <BiCategory size={20} />,
    },
    {
        id: 3,
        name: "Vehicles & Containers",
        href: "/admin/vehicle",
        icon: <FaTruck size={20} />,
    },
    {
        id: 4,
        name: "Rentals",
        href: "/admin/rentals",
        icon: <MdCarRental size={20} />,
    },
    {
        id: 5,
        name: "Employees",
        href: "/admin/employees",
        icon: <FaUserAlt size={20} />,
    },

    {
        id: 6,
        name: "Customers",
        href: "/admin/customers",
        icon: <FaUserCheck size={20} />,
    },
    {
        id: 7,
        name: "Reports",
        href: "/admin/reports",
        icon: <HiDocumentReport size={20} />,
    },
];

export const EmpSidebarData = [
    {
        id: 1,
        name: "Dashboard",
    },
    {
        id: 2,
        name: "Reservation",
    },
    {
        id: 3,
        name: "Inventory",
    },

    {
        id: 4,
        name: "Reports",
    },
];
