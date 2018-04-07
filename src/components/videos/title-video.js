import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Body, Card, LazyImage, Caption1, Heading1, Heading2 } from '../../melos'

/*
* TODO: This is just some placeholder styling... things should be better.
* */

const TitleVideo = (props) => {
	const { thumbnail, title } = props
	return (
		<div style={{ border: '1px solid grey', width: '720px', margin: '50px' }}>
			{/*<Card>*/}
				{/*<Body>*/}
					<LazyImage
						width="720px"
						height="380px"
						src={ thumbnail }
						placeholder={ <img src="https://baconmockup.com/720/380" alt="bear with me" /> }
					/>
					<Heading2 muted textAlign="left"> { title }</Heading2>
				{/*</Body>*/}
			{/*</Card>*/}
		</div>
	)
}

export default TitleVideo

TitleVideo.propTypes = {
	thumbnail: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

