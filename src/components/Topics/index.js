import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Topic = ({ match }) => {
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	)
}

Topic.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			topicId: PropTypes.string
		})
	}).isRequired
}

const Topics = ({ match }) => {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Route path={`${match.url}/:topicId`} component={Topic} />
			<Route
				exact
				path={match.url}
				render={() => { return <h3>Please select a topic.</h3> }}
			/>
		</div>
	)
}

Topics.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string
	}).isRequired
}

export default Topics
