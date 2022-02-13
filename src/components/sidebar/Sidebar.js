import React from 'react';
import './sidebar.css';
import {Users} from '../../utils/data'
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
  } from "@material-ui/icons";
import CloseFriend from '../closeFriend/CloseFriend';


function Sidebar() {
  return (
  <div className='sidebar'>
      <div className='sidebarWrapper'>
          <ul className='sidebarList'>
              <li className='sidebarListItem'>
                   <RssFeed className="sidebarIcon"/>
                   <span className='sidebarListItemText'>Feed</span>
              </li>
              <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
          </ul>

          <button className='sidebarButton'>
              show more
          </button>
          <hr className='sidebarHr'/>
          <ul className='sidebarFriendList'>
              {Users.map((user) =>(
                <CloseFriend key={user.id} user={user} />
              ))}

           
          </ul>
     
      </div>
  </div>
  )
}

export default Sidebar;
