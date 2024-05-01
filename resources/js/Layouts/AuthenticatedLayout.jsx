import EmpNavbar from "@/Components/EmpNavbar";
import EmpSidebar from "@/Components/EmpSidebar";

export default function Authenticated({ user, header, children }) {
    return (
        <>
            <div className="min-h-screen">
                <div>
                    <EmpNavbar user={user} header={header} />
                    <main className="bg-slate-100 min-h-screen py-8 px-10 ">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
