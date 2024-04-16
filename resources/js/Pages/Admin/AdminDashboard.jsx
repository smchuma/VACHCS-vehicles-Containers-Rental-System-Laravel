import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

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
