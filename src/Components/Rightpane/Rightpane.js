import React from "react";
import "./Rightpane.css";
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

export default function Rightpane() {
  return (
    <div className="rightpane">
      <div className="rightbar">

        <div className="pagesprofile">

            <span className="topic">Your Pages and Profiles</span>
            
            <ul className="pagedetails">
                <li className="page">
                  <img src="./images/yfd.jpg" alt="" className="pagepic" />
                  <span className="pagename">Young Fire Djs</span>
                  </li>
                <div className="switchpromo">
                <li className="switchpage">
                    <ChangeCircleOutlinedIcon/>
                  <span className="">Switch into Page</span>

                    </li>

                    <li className="createpromo">
                    <CampaignOutlinedIcon />
                  <span className="">Create Promotion</span>

                    </li>
                  </div>  
                   
                
            </ul>
            
        </div>
        <hr/>
        <div className="rightbarWrapper">
         <p>Sponserd</p> <br/>
          <img src="./images/Daraz.png" alt="" className="rightbarAdImg" /><br/><br/>
          <hr/><br/><p>Birthdays</p><br/>
          <div className="birthdayContainer">
            
            <img src="./images/gift.png" alt="" className="birthdayImage" />
           
            <span className="birthdayText">
              <b>Avishka Gunawardhana</b> and <b>other friends</b> have a birthday today.
            </span>
            <br/>
          </div>
          <br/>
          <hr className="rightbarHr" />

          <div className="contac">
            <p className="rightbarTitle">Contacts</p><br/>

            <div className="activefriends">

              <ul className="rightbarFriendList">

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>

                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>


                <li className="activef">
                    <img src="./images/chamodh.jpeg" alt="" className="friendpic" />
                     <span className="friendname">Chamodh Jayasinghe</span>
                </li>
               
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
