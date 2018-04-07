import React from 'react';
import { Link } from 'react-router-dom';
import TitleVideo from './title-video'
import { VerticalSpace } from '../../melos'

export class Videos extends React.Component {
	render() {
		return (
			<div>
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
		);
	}
