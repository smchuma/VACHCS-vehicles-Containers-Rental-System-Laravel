import EmpNavbar from "@/Components/EmpNavbar";
import EmpSidebar from "@/Components/EmpSidebar";

export default function Authenticated({ user, header, children }) {
    return (
        <>
            <div className="min-h-screen">
                <div>
                    <EmpNavbar user={user} header={header} />
                    <main className="bg-gray-100 min-h-screen ">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
