import React from 'react';
import './NotFoundPage.scss';
import imgProfilePath from '../../assets/backgrounds/bg_page_not_found.png';

const NotFoundPage = () => {
  return (
    <div className="container-not-found-page">
      <img src={imgProfilePath} alt="" />
    </div>
  );
};

export default NotFoundPage;
