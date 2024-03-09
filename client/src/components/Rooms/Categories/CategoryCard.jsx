import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string"

const CategoryCard = ({lebel, icon:Icon}) => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick = (name) => {
        let currentQuery = {};
        if(params){
            currentQuery = qs.parse(params.toString( ));
            const updatedQuery = {...currentQuery, category: name}
            const url = qs.stringifyUrl({
                url: "/",
                query: updatedQuery,
            })
            navigate(url)
        }
    }
    params.get("category");
    return (
        <div onClick={() => handleClick(lebel)} className="flex flex-col items-center justify-center p-3 hover:text-neutral-800 transition gap-2 border-b-2 cursor-pointer ">
            <Icon size={26}></Icon>
            <div className=" text-sm font-medium">{lebel}</div>
        </div>
    );
};

export default CategoryCard;