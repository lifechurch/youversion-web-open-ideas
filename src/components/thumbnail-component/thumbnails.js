import React from 'react'
import {videoCollectionJson} from '../../api/video-api-mock'
import VideoThumbnail from './thumbnail-component'
import PropTypes from 'prop-types'

const renderThumbnails = (response) => {
    const link = `/media/${response.id}`;
    return <VideoThumbnail
        thumbnail={response.thumbnails[0].url}
        id={response.id}
        link={link}
        title={response.title}
        runtime={response.runtime}
    />
}

const Thumbnails = (props) => {
    const response = videoCollectionJson.response.data.sub_videos;

    return (
        <div className="thumbnails">
            {response.map(renderThumbnails)}
        </div>
    )
}

Thumbnails.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    }).isRequired
}

export default Thumbnails
