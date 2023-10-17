import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Grid } from '@mui/material';
import { NavTxt } from '../constant/text';
import { RouterConst } from '../constant/constants';

export default function MovieMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Grid className="menu--title">Movie</Grid>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className="menu--list"
      >
        <MenuItem onClick={handleClose}><Link to={RouterConst.MOVIE_NOW_PLAYING}>{NavTxt.now_playing}</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={RouterConst.MOVIE_TOP_RATED}>{NavTxt.top_rated}</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={RouterConst.MOVIE_UPCOMING}>{NavTxt.upcoming}</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={RouterConst.MOVIE_TRENDING}>{NavTxt.trending}</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={RouterConst.MOVIE_DISCOVER}>{NavTxt.discover}</Link></MenuItem>
      </Menu>
    </div>
  );
}
