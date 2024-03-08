

const CategoryCard = ({lebel, icon:Icon}) => {
    
    return (
        <div className="flex flex-col items-center justify-center gap-2 border-b-2 cursor-pointer ">
            <Icon size={26}></Icon>
            <div className=" text-sm font-medium">{lebel}</div>
        </div>
    );
};

export default CategoryCard;