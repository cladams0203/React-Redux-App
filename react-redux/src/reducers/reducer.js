import { FETCH_SHOWS_START, FETCH_SHOWS_SUCCESS, FETCH_SHOWS_FAIL } from '../actions/fetchShows';

const initialState = {
    shows: [],
    error: '',
    isFetching: false
}

function reducer(state = initialState, action) {
    console.log('reducer', action)
    switch (action.type) {
        case FETCH_SHOWS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SHOWS_SUCCESS:
            return {
                ...state,
                shows: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SHOWS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer