import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import { adminSidebarData } from "../lib/sidebarData.js";

export default function AdminAuthenticated({ children }) {
    const { auth } = usePage().props;

    return (
        <>
            <div className="min-h-screen bg-white">
                <Sidebar data={adminSidebarData} />
                <div className="lg:ml-72">
                    <Navbar user={auth.user} />
                    <main className="m-5">{children}</main>
                </div>
            </div>
        </>
    );
}
