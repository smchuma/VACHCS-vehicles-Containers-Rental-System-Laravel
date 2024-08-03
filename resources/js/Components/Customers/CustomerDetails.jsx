import React from "react";

const CustomerDetails = ({ selectedCustomer, user }) => {
    const customer = user.role === 2 ? user : selectedCustomer;

    return (
        <main className="bg-gray-50 shadow-md p-5">
            <h1 className="font-bold">Customer Details</h1>
            {customer ? (
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                        <label className="font-semibold">License Number</label>
                        <p>{customer.id_number || customer.license_number}</p>
                    </div>
                    <div>
                        <label className="font-semibold">Name</label>
                        <p>{customer.name}</p>
                    </div>
                    <div>
                        <label className="font-semibold">Email</label>
                        <p>{customer.email}</p>
                    </div>
                    <div>
                        <label className="font-semibold">Phone Number</label>
                        <p>{customer.phone_number}</p>
                    </div>
                </div>
            ) : (
                <p className="text-center mt-10">No customer searched</p>
            )}
        </main>
    );
};

export default CustomerDetails;
