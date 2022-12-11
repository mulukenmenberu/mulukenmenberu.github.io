import mule from '../images/mule.jpeg'
import {CgMail} from 'react-icons/cg'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
const Testimonial =()=>{
    return(
        <div className='testimonial' id ='testimonial'>
        <h1>Testimonials</h1>
        <div className='testimonial-list'>
            <div className='testimonial-card'>
                <div className='testimonial-title'>
                  <div className="coleague-image">
                  <img class = "colleague-image" src={mule} height="50" width="50"/>
                  </div>
                  <div className="coleague-address">
                    <b className='colleague-name'>Diresilign Addis (Phd) </b><br></br>
                    <MdLocationOn/> Debre Markos University <br></br>
                    <CgMail className='mail-icon'/>  direselign@gmail.com<br></br>
                  </div>
                </div>
                <hr></hr>
                <div className='image'>
                <div className='project-desc'>
                   <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
                </div>
                </div>
            </div>
          
            <div className='testimonial-card'>
                <div className='testimonial-title'>
                  <div className="coleague-image">
                  <img class = "colleague-image" src={mule} height="50" width="50"/>
                  </div>
                  <div className="coleague-address">
                    <b className='colleague-name'>Diresilign Addis (Phd) </b><br></br>
                    <CgMail className='mail-icon'/>  direselign@gmail.com<br></br>
                  </div>
                </div>
                <div className='image'>
                <div className='project-desc'>
                   <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
                </div>
                </div>
            </div>

            <div className='testimonial-card'>
                <div className='testimonial-title'>
                  <div className="coleague-image">
                  <img class = "colleague-image" src={mule} height="50" width="50"/>
                  </div>
                  <div className="coleague-address">
                    <b className='colleague-name'>Diresilign Addis (Phd) </b><br></br>
                    <CgMail className='mail-icon'/>  direselign@gmail.com<br></br>
                  </div>
                </div>
                <div className='image'>
                <div className='project-desc'>
                   <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
                </div>
                </div>
            </div>

            <div className='testimonial-card'>
                <div className='testimonial-title'>
                  <div className="coleague-image">
                  <img class = "colleague-image" src={mule} height="50" width="50"/>
                  </div>
                  <div className="coleague-address">
                    <b className='colleague-name'>Diresilign Addis (Phd) </b><br></br>
                    <CgMail className='mail-icon'/>  direselign@gmail.com<br></br>
                  </div>
                </div>
                <div className='image'>
                <div className='project-desc'>
                   <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
                </div>
                </div>
            </div>
    
            
            
            
        </div>
    </div>
    )
}
export default Testimonial