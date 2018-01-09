import { combineReducers } from 'redux';
import TodayReducer from './today-reducer';
import WeekReducer from './week-reducer';
import MonthReducer from './month-reducer';
import ActiveReducer from './active-reducer';


const rootReducer = combineReducers({
	today_reducer: TodayReducer,
	week_reducer: WeekReducer,
	month_reducer: MonthReducer,
	active_reducer: ActiveReducer
});

export default rootReducer;