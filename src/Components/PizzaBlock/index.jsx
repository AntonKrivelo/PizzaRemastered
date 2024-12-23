import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addItem} from '../../redux/slices/cartSlice';


const PizzaBlock = ({name, price, image, id, size, types}) => {



// функционал добавления пиццы redux

const dispatch = useDispatch()
const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id ))
const typeNames = useSelector((state) => state.cart.typeName)


const addedCount = cartItem ? cartItem.count : 0;
const onClickAdd = () => {
  const item = {
    id,
    name,
    price,
    image,
    type: typeNames[activeType],
    size: size[activeSize],
    
  }
    dispatch(addItem(item))
}


//для выбора размера пиццы
const [activeSize, setActiveSize] = React.useState(0);
const onActiveSize = (index) => {
    setActiveSize(index)
}

//для выбора тип пиццы
const [activeType, setActiveType] = React.useState(0)
const onActiveType = (index) => {
  setActiveType(index)
}


    return (
        <div className="pizza-block">
              <img
                className="pizza-block__image"
                src={image}
                alt="Pizza"
              />
              <h4 className="pizza-block__title">{name}</h4>
              <div className="pizza-block__selector">
                <ul>
                    {
                      types.map((typeIndex) => <li key={typeIndex} onClick={() => onActiveType(typeIndex)} className={activeType === typeIndex ? 'active' : ''}>{typeNames[typeIndex]}</li>)
                    }
                </ul>
                <ul>
                  {
                    size.map((num, index) => <li key={num} onClick={() => onActiveSize(index)} className={activeSize === index ? 'active' : ''}>{num}</li>)
                  }
                </ul>
              </div>
              <div className="pizza-block__bottom">
                  <div className="pizza-block__price">{price} ₽</div>
                  <div onClick={onClickAdd}className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Добавить</span>
                   {addedCount > 0 && <i>{addedCount}</i>}
                  </div>
              </div>
            </div> 
    )
}


export default PizzaBlock;