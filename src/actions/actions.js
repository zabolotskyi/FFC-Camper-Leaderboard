const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export const FETCH_RECENT = 'FETCH_RECENT';
export const FETCH_ALLTIME = 'FETCH_ALLTIME';

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
            const json = response.json()
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