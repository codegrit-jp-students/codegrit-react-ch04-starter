import React from 'react';

const Header = ({ theme, data }) => {
  const {
    posterAvatar,
    poster
  } = data;
  return (
    <section className="card-header">
      <div className="poster-avatar">
        <img alt="アバター" src={posterAvatar} />
      </div>
      <div className="poster-name">
        {poster}
      </div>
    </section>
  )};

export default Header;