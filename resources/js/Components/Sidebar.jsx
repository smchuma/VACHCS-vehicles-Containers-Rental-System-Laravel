import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import ResponsiveNavLink from "./ResponsiveNavLink";

const Sidebar = () => {
    return (
        <aside className="bg-[#112241] -translate-x-80 fixed inset-0 z-50  h-full w-72 transition-transform duration-300 lg:translate-x-0">
            <div className="relative border-b border-white/20">
                <div className="flex flex-col items-center gap-2 py-6 px-8 mt-4 ">
                    <div className="flex gap-2 items-center">
                        <ApplicationLogo className="w-auto h-6" />
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                            VACHCS
                        </h6>
                    </div>
                    <p className="text-white text-[10px]">
                        Vehicle & Containers Hiring Control System
                    </p>
                </div>
            </div>
            <div className="m-4 mt-7">
                <ResponsiveNavLink
                    href={route("dashboard")}
                    className="text-white gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 text-inherit"
                    >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                    </svg>
                    Dashboard
                </ResponsiveNavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
