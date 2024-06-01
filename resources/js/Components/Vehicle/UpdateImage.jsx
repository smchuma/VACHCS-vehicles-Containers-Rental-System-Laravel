import React, { useState } from "react";
import Modal from "../Modal";
import TextInput from "../TextInput";
import InputLabel from "../InputLabel";
import { useForm } from "@inertiajs/react";

const UpdateImage = ({ vehicle, closeModal, open }) => {
    const { data, setData, processing, errors, put } = useForm({
        image: "",
    });

    const [preview, setPreview] = useState(
        vehicle.image ? `/storage/${vehicle.image}` : ""
    );

    const handleImageChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            return; // Handle no file selected case
        }

        const file = event.target.files[0];
        setData("image", file);
        setPreview(URL.createObjectURL(file)); // Update preview immediately
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        put(route("vehicle.update", vehicle.id), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    return (
        <Modal show={open} onClose={closeModal}>
            <div className="p-6 rounded shadow-lg">
                <h2 className="text-xl mb-4">Update Image</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <InputLabel htmlFor="image">Image:</InputLabel>
                        <TextInput
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {preview && <img src={preview} alt="Vehicle preview" />}
                        {data.image && <span>Selected: {data.image.name}</span>}
                        {errors.image && (
                            <div className="error">{errors.image}</div>
                        )}
                    </div>
                    <button type="submit" disabled={processing}>
                        {processing ? "Updating..." : "Update Vehicle"}
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default UpdateImage;
