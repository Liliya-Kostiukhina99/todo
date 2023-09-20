import React from 'react';
import '/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/Footer.css';
import logoFooter from "/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/img/Justice.svg";

const year = () => +new Date().getFullYear();

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-nav">
          <img className="logo-footer" src={logoFooter} alt='логотип'/>
          <ull className="nav">
            <li className="footer-nav-items">Главная</li>
            <li className="footer-nav-items">Список</li>
            <li className="footer-nav-items">Друзья</li>
            <li className="footer-nav-items">Контакты</li>
          </ull>
        </div>
        <hr className="f-hr"></hr>
        <div className="footer-text">
          <p className="text_1">© {year()} Justice-team. All rights reserved.</p>
          <div className="text2_3">
            <p className="text_2">Terms & conditions</p>
            <p className="text_3">Privacy Policy</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;