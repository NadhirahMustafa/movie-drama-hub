import React from 'react';
import { Link } from 'react-router-dom';
import { NavTxt } from '../constant/text';
import '../styles/Component.scss';

const NavigationBar: React.FC = () => {
  return (
    <nav className="nav--bar">
      <ul className="nav--list">
        <li><Link to="/">{NavTxt.home}</Link></li>
        <li><Link to="/nowPlaying">{NavTxt.now_playing}</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
