import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const DownloadReport = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (format) => {
        onSelect(format);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <PrimaryButton onClick={toggleDropdown}>Download</PrimaryButton>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <button
                        className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
                        onClick={() => handleSelect("excel")}
                    >
                        Download as Excel
                    </button>
                    <button
                        className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
                        onClick={() => handleSelect("pdf")}
                    >
                        Download as PDF
                    </button>
                </div>
            )}
        </div>
    );
};

export default DownloadReport;
