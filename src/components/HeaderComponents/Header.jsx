import React from 'react';
import MenuItem from './MenuItem';
import AppLauncherIcon from './AppLauncherIcon';
import Avatar from './Avatar';
import '../../assets/styles/header.css';

export default function Header() {
  return (
    <div className="app_header">
      <div className="app_header_menu">
      <MenuItem title={"Gmail"} />
      <MenuItem title={"Images"} />
      <AppLauncherIcon />
      <Avatar />
      </div>
    </div>
  )
}
