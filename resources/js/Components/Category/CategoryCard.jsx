import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import Dropdown from "../Dropdown";
import { FaEllipsisVertical } from "react-icons/fa6";
import CategoryItem from "./CategoryItem";

const CategoryCard = ({ categories }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="p-5 cursor-pointer border rounded-lg shadow-lg flex flex-col justify-between bg-slate-100"
                >
                    <CategoryItem category={category} />
                </div>
            ))}
        </div>
    );
};

export default CategoryCard;
