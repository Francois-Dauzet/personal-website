import React from 'react';
import imgProfilePath from '../../assets/backgrounds/bg_page_not_found.png';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="container-not-found-page">
      <img src={imgProfilePath} alt="page not found" />
    </div>
  );
};

export default NotFoundPage;
