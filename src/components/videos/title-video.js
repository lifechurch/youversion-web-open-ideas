import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { LazyImage, Heading2, LinkText } from '../../melos'

/*
* TODO: This is just some placeholder styling... things should be better.
* */

const TitleVideo = (props) => {
	const { thumbnail, title } = props
	return (
		<div style={{ border: '1px solid grey', width: '720px', margin: '50px' }}>
			{/* <Card> */}
			{/* <Body> */}
			<Link to="/videos/1/series">
				<LazyImage
					width="720px"
					height="380px"
					src={ thumbnail }
					placeholder={ <img src="http://via.placeholder.com/720x380" alt="video thumbnail" /> }
				/>
				<Heading2 muted textAlign="left"> { title }</Heading2>
			</Link>
			{/* </Body> */}
			{/* </Card> */}
		</div>
	)
}

export default TitleVideo

TitleVideo.propTypes = {
	thumbnail: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

