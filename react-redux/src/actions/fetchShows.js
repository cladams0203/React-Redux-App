import axios from 'axios';

export const FETCH_SHOWS_START = 'FETCH_SHOWS_START';
export const FETCH_SHOWS_SUCCESS = 'FETCH_SHOWS_SUCCESS';
export const FETCH_SHOWS_FAIL = 'FETCH_SHOWS_FAIL'

export const fetchShows = (input) => dispatch => {
    dispatch({ type: FETCH_SHOWS_START })
    axios
        .get(`http://api.tvmaze.com/search/shows?q=${input}`)
        .then(res => {
            dispatch({ type: FETCH_SHOWS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_SHOWS_FAIL, payload: err }))
}

    