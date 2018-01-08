import React, { Component }from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Today from './dashboard-content/today';
import Week from './dashboard-content/week';
import Month from './dashboard-content/month'
import fetchDashboard from '../actions/index';
import Interactive from 'react-interactive';
import $ from 'jquery';
import { fetchWeek } from '../actions/index';
import { bindActionCreators } from 'redux';



class Dashboard extends Component  {
	constructor(props) {
		super(props);

		this.state = {
			week: 1,
			today: 0,
			month: 0,

		}
		
	}

	componentDidMount() {
		$('.nav-bar div').click(function (ev) {
      	 	 $('.nav-bar div').removeClass('selected');
      	 	 $(ev.currentTarget).addClass('selected');
    		});
	}

	render () {
	
		return (
			<div className="main-dashboard">
				<div className="header" >
					<div className="hamburger" >
						<div className="con">
	      			   		<div className="bar arrow-top"></div>
	      		      		<div className="bar arrow-middle"></div>
	      					<div className="bar arrow-bottom"></div>
	    		  		</div>
    		  		</div>
					<h3 className="header-dashboard-text" > DASHBOARD</h3>
					<div className="search-icon" ><i className="fa fa-search" aria-hidden="true"></i></div>
				</div>
				<div className="nav-bar" >
					<div className="nav-bar-buttons left-button today-button" onClick={ () => this.setState({ week: 0, today: 1, month: 0, one: 1, two: 0, three: 0 })}><p>Today </p></div>
					<div className="nav-bar-buttons selected week-button"  onClick={ () => this.setState({ week: 1, today: 0, month: 0, two: 1, one: 0, three: 0})}> <p>Week</p></div>
					<div className="nav-bar-buttons right-button month-button" onClick={ () => this.setState({ week: 0, today: 0, month: 1, three: 1, one: 0, two: 0})}> <p>Month</p></div>
				</div>
				<div>
					{ this.state.today ? <Today /> : null }
					{ this.state.week ? <Week /> : null }
					{ this.state.month ? <Month /> : null }
				</div>
			</div>
		)
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeek: fetchWeek }, dispatch)
}

export default connect(null, mapDispatchToProps)(Dashboard)