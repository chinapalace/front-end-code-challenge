import React, { Component } from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import PartnerSelector from "./components/PartnerSelector";
import NavBar from "./components/NavBar/NavBar";
import Bodies from "./components/Bodies";
import Body from "./components/Body";
import FAB from "./components/FAB";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./semantic/dist/semantic.min.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    // const res = await fetch(`/api/partners/${this.state.partner}/bodies`);
    // const bodies = await res.json();
    // this.setState({ bodies })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PartnerSelector} />
          <Route path="/:partner" component={NavBar} />
          <br />
          <br />
          <Route exact path="/:partner" component={Bodies} />
          <Route path="/:partner" component={FAB} />
          <Route path="/:partner/:gender/:shape" component={Body} />
        </div>
      </Router>
    );
  }
}

export default App;
