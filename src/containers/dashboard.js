import React, { Component }from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Today from './dashboard-content/today';
import Week from './dashboard-content/week';
import Month from './dashboard-content/month'
import fetchDashboard from '../actions/index';



class Dashboard extends Component  {
	constructor(props) {
		super(props);

		this.state = {
			week: 1,
			today: 0,
			month: 0 
		}
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
					<div className="today-button" onClick={ () => this.setState({ week: 0, today: 1, month: 0})}>Today </div>
					<div className="week-button" onClick={ () => this.setState({ week: 1, today: 0, month: 0})}> Week</div>
					<div className="month-button" onClick={ () => this.setState({ week: 0, today: 0, month: 1})}> Month</div>
				</div>
				<div>
					{ this.state.week ? <Week /> : null }
					{ this.state.today ? <Today /> : null }
					{ this.state.month ? <Month /> : null }
				</div>
			</div>
		)
	}
}


export default Dashboard;