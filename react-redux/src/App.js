import React from 'react';

import { connect } from 'react-redux';
import { fetchShows } from './actions/fetchShows';
import { ShowSearch } from './components/ShowSearch';
import { ShowList } from './components/ShowList';
import './App.css';

function App(props) {
  
  
  const handleSearch = (input) => {
    props.fetchShows(input)
  }

  return (
    <div className="App">
      <ShowSearch search={handleSearch}/>
      <ShowList data={props.shows} />
      
    </div>
  );
}
function mapStateToProps(state) {
  return state
}
const mapDispatchToProps = {
  fetchShows: fetchShows
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
