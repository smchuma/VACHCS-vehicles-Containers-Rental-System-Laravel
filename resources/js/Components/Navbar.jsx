import { usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = ({ user, header }) => {
    const { url } = usePage();
    const { auth } = usePage().props;
    const category =
        url.split("/").pop().charAt(0).toUpperCase() +
        url.split("/").pop().slice(1);

    return (
        <nav className="flex py-4 justify-between sticky shadow-md  z-99 bg-gray-100 top-0  lg:px-8 ">
            <h1 className="text-xl">
                {category === "Vehicles" ? "Vehicle and Containers" : category}
            </h1>
            <div className="sm:flex sm:items-center sm:ms-6 gap-4">
                <IoIosNotificationsOutline className="text-xl" />
                <div className="relative ">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className=" rounded-full inline-flex items-center px-3 py-2 border border-gray-200 text-sm leading-4   focus:outline-none transition ease-in-out duration-150"
                                >
                                    {user.name}

                                    <svg
                                        className="ms-2 -me-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={
                                    auth.user.role === 1
                                        ? route("admin.logout")
                                        : route("logout")
                                }
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
