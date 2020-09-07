import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setCurrentPage } from '../../actions/index';
import { Btn } from '../commonComponents/Btn';
import { setPageNumbers } from '../../utils/setPageNumbers';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const [pages, setPages] = useState();
    const separator = '...';

    useEffect(() => {
        setPages(setPageNumbers(totalPages, currentPage, separator));
    }, [currentPage, totalPages]);

    const handleCurrentPage = page => page !== currentPage ? setCurrentPage(page) : null;

    return(
        <div>
            {currentPage > 1 && <button onClick={() => handleCurrentPage(currentPage - 1)} title={currentPage - 1}>назад</button>}
            <ul>
                {pages && pages.map((page, index) => 
                    <li key={index}>
                        {page === separator
                            ? <span>{page}</span>
                                : <Btn handleClick={() => handleCurrentPage(page)} desc={page} />}
                    </li>)}
            </ul>
            {currentPage < totalPages && <button onClick={() => handleCurrentPage(currentPage + 1)} title={currentPage + 1}>вперед</button>}
        </div>
    )
}

const mapStateToProps = state => ({
    currentPage: state.currentPage,
    totalPages: state.totalPages
});

const mapDispatchToProps = {
    setCurrentPage
};

const connectedPagination = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export { connectedPagination as Pagination };