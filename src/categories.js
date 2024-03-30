import {useState} from 'react';
import "./categories.css";

export default function Categories({cate})
{
    const [activeCategory, setActiveCategory] = useState("All");
    const handleclick =(category)=>
    {
        setActiveCategory(category);
        cate(category);
    };
    return(
        <div className="categories">
            <button  onClick={()=>handleclick("All")} className={`category ${activeCategory==="All" ? "active":""}`}>All</button>
            <button onClick={()=>handleclick("gaming")} className={`category ${activeCategory==="gaming" ? "active":""}`}>Gaming</button>
            <button onClick={()=>handleclick("music")} className={`category ${activeCategory==="music" ? "active":""}`}>Music</button>
            <button onClick={()=>handleclick("tech")} className={`category ${activeCategory==="tech" ? "active":""}`}>Tech</button>
            <button className={`category`}>Trending</button>
            <button className={`category`}>Home & Lifestyle</button>
            <button className={`category`}>Education</button>
            <button className={`category`}>Art</button>
            <button className={`category`}>Business</button>
        </div>
    )
}