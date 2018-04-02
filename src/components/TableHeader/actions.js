import {
    FETCH_RECENT,
    FETCH_ALLTIME,
    RECENT,
    ALLTIME
} from './constants';

export const fetchRecent = () => {
    return async dispatch => {
        try {
            const response = await fetch(RECENT)
            const json = await response.json()
            dispatch({
                type: FETCH_RECENT,
                payload: json
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_RECENT_ERROR',
                payload: err
            });
        }
    }
}

export const fetchAlltime = () => {
    return async dispatch => {
        try {
            const response = await fetch(ALLTIME)
            const json = await response.json()
            dispatch({
                type: FETCH_ALLTIME,
                payload: json
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_ALLTIME_ERROR',
                payload: err
            });
        }
    }
}