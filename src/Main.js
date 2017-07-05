import React, { Component } from "react";
import Tabs from "./Tabs.js";
import Posts from "./Posts.js";
import Welcome from "./Welcome.js";
import { Input, Button, Modal, Card } from "antd";
import "./Main.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect, Route, Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultPage: false,
      errorPage: false,
      mainPage: true,
      currentSub: ""
    };
  }

  onSubmit(e) {
    this.setState({
      ...this.state,
      resultPage: true,
      mainPage: false
    });
  }

  onChange(e) {
    this.setState({
      ...this.state,
      currentSub:
        e.target.value.charAt(0).toUpperCase() +
          e.target.value.slice(1).toLowerCase()
    });
  }

  onError() {
    this.setState({
      ...this.state,
      errorPage: true,
      resultPage: false,
      mainPage: false,
      currentsub: ""
    });
  }

  backFunction() {
    this.setState({
      ...this.state,
      currentSub: "",
      resultPage: false,
      mainPage: true,
      errorPage: false
    });
  }

  render() {
    let posts = [];
    return (
      <div className="container">
        {this.state.resultPage &&
          <div>
            <Tabs
              subreddit={this.state.currentSub}
              backFunction={() => this.backFunction()}
              onError={() => this.onError()}
            />
          </div>}
        {this.state.mainPage &&
          <div>
            <h1>Welcome to Repressed Reddit!</h1>
            <form>
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
                Search
              </Button>
            </form>
          </div>}
        {this.state.errorPage &&
          <div>
            <Button
              type="default"
              style={{
                color: "black",
                backgroundColor: "#ADE0FD",
                width: "18vh",
                height: "8vh",
                position: "fixed",
                top: "0px",
                left: "0px",
                fontSize: "20px"
              }}
              onClick={() => this.backFunction()}
            >
              Back
            </Button>
            <h2 style={{ position: "fixed", top: "20vh" }}>
              Error! Make sure you entered a valid subreddit!!
            </h2>
          </div>}
      </div>
    );
  }
}

export default Main;
