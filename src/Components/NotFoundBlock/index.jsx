import React from "react";
import styles from "./NotFound.module.scss";
import myIcon from "../../icons/smile.png";
import { NavLink } from "react-router-dom";

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
          <h1 className={styles.header}>
                <img className={styles.icon} src={myIcon} alt="smile"/>
            <br />
            Ваша корзина пуста! 
            <p className={styles.gray}>Возможно в вашей корзине нет товаров...</p>
        
            <p className={styles.gray}>Для того чтобы заказать пиццу пройдите на главную страницу</p>
          <NavLink to='/home'>
                        <button className={styles.button}>Вернуться назад</button>
          </NavLink>
          </h1>
         
        </div>
    )
}


export default NotFoundBlock;