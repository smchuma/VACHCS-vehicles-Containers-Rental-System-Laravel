import React, { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { usePage } from "@inertiajs/react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const { session } = usePage().props;

    if (session.success) {
        toast.success(session.success);
    }

    if (session.error) {
        toast.error(session.error);
    }

    return (
        <ToastContext.Provider value={""}>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#2fbe51",
                        color: "#fff",
                    },
                    success: {
                        duration: 5000,
                        theme: {
                            primary: "green",
                            secondary: "black",
                        },
                    },
                }}
            />
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
