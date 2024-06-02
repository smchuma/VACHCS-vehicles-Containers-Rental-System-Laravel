import EmpNavbar from "@/Components/EmpNavbar";
import EmpSidebar from "@/Components/EmpSidebar";

export default function Authenticated({ user, header, children }) {
    return (
        <>
            <div className="min-h-screen">
                <div>
                    <EmpNavbar user={user} header={header} />
                    <main className="bg-gray-100 min-h-screen ">
                        <div className="emp-sidebar">
                            <EmpSidebar />
                        </div>
                        <div className="ml-0 md:ml-80">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}
