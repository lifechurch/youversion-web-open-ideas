import React from "react";
import { Link } from "react-router-dom";

export class Videos extends React.Component {
    render() {
        return(
            <div>
                <h2>Videos are encapsulated here...</h2>

                { /* TODO: REMOVE THIS PLACEHOLDER SECTION */ }
                <hr />
                <Link to="/videos/1/series">Visit series 1</Link>
            </div>
        );
    }
}
