import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    activeClassName = "",
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`w-full flex items-center ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? `${activeClassName} border-white`
                    : "border-transparent text-white hover:text-white hover:bg-slate-800 hover:border-gray-300"
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
