import ApplicationLogo from "./ApplicationLogo";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ data }) => {
    return (
        <main className="bg-slate-900 shadow-2xl -translate-x-80 fixed inset-0 z-50  m-h-full w-72 transition-transform duration-300 lg:translate-x-0">
            <div className="relative border-b border-white/20">
                <div className="flex flex-col items-center gap-2 py-6 px-8 mt-4 ">
                    <div className="flex text-white gap-2 items-center">
                        <img
                            src="/images/truck3.png"
                            className="h-5 logoimg"
                            alt="logoimg"
                        />
                        <ApplicationLogo className="logo" />
                    </div>
                </div>
            </div>
            <div className="m-4 mt-7">
                {data.map((item) => (
                    <SidebarItem key={item.id} item={item} />
                ))}
            </div>
        </main>
    );
};

export default Sidebar;
