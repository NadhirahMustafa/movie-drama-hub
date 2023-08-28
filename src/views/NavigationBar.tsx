import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Component.scss';

const NavigationBar: React.FC = () => {
  return (
    <nav className="nav--bar">
      <ul className="nav--list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nowPlaying">Now Playing</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
