import { FETCH_ALLTIME } from './constants';
import { FETCH_RECENT } from './constants';

const CampersReducer = (state = {campers: []}, action) => {
    switch (action.type) {
        case FETCH_ALLTIME:
            return { ...state, campers: action.payload };

        case FETCH_RECENT:
            return { ...state, campers: action.payload };

        default:
            return state;
    }
}


export default CampersReducer;