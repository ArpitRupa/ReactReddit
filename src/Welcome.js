import React, { Component } from "react";
import { Input, Button, Modal, Card } from "antd";
import { Redirect, Route, Link } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSub: ""
    };
  }

  onSubmit(e) {
    this.setState({
      ...this.state,
      currentSub: e.target.value
    });
    this.props.updateSub(e.target.value);
  }

  onChange(e) {
    this.setState({
      ...this.state,
      currentSub: e.target.value
    });
  }

  render() {
    if (this.props.result) {
      return <Redirect push to={"/search"} />;
    } else {
      return (
        <div>
          <h1>Welcome to Repressed Reddit!</h1>
          <Input
            placeholder="Input a subreddit"
            size="large"
            style={{ width: "40vh" }}
            onPressEnter={e => this.onSubmit(e)}
            onChange={e => this.onChange(e)}
          />

          <Button
            type="default"
            style={{ color: "white", backgroundColor: "#ADE0FD" }}
            onClick={e => this.onSubmit(e)}
          >
            <Link to="/search" />
            Search
          </Button>
        </div>
      );
    }
  }
}

export default Welcome;
