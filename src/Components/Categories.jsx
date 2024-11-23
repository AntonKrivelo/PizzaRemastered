import React from "react";
import { useSelector } from "react-redux";

const Categories = ( {value, onClickCategory}) => {

  const category = useSelector((state) => state.filter.categoryList)
    // const [activeCategory, setActiveCategory] = React.useState(0);

  // const onClickCategory = (index) => {
  //   setActiveCategory(index)
  // }

    return (
        <div className="categories">
            <ul>
              { 
                category.map((categoryName, index) => <li key={categoryName} className={value === index ? 'active' : ''} onClick={() => onClickCategory(index)}>{categoryName}</li>)
              }
            </ul>
        </div>
    )
}


export default Categories;