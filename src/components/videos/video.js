import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { videoDetailsJson } from '../../api/video-api-mock'
import HelmetComponent from '../HelmetComponent'

const Video = ({ match }) => {
	const video = videoDetailsJson.response.data
	return (
		<div>
			<HelmetComponent credits="" title="" />
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
