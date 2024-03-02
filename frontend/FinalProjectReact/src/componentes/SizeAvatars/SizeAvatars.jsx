import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
export default function SizeAvatars() {
  return (
    <Link to='/app/ownprofile'>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56, marginBottom: 2, boxShadow:'0 0 10px 5px rgba(0, 0, 0, 0.5)'}}/>
      </Link>
  );
}