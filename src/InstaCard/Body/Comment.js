import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const {
    poster,
    body
  } = comment
  return (
    <li className="poster-comment">
      <a className="commenter-name">
        {poster}
      </a>
      <span className="commenter-comment">
        {body}
      </span>
    </li>
  )};

Comment.propTypes = {
  poster: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

Comment.defaultProps = {
  poster: "testuser",
  body: "テストのコメント",
}

export default Comment;
