import { usePage } from "@inertiajs/react";
import CategoryTable from "./CategoryTable";

const CategoryBody = () => {
    const { category } = usePage().props;

    return (
        <div>
            <div className="mt-6 md:flex md:items-center md:justify-end"></div>

            <CategoryTable category={category} />
        </div>
    );
};

export default CategoryBody;
