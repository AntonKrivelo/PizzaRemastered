import React from "react";
import NotFoundBlock from "../Components/NotFoundBlock";
import styles from './NotFoundPage.module.scss';

const NotFound = () => {
    return (
        <div className={styles.root}>
             <NotFoundBlock />
        </div>
    )
}


export default NotFound;