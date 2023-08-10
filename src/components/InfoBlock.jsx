import React from 'react';
import './UI/InfoBlock.css';
const InfoBlock = ({ title, photoUrl, subtitle, text }) => {
  return (
    <div className="info-block">
      <h2 className="info-block__header">{title}</h2>
      <div className="info-block__content">
        <div className="info-block__content-left">
          <img src={photoUrl} alt="Info" className="info-block__photo" />
        </div>
        <div className="info-block__content-right">
          <h3 className="info-block__subtitle">{subtitle}</h3>
          <p className="info-block__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
