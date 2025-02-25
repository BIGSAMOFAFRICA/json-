
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

 
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

 
  const handleSearch = debounce((value) => {
    setSearchTerm(value);
    setCurrentPage(1); 
  }, 300);

  
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Posts</h1>
      
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by title..."
          aria-label="Search posts"
          onChange={(e) => handleSearch(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="row">
        {currentItems.map((post) => (
          <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button
              onClick={() => onPageChange(number)}
              className="page-link"
              aria-label={`Page ${number}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default App;
