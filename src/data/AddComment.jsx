import React, { Component } from "react";
import Auth from "../authorization/Auth";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        comment: "",
        rate: 5,
        elementId: this.props.postId,
      },
      comments: [],
    };
  }

  componentDidMount = () => {
    this.fetchComments(this.props.postId);
  };
  fetchComments = async (id) => {
    const { postId } = this.props;
    try {
      let response = await fetch(
        `https://striveschool.herokuapp.com/api/comments/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic " + btoa("user27:ZGDWyFCA8umbgpvZ"),
          },
        }
      );
      let comments = await response.json();
      this.setState({
        comments: comments,
      });
      console.log(this.state.comments);
    } catch (e) {}
  };

  onChange = (event) => {
    let comment = this.state.comment;
    let currentId = event.currentTarget.id;
    comment[currentId] = event.currentTarget.value;
    this.setState({ comment: comment });
  };
  onSubmit = async () => {
    const { postId, newFetch } = this.props;
    // this.setState({
    //   elementId: postId,
    // });

    try {
      let response = await fetch(
        " https://striveschool.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            Authorization: "Basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("good");
        this.fetchComments(postId);

        this.setState({
          comment: "",
          rate: "5",
          elementId: this.props.postId,
        });
      } else {
        let json = await response.json();
        alert(json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return this.props.children({
      onSubmit: () => this.onSubmit(),
      onChange: (e) => this.onChange(e),
      ...this.state,
      fetchComments: () => this.fetchComments(),
    });
  }
}

export default AddComment;
