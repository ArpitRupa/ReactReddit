import React, { Component } from "react";
import { Input, Button, Modal, Card } from "antd";
import axios from "axios";
import "./Posts.css";

var posts = [];

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: this.props.subreddit,
      tab: this.props.tab
    };
  }

  makePost = response => {
    let children = response.data.data.children;
    if (children.length === 0) {
      this.props.onError();
      return;
    } else {
      children.map(post =>
        posts.push({
          thumbNail: post.data.thumbnail,
          title: post.data.title,
          url: post.data.url,
          comments: "https://reddit.com" + post.data.permalink
        })
      );
    }
  };

  onError = error => {
    this.props.onError();
  };

  componentWillMount() {
    axios
      .get(
        "https://reddit.com/r/" +
          this.props.subreddit +
          "/" +
          this.state.tab +
          "/.json"
      )
      .then(this.makePost)
      .catch(this.onError);
  }

  render() {
    return (
      <div>
        <h1>r/{this.state.subreddit}</h1>
        {posts.map(post =>
          <Card
            style={{
              width: "500",
              height: "auto",
              display: "block",
              margin: "0 auto"
            }}
          >
            <h1>
              <a href={post.url}>{post.title}</a>
            </h1>
            <img alt={post.title} width="25%" src={post.thumbNail} />
            <h3>
              <a href={post.comments}>Comments</a>
            </h3>
          </Card>
        )}
      </div>
    );
  }
}

export default Posts;
