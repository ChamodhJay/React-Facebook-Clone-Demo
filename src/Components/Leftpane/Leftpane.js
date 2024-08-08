import React from 'react'
import "./Leftpane.css"
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Leftpane() {
  return (
    <div className='leftpane'>
        
      <div className="leftpaneContainer">
        <div className="leftpaneMenu">

          <li className="leftPaneMenuItems">
            <MessageIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">Messages</span>
          </li>

          <li className="leftPaneMenuItems">
            < GroupIcon  className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText"> GroupIcon </span>
          </li>

          <li className="leftPaneMenuItems">
            <RssFeedIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">RssFeedIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            < FlagIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText"> FlagIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            <CalendarMonthIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">CalendarMonthIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            <BuildIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">BuildIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            <SportsEsportsIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">SportsEsportsIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            <NewspaperIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">NewspaperIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            <WorkOutlineIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">WorkOutlineIcon</span>
          </li>

          <li className="leftPaneMenuItems">
            <AddShoppingCartIcon className='LeftpanemenuIcon'/>
            <span className="leftpaneMenuText">AddShoppingCartIcon</span>
          </li>

          <hr/>
            <div className="Pagesyouliked">
              <h3>Pages you liked</h3>
            </div>
            
            <div className="pagelist">
            <li className="pagelistItem">
              <img src="./images/chamodh.jpeg" alt="" className="pagepic" />
              <span className="pagename">Chamodh Jayasinghe</span>
            </li>

            <li className="pagelistItem">
              <img src="./images/chamodh.jpeg" alt="" className="pagepic" />
              <span className="pagename">Chamodh Jayasinghe</span>
            </li>

            <li className="pagelistItem">
              <img src="./images/chamodh.jpeg" alt="" className="pagepic" />
              <span className="pagename">Chamodh Jayasinghe</span>
            </li>

            <li className="pagelistItem">
              <img src="./images/chamodh.jpeg" alt="" className="pagepic" />
              <span className="pagename">Chamodh Jayasinghe</span>
            </li>

            <li className="pagelistItem">
              <img src="./images/chamodh.jpeg" alt="" className="pagepic" />
              <span className="pagename">Chamodh Jayasinghe</span>
            </li>
            </div>
        </div>
      </div>

    </div>
  )
}
