import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { videoDetailsJson } from '../../api/video-api-mock.js'
import { VerticalSpace, Padded, Heading1, LinkText, Heading3, Body, Button } from '../../melos'

const Video = ({ match }) => {
var video = videoDetailsJson.response.data

return (
	<div>
		<Helmet>
			<title>{video.title} - {video.credits} | Videos | The Bible App | Bible.com</title>
			<meta name="description" content={video.title + " - " + video.credits + " | Videos"} />
		</Helmet>

		<VerticalSpace padding={40} space={5} width={'1100px'} margin={'0 auto'}>
			<Heading1 textAlign="left">{video.title}</Heading1>
			<LinkText size={30}>{video.credits}</LinkText>

			{/* Video Player */}
			<div style={{width: '100%', height: '632px', backgroundColor: 'black'}}></div>

			<VerticalSpace space={0} width={'65%'}>
				<Heading3 muted>RELATED SCRIPTURE</Heading3>
				{ video.references.map((ref, i) => {
					return <LinkText key={i} target='_blank' href={'https://www.bible.com/bible/206/' + ref.usfm}>{ref.human}</LinkText>
				})}
				<hr />
				<Body>{video.description}</Body>
			</VerticalSpace>

			<VerticalSpace width={'30%'} height={65}>
				<Button>All Videos</Button>
			</VerticalSpace>
		</VerticalSpace>

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
