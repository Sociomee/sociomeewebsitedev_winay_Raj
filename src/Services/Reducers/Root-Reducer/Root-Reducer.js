import { combineReducers } from 'redux';
import getAllGroupCategory from '../getAllGroupCategory';

const rootReducer = combineReducers({
    getAllGroupCategoryData : getAllGroupCategory,
});

export default rootReducer;