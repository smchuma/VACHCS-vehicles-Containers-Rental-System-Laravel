import EmpNavbar from "@/Components/EmpNavbar";
import EmpSidebar from "@/Components/EmpSidebar";
import { ToastProvider } from "@/context/ToastContext";

export default function Authenticated({ user, header, children }) {
    return (
        <>
            <ToastProvider>
                <div className="min-h-screen">
                    <div>
                        <EmpNavbar user={user} header={header} />
                        <main className="bg-gray-100 min-h-screen ">
                            <div className="emp-sidebar">
                                {user.role !== 2 && <EmpSidebar />}
                            </div>
                            <div
                                className={`${
                                    user.role !== 2 ? "ml-0 md:ml-80" : "ml-0"
                                }`}
                            >
                                {children}
                            </div>
                        </main>
                    </div>
                </div>
            </ToastProvider>
        </>
    );
}
