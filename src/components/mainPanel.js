import React, { Component } from "react";
import StartingPanel from "./startingPanel";
import EditingPanel from "./editingPanel";

export class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      message: "",
    };
  }

  handleMessageChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Steps in form
  nextStepForm = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStepForm = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;
    const { message } = this.state;
    const values = {
      message,
    };

    switch (step) {
      default:
        return (
          <StartingPanel
            nextStepForm={this.nextStepForm}
            handleMessageChange={this.handleMessageChange}
            values={values}
          />
        );

      case 2:
        return (
          <EditingPanel
            nextStepForm={this.nextStepForm}
            prevStepForm={this.prevStepForm}
            handleMessageChange={this.handleMessageChange}
            values={values}
          />
        );
    }
  }
}

// to do:

// ...

// undo the coding section on click
