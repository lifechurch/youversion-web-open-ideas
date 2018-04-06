import React from "react";

export class Video extends React.Component {
    render() {
        return(
            <div>
                <h2>This is the <q>{this.props.match.params.slug}</q> video</h2>
            </div>
        );
    }
}
