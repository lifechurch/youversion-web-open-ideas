import { Div } from 'glamorous'
import React from 'react'

import SeriesHero from '../series-hero'
import { titleVideosPage1 } from '../../../api/video-api-mock'

const SeriesHeroPage = () => {

	const seriesData = titleVideosPage1.response.data.videos[0]

	// may be worth considering having a property on the data object just for the hero
	// otherwise I can search the array for a specific image (by size or someting)
	const heroImage = seriesData.thumbnails[4].url

	return (
		<Div maxWidth="1100" margin="0 auto">
			<SeriesHero
				seriesTitle={seriesData.title}
				credit={seriesData.credits}
				imgSrc={heroImage}
				creditHref="#"
			/>
		</Div>
	)
}

export default SeriesHeroPage
