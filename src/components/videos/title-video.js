import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Body, Card, LazyImage } from '../../melos'


const TitleVideo = (props) => {
	const { imgUrl, title } = props
	return (
		<div>
			<Card>
				<Body>
					<LazyImage
						width={720}
						height={380}
						src={ imgUrl }
						placeholder={<img src="https://baconmockup.com/720/380" alt="bear with me" />}
					/>
				</Body>
				<Heading2>{title}</Heading2>
			</Card>
		</div>
	)
}

export default TitleVideo

TitleVideo.propTypes = {
	imgUlr: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}