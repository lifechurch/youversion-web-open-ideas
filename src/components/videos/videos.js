import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Videos = () => {
	return (
		<div>
			<Helmet>
				<title>Watch videos about the Bible | The Bible App | Bible.com</title>
				<meta name="description" content="Watch videos about the Bible" />
			</Helmet>

			<h2>Videos are encapsulated here...</h2>

			{ /* TODO: REMOVE THIS PLACEHOLDER SECTION */ }
			<hr />
			<Link to="/videos/1/series">Visit series 1</Link>
		</div>
	)
}

export default Videos
