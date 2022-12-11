import ProgressBar from 'react-bootstrap/ProgressBar';
import {CgMail} from 'react-icons/cg'
import docker from '../images/stack/docker.png'
import flask from '../images/stack/flask.png'
import php from '../images/stack/php.png'
import nodejs from '../images/stack/nodejs.png'
import react from '../images/stack/react.png'
import python from '../images/stack/python.png'


import mule from '../images/mule.jpeg'
const BottomBody =()=>{
    return(
                    
        <div className='bottom-body'>
            <div className="top-card-content">
                <h3>Tech Stacks I'm Well Skilled With</h3>
                <div className='techstack'>
                <img  className='tech-stack-images' src={python} height="60" width="60"/>
                <img  className='tech-stack-images' src={flask} height="60" width="60"/>
                <img  className='tech-stack-images' src={react} height="60" width="60"/>
                <img  className='tech-stack-images' src={nodejs} height="60" width="60"/>
                <img  className='tech-stack-images' src={php} height="60" width="60"/>
                <img  className='tech-stack-images' src={docker} height="60" width="60"/>
                </div>
             
            </div>
  
<div className="notes-list">
    <div>
        <h2>Education Background & Experience</h2>
        <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>

    </div>
    <div>
  <h1></h1>
  <img class = "profile" src={mule} height="400" width="450"/>
    </div>

</div>




        
                    </div>
    )
}
export default BottomBody;