import React from 'react';
import logo from "/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/img/Logo.svg";
import avatar from "/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/img/Group 41.png";
import notification from "/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/img/Bell.svg";
import Nav from './Nav';
import Button from './UI/button/Button';
import '/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/Header.css';

const Header = () => {
    return (
        <div className="header">
        <img className="logo" src={logo} alt='логотип'/>
          <Nav></Nav>
          <div className="BtnImg">
          <Button appearance='ExitBtn'>Выйти</Button>
          <img className="icon-item_1" src = {notification} alt='уведомления'></img>
          <img className="icon-item_2" src = {avatar} alt='аватар'></img>
          </div>
        </div> 
    );
};

export default Header;