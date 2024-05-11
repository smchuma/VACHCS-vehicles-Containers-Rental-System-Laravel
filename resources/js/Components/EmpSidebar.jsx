import { useState } from "react";
import Checkbox from "./Checkbox";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
    Button,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import ResponsiveNavLink from "./ResponsiveNavLink";

const EmpSidebar = ({ categories }) => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <main className="fixed flex flex-col gap-2 bg-white shadow-xl w-60 h-full m-5 rounded-xl py-5">
            <div>
                <Menu
                    dismiss={{
                        itemPress: false,
                        outsidePress: false,
                    }}
                    handler={setOpenMenu}
                    open={openMenu}
                >
                    <MenuHandler>
                        <div className="flex  items-center justify-between cursor-pointer border-b-2 border-t-2 py-2 border-gray-50">
                            <div className="flex px-4 items-center justify-between w-full">
                                <h1 className="text-md font-semibold">
                                    Category
                                </h1>
                                <FaAngleDown
                                    className={`text-gray-600 h-3.5 w-3.5 transition-transform ${
                                        openMenu ? "rotate-180" : ""
                                    }`}
                                />
                            </div>
                        </div>
                    </MenuHandler>
                    <MenuList className="w-60 mx-auto shadow-none border-0 ">
                        {categories.map((category) => (
                            <MenuItem
                                key={category.id}
                                className="flex items-center gap-x-2 mb-2  "
                            >
                                <Checkbox />
                                <h1 className="text-gray-800">
                                    {category.name}
                                </h1>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </div>
            <ResponsiveNavLink
                className={`transition-all hover:bg-gray-200 ${
                    openMenu ? "mt-48" : ""
                }`}
            >
                <div className="flex">
                    <h1 className="text-black ">Home</h1>
                </div>
            </ResponsiveNavLink>
            <ResponsiveNavLink className="hover:bg-gray-200">
                <div className="flex">
                    <h1 className="text-black">Rentals</h1>
                </div>
            </ResponsiveNavLink>
            <ResponsiveNavLink className="hover:bg-gray-200">
                <div className="flex">
                    <h1 className="text-black">Customers</h1>
                </div>
            </ResponsiveNavLink>
            <ResponsiveNavLink className="hover:bg-gray-200">
                <div className="flex">
                    <h1 className="text-black">Reports</h1>
                </div>
            </ResponsiveNavLink>
        </main>
    );
};

export default EmpSidebar;
