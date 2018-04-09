import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Body from '@youversion/melos/dist/components/typography/Body'
import Heading1 from '@youversion/melos/dist/components/typography/Heading1'
import Title from '@youversion/melos/dist/components/typography/Title'
import VerticalSpace from '@youversion/melos/dist/components/layouts/VerticalSpace'
import Button from '@youversion/melos/dist/components/links/Button'
import LinkText from '@youversion/melos/dist/components/links/LinkText'
import { Div } from 'glamorous'
import { videoDetailsJson } from '../../api/video-api-mock.js'

const Video = ({ match }) => {
	var video = videoDetailsJson.response.data

	return (
		<div>
			<Helmet>
				<title>{video.title} - {video.credits} | Videos | The Bible App | Bible.com</title>
				<meta name="description" content={`${video.title} - ${video.credits} | Videos`} />
			</Helmet>

			<VerticalSpace padding={40} space={5} width={'1100px'} margin={'0 auto'}>
				<Heading1 textAlign="left">{video.title}</Heading1>
				<Link style={{ textDecoration: 'none' }} to={`/videos/${video.id}/publisher`}><LinkText size={30}>{video.credits}</LinkText></Link>

				{/* Video Player */}
				<Div style={{ width: '100%', height: '632px', backgroundColor: 'black' }}></Div>

				<VerticalSpace space={0} width={'65%'} margin={20}>
					<Title textAlign="left" muted>Related Scripture</Title>
					{ video.references.map((ref, i) => {
						return <LinkText key={i} target='_blank' href={`https://www.bible.com/bible/206/${ref.usfm}`}>{ref.human}</LinkText>
					})}
					<hr />
					<VerticalSpace height={10} />

					{/* TODO: solution for less dangerous injection of HTML */}
					<Body><span style={{ color: '#444' }} dangerouslySetInnerHTML={{ __html: video.description }} /></Body>
				</VerticalSpace>

				<VerticalSpace width={'30%'} height={65} margin={20} style={{ marginLeft: '5%' }}>
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
