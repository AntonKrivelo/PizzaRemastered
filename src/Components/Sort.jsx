import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsVisible } from "../redux/slices/filterSlice";

const Sort = ({sortValue, onClickSort}) => {
    const dispatch = useDispatch()
    const sortMenu = useSelector((state) => state.filter.menuListSort)
    const isVisibleModal = useSelector((state) => state.filter.isVisible) // из Initial STATE

    // для закрытия модального окна при клике на body
    const sortRef = React.useRef();

    const handleOutsideClick = (e) => {
        if(!e.composedPath().includes(sortRef.current)) {
            setIsVisible(false)
        }
    }
    React.useEffect(() => {
        document.body.addEventListener('click' , handleOutsideClick)
       } , []);

    // // для модального окна 
    // const [isVisible, setIsVisible] = React.useState(false);

    const onClickModal = (boolean) => {
        dispatch(setIsVisible(boolean))
    }

    // state выбранной сортировки
    // const [activeItemMenu, setActiveItemMenu] = React.useState(0);
    const clickActiveItem = (index) => {
        onClickSort(index)
        onClickModal(false)
    }

    // // для того чтобы выбранная сортировка отображалась
    // const sortName = menuList[sortValue].name;
    

    return (
    <div ref={sortRef} className="sort">
        <div className="sort__label">
            <svg className={isVisibleModal ? 'rotate' : ''}
            width="15"
            height="23"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
            />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={() => onClickModal(!isVisibleModal)}>{sortValue.name}</span>
        </div>

{
    (isVisibleModal && 
        <div className="sort__popup">
            <ul>
                {
                    sortMenu.map((obj, index) => <li onClick={() => clickActiveItem(obj)} className={sortValue.sortProperty === obj.sortProperty ? 'active' : ''} key={index}>{obj.name}</li>)
                }
            </ul>
        </div> 
    )
}
    </div>
    )
}

export default Sort;