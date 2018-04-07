import React from 'react'
import PropTypes from 'prop-types'

const Video = ({ match }) => {
	return (
		<div>
			<h2>This is the <q>{match.params.slug}</q> video</h2>
		</div>
	)
}

Video.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			topicId: PropTypes.string
		})
	}).isRequired
}

export default Video
