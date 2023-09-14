import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import MovieMenu from '../components/MovieMenu';
import DramaMenu from '../components/DramaMenu';
import { NavTxt } from '../constant/text';
import '../styles/Component.scss';

const NavigationBar: React.FC = () => {
  return (
    <nav className="nav--bar">
      <ul className="nav--list">
        <li><Link to="/"><Grid className='nav--title'>{NavTxt.home}</Grid></Link></li>
        <li><MovieMenu /></li>
        <li><DramaMenu /></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
