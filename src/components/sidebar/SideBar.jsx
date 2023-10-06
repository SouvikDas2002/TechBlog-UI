import React from 'react'
import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://static.toiimg.com/thumb/msid-38976312,imgsize-41272,width-400,resizemode-4/38976312.jpg' alt=''/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque sit in, asperiores voluptates dolorum quidem animi! Ab esse atque in incidunt, quia, eveniet laborum repellat cum quae quasi tempore?</p>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
