import React, { Component } from 'react';
import { identifier } from '@babel/types';

export default class extends Component {
  state = {
    comment: "実はコメントを書いているところです。",
  }
  componentDidUpdate(loadedOnce) {
    // chosenIdが変わったらコメントを空にしましょう。
    //console.log("aa")
    if (this.props.loadedOnce) {
      this.setState({
        comment: ""
      })
    }
    
  }

  render() {
    const { comment } = this.state;
    return (
      <section className="comment-box">
        <div className="comment-area">{comment === '' ? "コメントする" : comment}</div>
      </section>
    );
  }
}