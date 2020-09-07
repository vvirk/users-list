export const setPageNumbers = (totalPages, currentPage, separator) => {
    let pageNumbers = [];
    if(totalPages < 6) {
        for(let i = 1; i <= totalPages; i += 1) {
            pageNumbers.push(i);
        }
    } else {
        if(currentPage <= 3){
            for(let i = 1; i <= 4; i += 1) {
                pageNumbers.push(i);
            }
            pageNumbers.push(separator, totalPages);
        } else if (currentPage > 3 && currentPage < totalPages - 2) {  
            pageNumbers.push(1, separator, currentPage - 1, currentPage, currentPage + 1, separator, totalPages);
        } else if (currentPage > 3 && currentPage > totalPages - 3) {
            pageNumbers.push(1, separator);
            for(let i = totalPages - 3; i <= totalPages; i += 1) {
                pageNumbers.push(i);
            }
        }
    }
    return pageNumbers;
}