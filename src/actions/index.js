export const TODAY_SELECTED = 'book_selected';
export const WEEK_SELECTED = 'week_selected';
export const MONTH_SELECTED = 'month_selected';


export function fetchToday(today) {

	return {
		type: 'TODAY_SELECTED',
		payload: today
	};
}

export function fetchWeek(week) {

	return {
		type:'WEEK_SELECTED',
		payload: week
	}
}

export function fetchMonth(month) {

	return {
		type: 'MONTH_SELECTED',
		payload: month
	}
}
