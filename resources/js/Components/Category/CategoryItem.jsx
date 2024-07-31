import { BiCategory } from "react-icons/bi";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";
import Dropdown from "../Dropdown";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";

const CategoryItem = ({ category }) => {
    const handleDelete = (category) => {
        Swal.fire({
            title: `Category: ${category.name}`,
            text: `Are you sure you want to delete this customer?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/admin/category/${category.id}`);
                Swal.fire(
                    "Deleted!",
                    "The customer has been deleted.",
                    "success"
                );
            }
        });
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="flex gap-2 mb-3 ">
                    <BiCategory />
                    <p className="text-sm text-gray-600">Category Name</p>
                </div>
                <Dropdown>
                    <Dropdown.Trigger>
                        <FaEllipsisVertical
                            className="text-slate-600"
                            size={10}
                        />
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        {/* <Dropdown.Link>
                            <div className="flex gap-2 items-center text-green-600">
                                <FaEdit />
                                Edit
                            </div>
                        </Dropdown.Link> */}
                        <Dropdown.Link method="post" as="button">
                            <div
                                className="flex gap-2 text-red-500"
                                onClick={() => {
                                    handleDelete(category);
                                }}
                            >
                                <FaTrashAlt />
                                Delete
                            </div>
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            <div className="flex justify-between items-center mx-5">
                <h1 className=" text-slate-900 font-semibold text-lg ">
                    {category.name}
                </h1>
                <div className=" flex justify-center flex-col items-center">
                    <h1 className="text-xl font-bold text-slate-900 ">
                        {category.vehicles_count}
                    </h1>
                    <p className="text-xs text-slate-900">Vehicles</p>
                </div>
            </div>
        </>
    );
};

export default CategoryItem;
