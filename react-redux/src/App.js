import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ShowSearch } from './components/ShowSearch';
import './App.css';

function App() {
  const [search, setSearch] = useState();
  useEffect(() => {
    search &&
    axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [search])

  return (
    <div className="App">
      <ShowSearch search={setSearch}/>
    </div>
  );
}

export default App;
