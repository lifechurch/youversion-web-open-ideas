import PropTypes from 'prop-types'
import React from 'react'
import { Div, H3 } from 'glamorous'
import LazyImage from '@youversion/melos/dist/components/images/LazyImage'


const TitleVideo = (props) => {
	const { title, thumbnails } = props
	return (
		<Div border='1px solid #ccc' width='auto' margin='15px !important'>
			<LazyImage
				src={thumbnails[2].url}
				placeholder={<img src="http://via.placeholder.com/720x480" alt="video thumbnail" />}
			/>
			<H3 color='#aaa' padding={5}> { title }</H3>
		</Div>
	)
}


TitleVideo.propTypes = {
	thumbnails: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
}
export default TitleVideo
