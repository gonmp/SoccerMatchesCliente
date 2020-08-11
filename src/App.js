import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TeamForm from './components/TeamForm';
import ResutsTable from './components/ResultsTable';
import Pagination from 'react-js-pagination';

function App() {
  const [matches, setMatches] = useState([]);
  const [team, setTeam] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, changeCurrentPage] = useState(1);
  const [header, setHeader] = useState({
    totalCount: 0,
  });

  const searchMatches = async (pageNumber) => {
    const url = `https://soccermatchesapi-apim.azure-api.net/matches/api/Matches/search?team=${team}&pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const results = await axios.get(url);
    setHeader(JSON.parse(results.headers['x-pagination']));
    console.log(JSON.parse(results.headers['x-pagination']).TotalCount);
    setMatches(results.data);
    console.log(matches);
  };

  const handlePaginationChange = (pageNumber) => {
    searchMatches(pageNumber);
    changeCurrentPage(pageNumber);
  };

  useEffect(() => {
    //clienteAxios.get().then((result) => console.log(result));
    searchMatches(currentPage);
    //console.log(matches);
  }, [team, pageSize]);

  return (
    <div>
      <TeamForm setTeam={setTeam} setPageSize={setPageSize} />
      <ResutsTable matches={matches} />
      <div className='paging'>
        <Pagination
          activePage={header.CurrentPage}
          itemCountPerPage={header.PageSize}
          onChange={handlePaginationChange.bind(this)}
          innerClass='pagination justify-content-center'
          itemClass='page-item page-link'
          firstPageText='Primero'
          lastPageText='Último'
          totalItemsCount={header.TotalCount ? header.TotalCount : 1}
          activeClass='active'
        />
      </div>
    </div>
  );
}

export default App;
