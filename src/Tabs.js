import React, { Component } from "react";
import Posts from "./Posts.js";
import { Input, Button, Modal, Card } from "antd";
import "./Tabs.css";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: this.props.subreddit,
      selectedTab: "hot"
    };
  }

  updateTab(tab) {
    this.setState({
      ...this.state,
      selectedTab: tab.toLowerCase()
    });
    this.forceUpdate();
  }

  render() {
    const tabs = ["Hot", "New", "Rising", "Top", "Controversial"];
    return (
      <div className="container">
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
          onClick={() => this.props.backFunction(false)}
        >
          Back
        </Button>
        <ul className="tabs" style={{ padding: "0" }}>
          {tabs.map(function(tab) {
            return (
              <li
                className="tab"
                style={
                  tab.toLowerCase() === this.state.selectedTab
                    ? { color: "#d0021b" }
                    : { color: "#1F7CB2" }
                }
                onClick={() => this.updateTab(tab)}
                key={tab}
              >
                {tab}
              </li>
            );
          }, this)}
        </ul>
        <Posts
          subreddit={this.state.subreddit}
          onError={() => this.props.onError()}
          tab={this.state.selectedTab}
        />
      </div>
    );
  }
}

export default Tabs;
