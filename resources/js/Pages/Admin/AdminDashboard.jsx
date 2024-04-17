import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { usePage } from "@inertiajs/react";

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <ResponsiveNavLink
                method="post"
                href={route("admin.logout")}
                as="button"
            >
                Log Out
            </ResponsiveNavLink>
        </div>
    );
};

export default Dashboard;
