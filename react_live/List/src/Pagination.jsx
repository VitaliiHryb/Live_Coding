import React from 'react';

// refactoring
function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  const isFirstPage = currentPage < 2;
  const isLastPage = currentPage * itemsPerPage >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? '' : '→'}
      </button>
    </div>
  );
}

// JENYA
// const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
//   const isPrevPageAvailable = currentPage > 1; // currentPage !== 1;
//   const lastPage = Math.ceil(totalItems / itemsPerPage);
//   const isNextPageAvailable = currentPage < lastPage;

//   return (
//     <div className="pagination">
//       <button disabled={!isPrevPageAvailable} className="btn" onClick={goPrev}>
//         {isPrevPageAvailable ? '←' : ''}
//       </button>
//       <span className="pagination__page">{currentPage}</span>
//       <button disabled={!isNextPageAvailable} onClick={goNext} className="btn">
//         {isNextPageAvailable ? '→' : ''}
//       </button>
//     </div>
//   );
// };

// MY SOLUTION
/*
function Pagination({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) {
  const isFirstPage = currentPage < 2;
  const isLastPage = currentPage * itemsPerPage >= totalItems;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isFirstPage}>
        {isFirstPage ? '' : '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNext} disabled={isLastPage}>
        {isLastPage ? '' : '→'}
      </button>
    </div>
  );
}
*/

export default Pagination;

// goPref - ф-я для переключения на предыдущую страницу
// goNext - ф-я для переключения на следущую страницу
// currentPage - ф-я для переключения на текущую страницу
// totalItems - всего елементов в списке
// itemsPerPage - к-во элеиентов на странице

// для того, что бы не отрисововать страницу без данных
// введем isFirstPage и isLastPage
