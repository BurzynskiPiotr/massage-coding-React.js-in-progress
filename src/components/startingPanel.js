import React, { Component } from "react";

class StartingPanel extends Component {
  continue = (e) => {
    e.preventDefault();
    if (this.props.values.message === "") {
      console.log("alert");
    } else {
      this.props.nextStepForm();
    }
  };

  render() {
    const { values, handleMessageChange } = this.props;
    return (
      <div className="starting-panel">
        <form>
          <input
            type="text"
            placeholder="write your message here"
            onChange={handleMessageChange("message")}
            defaultValue={values.message}
          />
          <button type="submit" onClick={this.continue}>
            Accept
          </button>
        </form>
        <p className="welcoming-message">Encode your own message</p>
      </div>
    );
  }
}

export default StartingPanel;

// add clear option before save
