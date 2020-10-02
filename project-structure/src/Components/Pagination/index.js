import React from 'react';
import './style.scss';
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentComments,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  let MinPage = 1;
  let MaxPage = Math.ceil(totalPosts / postsPerPage);
  const onNext = () => {
    if (currentPage !== MaxPage) {
      paginate(currentPage + 1);
    } else {
      return paginate(MaxPage);
    }
  };

  const onPrev = () => {
    console.log(currentPage, MinPage);
    if (currentPage !== MinPage) {
      paginate(currentPage - 1);
    } else {
      return paginate(MinPage);
    }
  };
  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <button onClick={onPrev}>
          <i className="fas fa-less-than" />
        </button>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => {
                paginate(number);
              }}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
        <button onClick={onNext}>
          <i
            className="fas fa-greater-than"
            onClick={() => {
              paginate(+1);
            }}
          />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;

// const [filteredBreads, setFilteredBreads] = useState([]);

// const paginate = (pageNumber) => setCurrentPage(pageNumber);
// useEffect(() => {
//   API.getItems('/produkter/', setBreads);
// }, []);

// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage, setPostsPerPage] = useState(10);

// const indexOfLastPost = currentPage * postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentBreads = breadList.slice(indexOfFirstPost, indexOfLastPost);
// console.log(breadList);

// <Pagination
//   postsPerPage={postsPerPage}
//   totalPosts={currentBreads.length}
//   paginate={paginate}
// />;
