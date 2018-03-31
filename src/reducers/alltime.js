import { FETCH_ALLTIME } from '../actions/actions';

const AllTimeReducer = (state = {campers: []}, action) => {
    switch (action.type) {
        case FETCH_ALLTIME:
            return { ...state, campers: action.payload };

        default:
            return state;
    }
}

export default AllTimeReducer;