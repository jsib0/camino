import { combineReducers } from 'redux';
import week from './week-reducer';
import today from './week-reducer';
import month from './week-reducer';


const rootReducer = combineReducers({
	today: today,
	week: week,
	month: month

});

export default rootReducer;