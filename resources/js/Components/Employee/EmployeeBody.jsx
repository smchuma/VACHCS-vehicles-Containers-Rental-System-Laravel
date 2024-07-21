import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import EmployeeTable from "./EmployeeTable";
import UpdateEmployee from "./UpdateEmployee";

const EmployeeBody = () => {
    const { users } = usePage().props;
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);
    const { delete: destroy } = useForm();

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelectedUser(null);
    };

    const handleRowClick = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleDeleteClick = (user) => {
        Swal.fire({
            title: `Name: ${user.name}`,
            text: `Are you sure you want to delete this user?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("employee.destroy", user.id), {
                    preserveScroll: true,
                });
                Swal.fire("Deleted!", "The user has been deleted.", "success");
            }
        });
    };

    return (
        <div>
            <div className="mt-6 md:flex md:items-center md:justify-end"></div>
            {users && (
                <EmployeeTable
                    users={users}
                    onRowClick={handleRowClick}
                    onDeleteClick={handleDeleteClick}
                />
            )}
            {selectedUser && (
                <UpdateEmployee
                    user={selectedUser}
                    openModal={openModal}
                    closeModal={closeModal}
                    open={open}
                />
            )}
        </div>
    );
};

export default EmployeeBody;
