import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import TitleVideo from './title-video'
import { VerticalSpace } from '../../melos'


const Videos = () => {
	return (
		<div>
			<Helmet>
				<title>Watch videos about the Bible | The Bible App | Bible.com</title>
				<meta name="description" content="Watch videos about the Bible" />
			</Helmet>

			<VerticalSpace space={10} padding={40}>
				{ Array(10).fill('').map((video, index) => {
					return (
						<TitleVideo thumbnail="https://placebear.com/g/720/480" title="Bear with me" key={ `vid-${index}` } />
					)
				})}
			</VerticalSpace>
			<hr />
			<Link to="/videos/1/series">Visit series 1</Link>
		</div>
	)
}

export default Videos
