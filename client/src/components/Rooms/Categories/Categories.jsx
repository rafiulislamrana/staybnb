import { categories } from "./CategoriesData";
import CategoryCard from "./CategoryCard";


const Categories = () => {
    return (
        <div className="pt-4 flex items-center justify-between overflow-x-scroll gap-4">
            {categories.map((category,idx) => <CategoryCard key={idx} icon={category.icon} lebel={category.label}></CategoryCard>)}
        </div>
    );
};

export default Categories;