var React = require('react');
var request = require('superagent');
var RSVPStore = require('../stores/RSVPStore');

var AttendingApp = React.createClass({

	getInitialState: function() {
		return {
			isReady: RSVPStore.isLoaded(),
			attendees: RSVPStore.getAttendees()
		};
	},

	componentDidMount: function() {
		RSVPStore.addChangeListener(this.updateStateFromStore);
	},

	componentWillUnmount: function() {
		RSVPStore.removeChangeListener(this.updateStateFromStore);
	},

	updateStateFromStore: function() {

		this.setState({
			isReady: RSVPStore.isLoaded(),
			attendees: RSVPStore.getAttendees()
		});

	},
	
	renderHeading: function() {
		if (!this.state.isReady) return <h3 className="heading-with-line">...</h3>;
		var count = this.state.attendees ? this.state.attendees.length : '...';
		var plural = count === 1 ? 'We are' : 'We are';
		return <div><h3 className="heading-with-line"> {plural} Chronas ({count})</h3><h5>The latest 50 newcomers:</h5></div> ;
	},

	render: function() {
		var attendeesList;
		if (this.state.isReady) {
			var iter=0;
			var itLength=this.state.attendees.length;
			var itStart=itLength-51;
			attendeesList = this.state.attendees.map(function(person) {
				iter++;
				if (iter>=itStart && iter<itLength ){
					return <li key={person.id}><a href={person.url}><img width="40" height="40" alt={person.name} className="img-circle" src={person.photo ? person.photo : "/images/avatar.png"} /></a></li>

				}
			});
		}
		return (
			<div>
				<section className="attending">
					{this.renderHeading()}
					<ul className="list-unstyled list-inline text-center attendees-list">
						{attendeesList}
					</ul>
				</section>
			</div>
		);
	}

});

module.exports = AttendingApp;
