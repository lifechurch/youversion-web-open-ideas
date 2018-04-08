import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { videoDetailsJson } from '../../api/video-api-mock'

const Video = ({ match }) => {
	const video = videoDetailsJson.response.data

	return (
		<div>
			<Helmet>
				<title>{video.title} - {video.credits} | Videos | The Bible App | Bible.com</title>
				<meta name="description" content={`${video.title} - ${video.credits} | Videos`} />
			</Helmet>

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
