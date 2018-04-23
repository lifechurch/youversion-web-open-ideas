import React, { Component } from 'react'
import VerticalSpace from '@youversion/melos/dist/components/layouts/VerticalSpace'
import TitleVideo from './title-video'
import { titleVideosPage1 } from '../../api/video-api-mock'

class Videos extends Component {

	render() {

		const { response: { data: { videos } } } = titleVideosPage1

		return (
			<div>
				<Helmet>
					<title>Watch videos about the Bible | The Bible App | Bible.com</title>
					<meta name="description" content="Watch videos about the Bible" />
				</Helmet>

				<VerticalSpace space={10} padding={40}>
					{ videos.map((video) => <TitleVideo { ...video } key={ video.id } />) }
				</VerticalSpace>
			</div>
		)
	}
}

export default Videos
