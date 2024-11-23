import React from "react";
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({currentPage,onChangePage}) => {

    return (
        <div className={styles.root}>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => onChangePage(e.selected + 1)}
                pageRangeDisplayed={6}
                pageCount={4}
                forcePage={currentPage - 1}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
        
    )
}



export default Pagination;