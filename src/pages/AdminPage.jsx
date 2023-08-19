import React from 'react';
import summaryIcon from '../img/summary-icon.svg';
import PhoneNumberFormatter from '../components/phoneNumber';
import './UI/AdminPage.css'

export default function AdminPage() {


  return (
    <div>
      <section className="admin">
        <div className="admin__wrapper">
          <div className="admin__nav">
            <ul className="admin__nav-list">
              <li className="admin__nav-item">
                <span className="admin__nav-navbar active-nav"></span>
                <p className="admin__nav-name">Заявки</p>
              </li>
              <li className="admin__nav-item">
                <span className="admin__nav-navbar"></span>
                <p className="admin__nav-name">Принятые</p>
              </li>
              <li className="admin__nav-item">
                <span className="admin__nav-navbar"></span>
                <p className="admin__nav-name">Отклонённые</p>
              </li>
            </ul>
          </div>

          <div className="admin__claims">
            <ul className="admin__claims-list">
              {claimsData.map((claim) => (
                <li className="admin__claims-item" key={claim.id}>
                  <div className="admin__claims-head">
                    <h3 className="admin__claims-head_item admin__claims-name">{claim.name}</h3>
                    <h3 className="admin__claims-head_item admin__claims-job">{claim.job}</h3>
                    <h3 className="admin__claims-head_item admin__claims-phone">{<PhoneNumberFormatter phoneNumber={claim.phone} />}</h3>
                    <h3 className="admin__claims-head_item admin__claims-email">{claim.email}</h3>
                  </div>
                  <div className="admin__claims-content">
                    <div className="admin__claims-summary">
                      <a href={claim.summaryLinkSrc} className="admin__claims-summary" target='_blank'><img src={summaryIcon} alt="" className="admin__claims-icon" /> Скачать резюме</a>
                    </div>

                    <div className="admin__claims-choice">
                      <button className="admin__claims-accept admin__claims-button"><i className="ri-check-line"></i> Принять</button>
                      <button className="admin__claims-recept admin__claims-button"><i className="ri-close-line"></i> Отклонить</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const claimsData = [
  {
    id: 1,
    name: "Медет Хайдаров",
    job: "Backend-Разработчик",
    phone: "+77786491478",
    email: "mgaiidarov@gmail.com",
    summaryLinkSrc: "https://www.youtube.com/",
  },
  {
    id: 2,
    name: "Мейрамбек Кадыржан",
    job: "Frontend-Разработчик",
    phone: "+77788983567",
    email: "mikosh.armanov@gmail.com",
    summaryLinkSrc: "https://www.youtube.com/",
  },
  {
    id: 3,
    name: "Нурсултан Назарбаев",
    job: "Бывший президент",
    phone: "+77777777777",
    email: "nursultan.nazarbayev@gmail.com",
    summaryLinkSrc: "https://www.youtube.com/",
  },
  {
    id: 4,
    name: "Касым-жомарт Токаев",
    job: "Президент Казахстана",
    phone: "+77777777777",
    email: "kasymzhomart.tokaev@gmail.com",
    summaryLinkSrc: "https://www.youtube.com/",
  },
  {
    id: 5,
    name: "Альбина Кадыржанова",
    job: "Frontend-Разработчик",
    phone: "+77789307867",
    email: "albina.kadyrzhanova@gmail.com",
    summaryLinkSrc: "https://www.youtube.com/",
  },
]
