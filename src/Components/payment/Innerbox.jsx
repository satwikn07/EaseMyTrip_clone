
import React from "react";
import HiddenBox from "./HiddenBox";

export default class InnerBox extends React.Component {
  state = {
    buttonClicked: false,
  };
  handleClick = () => {
    this.setState({
      buttonClicked: !this.state.buttonClicked,
    });
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.children}
        {this.state.buttonClicked && <HiddenBox />}
      </div>
    );
  }
}
