import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from '@youversion/melos/dist/components/containers/Card'
import LazyImage from '@youversion/melos/dist/components/images/LazyImage'
import '../../Thumbnail.css'


const VideoThumbnail = (props) => {
	const split_runtime = props.runtime.split(':')

	return (
			<Card className="thumbnail" key={props.id} >
				<Link to={props.link}>
					<LazyImage
						width="100%"
						src={props.thumbnail}
					/>
					<div className="info">
						<div className="info-description">
							<h3 className="title">{props.title}</h3>
							<span className="runtime">
								{(split_runtime[0] > 0) ? `${split_runtime[0]}:` : ''}
								{(split_runtime[1] > 0) ? `${split_runtime[1]}` : ''}
								{(split_runtime[2] > 0) ? `:${split_runtime[2]}` : ''}
							</span>
						</div>
					</div>
				</Link>
			</Card>
	)
}

VideoThumbnail.propTypes = {
	id: PropTypes.number,
	runtime: PropTypes.string,
	link: PropTypes.string,
	thumbnail: PropTypes.string,
	title: PropTypes.string
}

export default VideoThumbnail
