import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";

export default function Authenticated({ user, header, children }) {
    console.log(header);
    return (
        <>
            <div className="min-h-screen bg-gray-50/50">
                <div className="lg:ml-72">
                    <Navbar user={user} header={header} />
                    <h1>dd</h1>
                    <main>{children}</main>
                </div>
            </div>
        </>
    );
}
