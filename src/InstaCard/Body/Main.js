import React from 'react';
import PropTypes from 'prop-types';
import MainIcons from './MainIcons';
import Comments from './Comments';
import CommentBox from './CommentBox'

const BodyMain = ({ theme ,data ,loadedOnce }) => {
  console.log(loadedOnce)
  return (
    <section className="card-main">
      <MainIcons theme={theme} />
      <div className="card-like-counts">100 likes</div>
      <Comments data={data}/>
      <div className="post-date">1日前</div>
      <CommentBox loadedOnce={loadedOnce}/>
    </section>
  )};

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
}

Comment.defaultProps = {
  theme: "light",
}

export default BodyMain;