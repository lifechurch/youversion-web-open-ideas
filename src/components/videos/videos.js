import React from 'react'
import { Helmet } from 'react-helmet'
import md5 from 'md5'
import { get } from 'lodash'

import TitleVideo from './title-video'
import { titleVideosPage1, titleVideosPage2 } from '../../api/video-api-mock'
import { VerticalSpace } from '../../melos'


const Videos = () => {
	const videos1 = get(titleVideosPage1, 'response.data.videos', [])
	return (
		<div>
			<Helmet>
				<title>Watch videos about the Bible | The Bible App | Bible.com</title>
				<meta name="description" content="Watch videos about the Bible" />
			</Helmet>

			<VerticalSpace space={10} padding={40}>
				{ videos1.map((video) => {
					return (
						<TitleVideo thumbnail={ get(video, 'thumbnails.1.url', '')} title={get(video, 'title', '')} key={md5(video.id)} />
					)
				})}
			</VerticalSpace>
		</div>
	)

}
