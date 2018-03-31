import { FETCH_RECENT } from '../actions/actions';

const RecentReducer = (state =  {campers: []}, action) => {
    switch (action.type) {
        case FETCH_RECENT:
            return { ...state, campers: action.payload }

        default:
            return state;
    }
}

export default RecentReducer;