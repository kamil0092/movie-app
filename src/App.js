import React, { useState} from 'react';
import SearchForm from './SearchForm';
import ShowList from './ShowList';
import ShowSummary from './ShowSummary';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [selectedShow, setSelectedShow] = useState(null);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  const handleShowSelected = (show) => {
    setSelectedShow(show);
  }

  const handleGoBack = () => {
    setSelectedShow(null);
  };

  return (
    <div>
    {selectedShow ? (
      <ShowSummary  selectedShow={selectedShow} onGoBack={handleGoBack}/> 
    ) : (
      <>
            <SearchForm onSearch={handleSearch} />
            <ShowList shows={searchResults} onShowSelected={handleShowSelected} />
      </>
    )}
          
            
    </div>
  );
};

export default App;