import React, { Component } from 'react'
import VerticalSpace from '@youversion/melos/dist/components/layouts/VerticalSpace'
import TitleVideo from './title-video'
import { titleVideosPage1, titleVideosPage2 } from '../../api/video-api-mock'
import HelmetComponent from '../HelmetComponent'

const Videos = porps => {
	const { response: { data: { videos } } } = titleVideosPage1
	return (
		<div>
			<HelmetComponent credits="" title="" />
			<VerticalSpace space={10} padding={40}>
				{ videos.map((video) => { return <TitleVideo { ...video } key={ video.id } /> }) }
			</VerticalSpace>
		</div>
	)
}

export default Videos
