import React from 'react';
import { Link } from 'react-router-dom';
import TitleVideo from './title-video'

export class Videos extends React.Component {
	render() {
		return (
			<div>
				{Array(10).fill('').map((video, index) => {
					return (
						<TitleVideo imgUrl="https://placebear.com/g/720/380" title="Bear with me" key={`vid-${index}`} />
					)
				})}
				<hr />
				<Link to="/videos/1/series">Visit series 1</Link>
			</div>
		);
	}
}
