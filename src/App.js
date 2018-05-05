import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Topics from './components/Topics'
import Video from './components/videos/video'
import VideoSeries from './components/videos/video-series'
import Videos from './components/videos/videos'
import Thumbnail from './components/thumbnail-component/thumbnails'
import SeriesHeroPage from './components/series-hero/series-hero-page/series-hero-page'

const YouVersionWebOpenIdeas = () => {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
					<li>
						<Link to="/videos">Videos</Link>
					</li>
					<li>
						<Link to="/thumbnail">Thumbnail</Link>
						<Link to="/series-hero">Series Hero</Link>
					</li>
				</ul>

				<hr />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />
				<Route path="/videos" component={Videos} />
				<Route path="/thumbnail" component={Thumbnail} />
				<Route path="/series-hero" component={SeriesHeroPage} />
				<Route exact path="/videos/:id/series" component={VideoSeries} />
				<Route exact path="/videos/:slug" component={Video} />
			</div>
		</Router>
	)
}

export default YouVersionWebOpenIdeas
