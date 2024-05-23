import "./Footer.scss";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        ></div>
        <div className="contacts">
          <h2 className="title  title_3 title-contacts">Контакты</h2>
          <div className="contacts-info text">
            <p>адрес: 75001 Москва, Россия</p>
            <p>
              телефон: <a href="tel:+330140205050">+33(0) 1 40 20 50 50</a>
            </p>
            <p>
              почта: <a href="info@restaurant.ru">info@restaurant.ru</a>
            </p>
          </div>
        </div>
        <ul className="social-media">
          <li>
            <a href="https://www.youtube.com" aria-label="youtube">
              <div className="icon youtube"></div>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" aria-label="instagram">
              <div className="icon instagram"></div>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" aria-label="facebook">
              <div className="icon facebook"></div>
            </a>
          </li>
          <li>
            <a href="http://twitter.com" aria-label="twitter">
              <div className="icon twitter"></div>
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com" aria-label="pinterest">
              <div className="icon pinterest"></div>
            </a>
          </li>
        </ul>
      </div>
      <hr className="footer-line" />
      <div className="container date-container">
        <p >©2024</p>
        <p >MilanaKard</p>
      </div>
    </footer>
  );
};

export default Footer;
