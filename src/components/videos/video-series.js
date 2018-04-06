import React from "react";
import { Link } from "react-router-dom";

export class VideoSeries extends React.Component {
    render() {
        return(
            <div>
                <h2>This is video series #{this.props.match.params.id}</h2>

                { /* TODO: REMOVE THIS PLACEHOLDER SECTION */ }
                <hr />
                <Link to="/videos/example">Watch the <q>Example</q> video</Link>
            </div>
        );
    }
}
