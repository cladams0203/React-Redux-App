import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ShowSearch } from './components/ShowSearch';
import { ShowList } from './components/ShowList';
import './App.css';

function App() {
  const [search, setSearch] = useState();
  const [data, setData] = useState()
  console.log(data)
  useEffect(() => {
    search &&
    axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [search])

  return (
    <div className="App">
      <ShowSearch search={setSearch}/>
      <ShowList data={data} />
      
    </div>
  );
}

export default App;
