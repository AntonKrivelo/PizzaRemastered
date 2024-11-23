/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SearchContext } from "../../App";
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';


const Search = () => {
    const [value, setValue] = React.useState('')
    const {searchValue, setSearchValue} = React.useContext(SearchContext)

    //получить DOM элемент
    const inputRef = React.useRef()
    
    // для крестика в поиске
    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus() 
    }

    // выполняется запрос через секунду после изменения поиска
    const updateSearchValue = React.useCallback(
            debounce((str) => {
                setSearchValue(str)
            }, 500),
            [],
    )

    // для поиска
    const onChangeInput = (e) => {
            setValue(e.target.value)
            updateSearchValue(e.target.value)
    }
    
    return (
        <div className={styles.root}>
            <svg
            className={styles.icon}
            enableBackground="new 0 0 32 32" 
            height="32px" 
            id="Layer_1" 
            version="1.1" 
            viewBox="0 0 32 32" 
            width="32px" 
            xmlns="http://www.w3.org/2000/svg"><g>
            <path d="M13,2C6.935,2,2,6.935,2,13s4.935,11,11,11s11-4.935,11-11S19.065,2,13,2z M13,22c-4.962,0-9-4.037-9-9   c0-4.962,4.038-9,9-9c4.963,0,9,4.038,9,9C22,17.963,17.963,22,13,22z"/>
            <path d="M29.707,28.293l-6.001-6c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l6.001,6C28.488,29.902,28.744,30,29,30   s0.512-0.098,0.707-0.293C30.098,29.316,30.098,28.684,29.707,28.293z"/>
            </g>
            </svg>
            <input 
            ref={inputRef}
            value={value}
            onChange={onChangeInput} //Стандартная штука в реакте при каждом написании буквы сохраняется в value
            className={styles.search} 
            placeholder="Поиск пиццы ... " 
            />

            {searchValue &&   //Чтобы крестик появлялся тогда когда текст в поиске какой-то есть
            <svg className={styles.close} height="32px" 
            onClick={onClickClear}
            id="Layer_1" 
            version="1.1" 
            viewBox="0 0 512 512" 
            width="16px" 
            xmlns="http://www.w3.org/2000/svg">
            <g><path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z"/></g></svg>}
        </div>
      
    )
}



export default Search;