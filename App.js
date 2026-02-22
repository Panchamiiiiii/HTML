import React, { useEffect, useState } from 'react';
import jsonData from './data1.json';  // Import your JSON data

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults("");
    setSearchResults(jsonData);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = jsonData.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };
  return (
    <>
    <div className='container' style={{marginTop:'20px'}}>
  <h1 className='display-5'>Search customer name:</h1>
  <input
    type="text"
    placeholder="Search by name"
    value={searchTerm}
    onChange={handleSearch}
  />

  <ul>
    {searchResults.map(item => (
      <li key={item.id}>
        <strong>{item.name}</strong>
      </li>
    ))}
  </ul>
</div>
    </>
  );
}

export default App;
