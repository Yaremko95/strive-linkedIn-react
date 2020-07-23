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
        `https://agile-brushlands-83006.herokuapp.com/comments/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: Auth.auth,
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

  onKeyPress = (target) => {
    if (target.charCode === 13) {
      // alert('Enter clicked!!!');
      this.onSubmit();
    }
  };
  onSubmit = async () => {
    const { postId, newFetch } = this.props;
    // this.setState({
    //   elementId: postId,
    // });

    try {
      let response = await fetch(
        " https://agile-brushlands-83006.herokuapp.com/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            Authorization: Auth.auth,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let newComment = {
          comment: "",
          rate: "5",
          elementId: this.props.postId,
        };
        this.setState({ comment: newComment });

        this.fetchComments(postId);
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
      onKeyPress: (target) => this.onKeyPress(target),
      ...this.state,
      fetchComments: () => this.fetchComments(),
    });
  }
}

export default AddComment;
