import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Heading1 from '@youversion/melos/dist/components/typography/Heading1'
import TitleVideo from './title-video' 
import { titleVideosPage1 } from '../../api/video-api-mock.js'

const Videos = () => {
	var videoResponse = titleVideosPage1.response.data
	var titleVideoComponentRows = []
	var titleVideoA = null
	var titleVideoB = null

	for (let i = 0; i < videoResponse.videos.length; i++) {
		var video = videoResponse.videos[i]

		if (i % 2 == 0) {
			titleVideoA = 
				<TitleVideo 
					id={video.id}
					title={video.title} 
					description={video.description}
					shortUrl={video.short_url}
					languageTag={video.language_tag}
					credits={video.credits}
					createdDate={video.created_dt}
					publishedDate={video.published_dt}
					thumbnail={video.thumbnails[0].url} 
					width={video.thumbnails[0].width} 
					height={video.thumbnails[0].height}
					thumbnails={video.thumbnails} />
		}
		else {
			titleVideoB = 
				<TitleVideo 
					id={video.id}
					title={video.title} 
					description={video.description}
					shortUrl={video.short_url}
					languageTag={video.language_tag}
					credits={video.credits}
					createdDate={video.created_dt}
					publishedDate={video.published_dt}
					thumbnail={video.thumbnails[0].url} 
					width={video.thumbnails[0].width} 
					height={video.thumbnails[0].height}
					thumbnails={video.thumbnails} />
		}

		if (titleVideoA != null && titleVideoB != null) {
			titleVideoComponentRows.push(VideoRow(titleVideoA, titleVideoB))
			titleVideoA = null
			titleVideoB = null
		}		
	}

	// Add the last video if there is an odd number of videos
	if (titleVideoA != null && titleVideoB == null) {
		titleVideoComponentRows.push(VideoRow(titleVideoA, titleVideoB))
		titleVideoA = null
		titleVideoB = null
	}

	return (
		<div>
			<Helmet>
				<title>Watch videos about the Bible | The Bible App | Bible.com</title>
				<meta name="description" content="Watch videos about the Bible" />
			</Helmet>

			<Heading1>Videos</Heading1>
			
			<div class="wrapper">
				{titleVideoComponentRows}
			</div>
			<div class="wrapper">
				<Link to="/videos/1/series">Visit series 1</Link>
			</div>
		</div>
	)
}

// Mock this out as if Bible.com used Bootstrap for a grid system.
const VideoRow = (titleVideoA, titleVideoB) => {
	return (
		<div class="row">
			<div class="float-left">{titleVideoA}</div>
			<div class="float-left">{titleVideoB}</div>
		</div>
	)
}

export default Videos
