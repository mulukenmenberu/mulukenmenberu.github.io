
import {DiReact} from 'react-icons/di'
import {FaPython, FaNodeJs, FaDocker} from 'react-icons/fa'
import {CgMail} from 'react-icons/cg'
import {BsTelephoneFill} from 'react-icons/bs'
import skills from '../images/skills.png'
import mule from '../images/mule.jpeg'
import Typewriter from "typewriter-effect";

const Body = ()=>{
    return (
        <div className="body-content">
         
            <div className="slogan-text">
                <h1>HIRE ME!</h1>
                {/* <div className="skills">
                    </div>
                     */}
                <p className='description'>I'm an exceptional and talented developer graduated with Msc degree in Information Technology with outstanding achivement. Passionate in coding & Ranked first in Several national creativity competitions. Skills [#React, #Redux, #Nodejs, #Android, #PHP, #MYSQL,#Python &Many more tech fields ]</p>
                    <button class = 'get-in-touch'>Download Resume</button>
                   
            </div>
            
            <div class="card">
               <div class="top-card">
                <h3>HEY, I'M MULUKEN. I CAN CODE YOUR DREAM</h3>
                <Typewriter
                 options={{
                    strings: ['Python', 'React',"NodeJS"],
                    autoStart: true,
                    loop: true,
                  }}
                 
                    />
                <div class = "header-circle" />

               </div>
               <div class="middle-card">
                
                <img class = "profile" src={mule} height="180" width="180"/>
               

            </div>
               <div className="bottom-card">
                <span className="address">
                 <CgMail className='icon'/><i className="fas fa-message">mulerapps@gmail.com</i>
                  <BsTelephoneFill className='icon'/> <i className="fas fa-phone">+251935713866</i> 
                   </span>
               </div>
            </div>

 
        </div>
    )
}

export default Body;