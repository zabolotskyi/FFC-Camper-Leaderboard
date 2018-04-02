import { FETCH_ALLTIME } from './constants';
import { FETCH_RECENT } from './constants';

const initialState = {
    campers: [],
    sortingType: 'recent'
};

const CampersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALLTIME:
            return { ...state, campers: action.payload, sortingType: 'alltime' };

        case FETCH_RECENT:
            return { ...state, campers: action.payload, sortingType: 'recent' };

        default:
            return state;
    }
}


export default CampersReducer;