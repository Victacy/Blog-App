import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const cboxes = [ "Remember Me" ];

// This renders the status of each checkbox
class CheckMonitor extends Component {

  renderLine(k) {
    return (
	<p key={k}>  </p>
    );
  }

  render() {
    return (
	<Container>
	{cboxes.map(this.renderLine.bind(this))}
      </Container>
    );
  }
}

// The app consists of check-boxes and a compnent that renders
// depending on the value of the check-boxes
class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: {}
    };
  }

  handleChange(key, event) {
    let s=this.state.check;
    s[key]=event.target.checked;
    this.setState({check: s});
  }

  // Renders all of the check-boxes
  renderChecks() {
    return cboxes.map(
      k =>
	<Form.Check
      type='checkbox'
      label={k}
      onChange={this.handleChange.bind(this, k)}
      key={k}
	/> );
  }

  render() {
    return (
	<Container>
	
	{this.renderChecks() }

	<CheckMonitor
      check={this.state.check}
	/>
	</Container>
    );
  }
}

export default Checkbox;
