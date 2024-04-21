import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";
import { usePage } from "@inertiajs/react";
import { adminSidebarData } from "../lib/sidebarData.js";
import toast, { Toaster } from "react-hot-toast";

export default function AdminAuthenticated({ children }) {
    const { auth } = usePage().props;

    const { session } = usePage().props;

    if (session.success) {
        toast.success(session.success);
    }

    if (session.error) {
        toast.error(session.error);
    }

    return (
        <>
            <div className="min-h-screen bg-white ">
                <Sidebar data={adminSidebarData} />
                <div className="lg:ml-72 w-[calc(100% - 18rem)] ">
                    <Navbar user={auth.user} />
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                        toastOptions={{
                            className: "",
                            duration: 5000,
                            style: {
                                background: "#2fbe51",
                                color: "#fff",
                            },
                            success: {
                                duration: 5000,
                                theme: {
                                    primary: "green",
                                    secondary: "black",
                                },
                            },
                        }}
                    />
                    <main className="mx-8 my-5 mt-5">{children}</main>
                </div>
            </div>
        </>
    );
}
