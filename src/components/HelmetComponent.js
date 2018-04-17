import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

const HelmetComponent = props => {
	const { title, credits } = props
	return (
		<Helmet>
			<title>{title} - {credits} | Videos | The Bible App | Bible.com</title>
			<meta name="description" content={`${title} - ${credits} | Videos`} />
		</Helmet>
	)
}

HelmetComponent.propTypes = {
	credits: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default HelmetComponent