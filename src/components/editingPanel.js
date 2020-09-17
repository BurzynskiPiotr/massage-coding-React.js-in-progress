import React, { Component } from "react";

class EditingPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnlyMessage: true,
      warningEmptyMessage: false,
      warningEditorIsOpen: false,
    };
  }

  continue = (e) => {
    e.preventDefault();
    if (this.props.values.message === "") {
      this.setState({ warningEmptyMessage: true });
    } else if (this.state.readOnlyMessage === false) {
      this.setState({ warningEditorIsOpen: true });
    } else {
      this.props.nextStepForm();
    }
  };

  goBack = (e) => {
    this.props.prevStepForm();
  };

  editMessage = (e) => {
    e.preventDefault();
    this.setState({ readOnlyMessage: false });
  };

  saveMessage = () => {
    if ((this.props.values.message = "")) {
      this.setState({ warningEmptyMessage: true });
    } else {
      this.setState({ readOnlyMessage: true });
    }
  };

  render() {
    const { values, handleMessageChange } = this.props;
    return (
      <div className="editing-panel">
        <p className="message">Your message:</p>
        <input
          className="input-message"
          type="text"
          placeholder="edit your message here"
          onChange={handleMessageChange("message")}
          defaultValue={values.message}
          readOnly={this.state.readOnlyMessage}
        />
        <div
          className={
            this.state.readOnlyMessage
              ? "editing-tools hidden"
              : "editing-tools"
          }
        >
          <p>editor is open</p>
          <button onClick={this.saveMessage}>save</button>
        </div>
        <form>
          <div className="code-selector"></div>
          <div className="action-buttons">
            <button onClick={this.goBack}>go back</button>
            <button onClick={this.editMessage}>edit</button>
            <button type="submit" onClick={this.continue}>
              continue
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditingPanel;

// need to add warnings
// may be a problem with values.message
