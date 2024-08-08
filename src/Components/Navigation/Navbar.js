import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbarbox">

        <div className="navbarLeft">
            <div className="Facebooklogo">
                <img src="./images/Fb.png" alt="" className="fblogo" />
            </div>
                
        <div className="searchBox">

            <SearchIcon className="searchicon"/>
            <input placeholder='Search Facebook' className='searchInput'/>
        </div>
           
        </div>

        <div className="navbarCenter">

                <div className="navcentericons">
                    <HomeRoundedIcon fontSize='large' className='Home'/>
                    <OndemandVideoRoundedIcon fontSize='large' className='Video'/>
                    <StoreRoundedIcon fontSize='large' className='Market'/>
                    <PeopleRoundedIcon fontSize='large' className='Community' />
                    <SportsEsportsRoundedIcon fontSize='large' className='Games'/>
                </div>
        </div>

        <div className="navbarRight">

            <div className="navbaricons">
                
                

                <div className="navbaricon">

                <WidgetsRoundedIcon fontSize='large'/>
                    
                </div>  

                <div className="navbaricon">
                   <MapsUgcRoundedIcon fontSize='large'/>
                    <span className="icontag">5</span>
                </div> 

                <div className="navbaricon">
                    <CircleNotificationsRoundedIcon fontSize='large'/>
                    <span className="icontag">2</span>
                </div>   
            </div> 

            <div className="pic">
              <img src="./images/post.jpg" alt="" className="profilepic" />  
            </div>  
        </div>
    </div>

    
  )
}
