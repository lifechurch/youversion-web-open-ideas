import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const VideoSeries = ({ match }) => {
	return (
		<div>
			<Helmet>
				<title>{series.title} - {series.credits} | Videos | The Bible App | Bible.com</title>
				<meta name="description" content={`${series.title} - ${series.credits} | Videos`} />
			</Helmet>

			<h2>This is video series #{match.params.id}</h2>

			{ /* TODO: REMOVE THIS PLACEHOLDER SECTION */ }
			<hr />
			<Link to="/videos/example">Watch the <q>Example</q> video</Link>
		</div>
	)
}

VideoSeries.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string
		})
	}).isRequired
}

export default VideoSeries
