import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import { adminSidebarData } from "../lib/sidebarData";
import { ToastProvider } from "@/context/ToastContext";

export default function AdminAuthenticated({ children }) {
    const { auth } = usePage().props;

    return (
        <ToastProvider>
            <div className="min-h-screen bg-slate-100 ">
                <Sidebar data={adminSidebarData} />
                <div className="lg:ml-72 w-[calc(100% - 18rem)] ">
                    <Navbar user={auth.user} />

                    <main className="mx-8 my-5 mt-5">{children}</main>
                </div>
            </div>
        </ToastProvider>
    );
}
