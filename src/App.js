import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeComponent } from "./components/home-component/home-component";
import { AboutComponent } from "./components/about-component/about-component";
import { TopicsComponent } from "./components/topics-component/topics-component";

const YouVersionWebOpenIdeas = () => (
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
      </ul>

      <hr />

      <Route exact path="/" component={HomeComponent} />
      <Route path="/about" component={AboutComponent} />
      <Route path="/topics" component={TopicsComponent} />
    </div>
  </Router>
);

export default YouVersionWebOpenIdeas;