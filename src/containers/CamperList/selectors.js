import CampersReducer from './reducers';

export const selectRecentCampers = () => state => CampersReducer.campers;
export const selectAllTimeCampers = () => state => CampersReducer.campers;