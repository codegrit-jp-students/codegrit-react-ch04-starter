import React from 'react';
import PropTypes from 'prop-types';
import BodyMain from './Main';

const Body = ({ theme, data, loadedOnce }) => {
  const {
    imageUrl,
  } = data
  return(
    <section className="card-body">
      <div className="card-image">
        <img alt="メイン画像" src={imageUrl} />
      </div>
      <BodyMain theme={theme} data={data} loadedOnce={loadedOnce}/>
    </section>
  )};

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default Body;