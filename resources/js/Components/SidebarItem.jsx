import { usePage } from "@inertiajs/react";
import ResponsiveNavLink from "./ResponsiveNavLink";

const SidebarItem = ({ item }) => {
    const { url } = usePage();

    const active = item.href ? item.href === url : false;

    return (
        <div className="mt-3  ">
            <ResponsiveNavLink
                className={`gap-2`}
                key={item.id}
                href={item.href}
                active={active}
                activeClassName="bg-gray-800 text-white"
            >
                {item.icon}
                {item.name}
            </ResponsiveNavLink>
        </div>
    );
};

export default SidebarItem;
