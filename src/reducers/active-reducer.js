import { TODAY_SELECTED, WEEK_SELECTED, MONTH_SELECTED } from '../actions/index';


export default function(state=null, action) {

	switch(action.type) {

		case 'WEEK_SELECTED':
			return action.payload;

		case 'TODAY_SELECTED':
			return action.payload;

		case 'MONTH_SELECTED':
			return action.payload;

	}

	return state
}