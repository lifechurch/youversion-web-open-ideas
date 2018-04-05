import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class TopicsComponent extends React.Component {
    render() {
        return(
            <div>
                <h2>Topics</h2>
                <ul>
                <li>
                    <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                </li>
                </ul>
            
                <Route path={`${this.props.match.url}/:topicId`} component={this.Topic} />
                <Route
                exact
                path={this.props.match.url}
                render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        );
    }

    Topic = ({ match }) => (
        <div>
          <h3>{match.params.topicId}</h3>
        </div>
      );
}