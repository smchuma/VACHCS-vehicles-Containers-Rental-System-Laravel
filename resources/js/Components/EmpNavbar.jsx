import { Link, usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { IoIosNotificationsOutline } from "react-icons/io";
import ApplicationLogo from "./ApplicationLogo";

const EmpNavbar = ({ user }) => {
    return (
        <nav className="flex py-5 justify-between sticky shadow-md  z-50 bg-white top-0  pr-11 ">
            <Link href="/">
                <div className="flex gap-2 items-center pl-5 cursor-pointer">
                    <img src="/images/truck3.png" className="h-5" alt="logo" />
                    <ApplicationLogo className="logo" />
                </div>
            </Link>
            <div className="sm:flex sm:items-center sm:ms-6 gap-4">
                <IoIosNotificationsOutline className="text-xl" />
                <div className="relative ">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="cursor-pointer rounded-full inline-flex items-center px-3 py-2 border border-gray-200 text-sm leading-4   focus:outline-none transition ease-in-out duration-150"
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
                            {user.role == 2 && (
                                <Dropdown.Link href={route("my-orders")}>
                                    My rentals
                                </Dropdown.Link>
                            )}
                            <Dropdown.Link
                                href={route("logout")}
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

export default EmpNavbar;
