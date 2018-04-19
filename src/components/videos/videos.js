import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Heading1 from '@youversion/melos/dist/components/typography/Heading1'
import TitleVideo from './title-video'
import { titleVideosPage1 } from '../../api/video-api-mock'

// Mock this out as if Bible.com used Bootstrap for a grid system.
const VideoRow = (titleVideoA, titleVideoB) => {
	return (
		<div className="row">
			<div className="float-left">{titleVideoA}</div>
			<div className="float-left">{titleVideoB}</div>
		</div>
	)
}

const CreateTitleVideo = (video) => {
	return (
		<TitleVideo
			id={video.id} title={video.title} description={video.description}
			shortUrl={video.short_url} languageTag={video.language_tag}
			credits={video.credits} createdDate={video.created_dt}
			publishedDate={video.published_dt} thumbnail={video.thumbnails[0].url}
			width={video.thumbnails[0].width} height={video.thumbnails[0].height}
			thumbnails={video.thumbnails}
		/>
	)
}

const BuildTitleVideoComponentRows = (videoResponse) => {
	const titleVideoComponentRows = []
	let titleVideos = []
	const isVideoCountEven = (videoResponse.videos.length % 2 === 0)

	for (let i = 0; i < videoResponse.videos.length; i++) {
		titleVideos[i % 2] = CreateTitleVideo(videoResponse.videos[i])

		if (titleVideos[i % 2] !== null || (i === videoResponse.videos.length - 1 && !isVideoCountEven)) {
			titleVideoComponentRows.push(VideoRow(titleVideos[0], titleVideos[1]))
			titleVideos = []
		}
	}

	return titleVideoComponentRows
}

const Videos = () => {
	const titleVideoComponentRows = BuildTitleVideoComponentRows(titleVideosPage1.response.data)

	return (
		<div>
			<Helmet>
				<title>Watch videos about the Bible | The Bible App | Bible.com</title>
				<meta name="description" content="Watch videos about the Bible" />
			</Helmet>

			<Heading1>Videos</Heading1>

			<div className="wrapper">
				{titleVideoComponentRows}
			</div>
			<div className="wrapper clearfix">
				<Link to="/videos/1/series">Visit series 1</Link>
			</div>
		</div>
	)
}

export default Videos
