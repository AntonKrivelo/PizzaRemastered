import React from "react";
import '../scss/app.scss';
import Categories from '../Components/Categories';
import PizzaBlock from '../Components/PizzaBlock';
import Sort from '../Components/Sort';
import Skeleton from '../Components/PizzaBlock/Skeleton';
import Pagination from "../Components/Pagination";
import { SearchContext } from "../App";
import axios from 'axios'
import qs from 'qs';
import { useNavigate } from "react-router-dom";

//redux
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategoryId, setSort, setCurrentPage } from "../redux/slices/filterSlice"; // action
//redux

const Home = () => {
const navigate = useNavigate()
//redux filterSlice ***
const categoryId = useSelector((state) => state.filter.activeCategoryId); // из initial state
const sortType = useSelector((state) => state.filter.sort)
const currentPageNumber = useSelector((state) => state.filter.currentPage)
const dispatch = useDispatch();
//redux filterSlice


const {searchValue} = React.useContext(SearchContext); 

// //для пагинации пицц
// const [currentPage, setCurrentPage] = React.useState(1);

  // категории пицц
// const [activeCategoryId, setActiveCategoryId] = React.useState(0);

  // для сортировки пицц
// const [sort, setSort] = React.useState({
//   name: 'популярности',
//   sortProperty: 'rating'
// }); 

// редакс категории 
const onClickCategory = (id) => {
    dispatch(setActiveCategoryId(id))
}

// редакс сортировки
const onClickSort = (obj) => [
    dispatch(setSort(obj))
]

// redux pagination
const onChangePage = (number) => {
  dispatch(setCurrentPage(number))
}

// создаем хранилище для пицц 
const [items, setItems] = React.useState([]);

// для скелетона
const [isLoadingSkeleton, setIsLoadingSkeleton] = React.useState(true);
  
      React.useEffect(() => {
        setIsLoadingSkeleton(true)
        
        // Для поиска пицц в БЭКЭНДЕ
        const search = searchValue ? `&search=${searchValue}` : '';
  
  
      //   fetch(`https://672772e1270bd0b975527e0f.mockapi.io/items?page=${currentPageNum}&limit=3&${
      //   categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=desc${search}`      
      //   )
  
      //   .then((res) => {
      // // переконвертируй в <json></json>
      //   return res.json()
      //   //и верни переконвертированный ответ в консоль
      // }).then((arr) => {
      //   setIsLoadingSkeleton(false)
      //   setItems(arr)
      // })
  
      axios.get(
        `https://672772e1270bd0b975527e0f.mockapi.io/items?page=${currentPageNumber}&limit=3&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=desc${search}`
      )
      .then(responce => {
          setIsLoadingSkeleton(false)
          setItems(responce.data)
        
      })
  
        window.scrollTo(0, 0)
      }, [categoryId, sortType.sortProperty, searchValue, currentPageNumber])   // если меняется activeCategoryid....и тд то делай запрос на сервер
      
    React.useEffect(() => {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPageNumber
      })

      navigate(`?${queryString}`)
    }, [categoryId, sortType, currentPageNumber, navigate])

  const pizzas = items.map((obj) => <PizzaBlock 
  name={obj.title}
  price={obj.price}
  image={obj.imageUrl} 
  id={obj.id} 
  size={obj.sizes}
  types={obj.types}
  />);

    return (      
        <div className="container">
        <div className="content__top">
          
            <Categories value={categoryId} onClickCategory={onClickCategory} />
            <Sort sortValue={sortType} onClickSort={onClickSort} />  
            </div>

            <h2 className="content__title">Все пиццы:</h2>

            <div className="content__items">
            {
                isLoadingSkeleton 
                ? [...new Array(3)].map((_, index) => <Skeleton key={index} />) 
                : pizzas}
            </div>

              <Pagination 
                currentPage={currentPageNumber}
                onChangePage={onChangePage}   // для пагинации пицц
              />
             
          </div>
    )
}


export default Home;