import React from 'react'
import "./Postpane.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import SentimentVerySatisfiedRoundedIcon from '@mui/icons-material/SentimentVerySatisfiedRounded';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
export default function Postpane() {

  
  return (
    <div className='postpane'>

      
      <div className="Storycard">

      <Box 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 150,
          height: 200,
        },
      }}
    >
      
      <Paper elevation={5} />
      <Paper elevation={5} />
      <Paper elevation={5} />
      <Paper elevation={5} />

</Box>



      </div>

      <div className='share' >

        <div className="shareWrapper">
            <div className="shareTop">
            <img className='shareProfileImage' src={"./images/post.jpg"} alt="" />
            <div className="shareInputCont"></div>
            <input placeholder="What's on your mind,Nimesha?"   className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareButtom">
             <div className="shareOptions">
             <div className="shareOption">
                    <VideoCameraBackIcon htmlColor='red' className='shareIcon'/>
                    <span className="shareOptionLongText">
                        Live video
                    </span>
                    <span className="shareOptionText">
                        Live
                    </span>
                </div>
                <div className="shareOption">
                    <PermMediaIcon htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionLongText">
                        Photo/video
                    </span>
                    <span className="shareOptionText">
                        Gallery
                    </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='orange' className='shareIcon'/>
                    <span className="shareOptionLongText">
                       Feeling/Activity
                    </span>
                    <span className="shareOptionText">
                       Feel
                    </span>
                </div>
             </div>
            </div> 
             </div>

    </div>

    <div className="post1">

        <div className="friendspost">
          
            <div className="friendnamepropic">

                <div className="postpp">

                <img className='postppImage' src={"./images/post.jpg"} alt="" />
                </div>

                <div className="postpn">
                <span><b>Nimesha Chamodh</b> is in <b>Polonnaruwa</b></span>
                </div>

                <div className="postRsideCloseOpbtn">

                <MoreHorizIcon fontSize='large' htmlColor='Grey'/>

                <CloseIcon fontSize='large' htmlColor='grey'/>
                  
                </div>
            </div>



            <div className="friendpost">

                <div className="friendpostimg">

                <img src="./images/post.jpg" alt="" className="postimg" />

                </div>

                

            </div>

           

            <div className="nofLikecsPallet">

                <div className="nofreaction">
                    
                        
                        <RecommendRoundedIcon htmlColor='skyblue'/>
                        <SentimentVerySatisfiedRoundedIcon htmlColor='orange'/>
                       
                </div>
                <div className="reactionamount">
                <span >
                        2.4K
                    </span>
                </div>

                <div className="commentsamount">
                <span >
                        2.4K comments
                    </span>
                </div>

                <div className="sharesamount">
                <span >
                        35 shares
                    </span>
                </div>

            </div>

        
            <hr className='hrbottom'></hr>
            <div className="likecommentsharePallet">

                <div className="likeicon">
                    <ThumbUpAltOutlinedIcon htmlColor='blue'/>
                    <span>Like</span>

                </div>

                <div className="commenticon">
                   <ModeCommentOutlinedIcon/>
                   <span>Comment</span>
                </div>

                <div className="shareicon">
                    
                    <ReplyRoundedIcon/>
                    <span>Share</span>
                </div>

            </div>
            <hr className='hrbottom'></hr>

        </div>

      
    </div>
    <br/><br/>


    <div className="post1">

<div className="friendspost">
  
    <div className="friendnamepropic">

        <div className="postpp">

        <img className='postppImage' src={"./images/dilka.jpg"} alt="" />
        </div>

        <div className="postpn">
        <span><b>Chamod Dilka</b> is in <b>Colombo</b></span>
        </div>

        <div className="postRsideCloseOpbtn">

        <MoreHorizIcon fontSize='large' htmlColor='Grey'/>

        <CloseIcon fontSize='large' htmlColor='grey'/>
          
        </div>
    </div>



    <div className="friendpost">

        <div className="friendpostimg">

        <img src="./images/dilka.jpg" alt="" className="postimg" />

        </div>

        

    </div>

   

    <div className="nofLikecsPallet">

        <div className="nofreaction">
            
                
                <RecommendRoundedIcon htmlColor='skyblue'/>
                <SentimentVerySatisfiedRoundedIcon htmlColor='orange'/>
               
        </div>
        <div className="reactionamount">
        <span >
                2.4K
            </span>
        </div>

        <div className="commentsamount">
        <span >
                2.4K comments
            </span>
        </div>

        <div className="sharesamount">
        <span >
                35 shares
            </span>
        </div>

    </div>


    <hr className='hrbottom'></hr>
    <div className="likecommentsharePallet">

        <div className="likeicon">
            <ThumbUpAltOutlinedIcon htmlColor='blue'/>
            <span>Like</span>

        </div>

        <div className="commenticon">
           <ModeCommentOutlinedIcon/>
           <span>Comment</span>
        </div>

        <div className="shareicon">
            
            <ReplyRoundedIcon/>
            <span>Share</span>
        </div>

    </div>
    <hr className='hrbottom'></hr>

</div>


</div>

<div className="post1">

        <div className="friendspost">
          
            <div className="friendnamepropic">

                <div className="postpp">

                <img className='postppImage' src={"./images/jayashan.jpg"} alt="" />
                </div>

                <div className="postpn">
                <span><b>Jayashan</b> is in <b>Galle</b></span>
                </div>

                <div className="postRsideCloseOpbtn">

                <MoreHorizIcon fontSize='large' htmlColor='Grey'/>

                <CloseIcon fontSize='large' htmlColor='grey'/>
                  
                </div>
            </div>



            <div className="friendpost">

                <div className="friendpostimg">

                <img src="./images/jayashan.jpg" alt="" className="postimg" />

                </div>

                

            </div>

           

            <div className="nofLikecsPallet">

                <div className="nofreaction">
                    
                        
                        <RecommendRoundedIcon htmlColor='skyblue'/>
                        <SentimentVerySatisfiedRoundedIcon htmlColor='orange'/>
                       
                </div>
                <div className="reactionamount">
                <span >
                        2.4K
                    </span>
                </div>

                <div className="commentsamount">
                <span >
                        2.4K comments
                    </span>
                </div>

                <div className="sharesamount">
                <span >
                        35 shares
                    </span>
                </div>

            </div>

        
            <hr className='hrbottom'></hr>
            <div className="likecommentsharePallet">

                <div className="likeicon">
                    <ThumbUpAltOutlinedIcon htmlColor='blue'/>
                    <span>Like</span>

                </div>

                <div className="commenticon">
                   <ModeCommentOutlinedIcon/>
                   <span>Comment</span>
                </div>

                <div className="shareicon">
                    
                    <ReplyRoundedIcon/>
                    <span>Share</span>
                </div>

            </div>
            <hr className='hrbottom'></hr>

        </div>

      
    </div>


      
    
    </div>
  )
}
