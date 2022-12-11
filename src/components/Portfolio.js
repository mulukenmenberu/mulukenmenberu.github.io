import shoping from '../images/shop.jpeg'
const Portfolio = ()=>{
    return (
        <div className='portfolio' id ='portfolio'>
    <h1>Check My Portifolio</h1>
    <div className='project-list'>
        <div className='project-card'>
            <div className='project-title'>
               <span>Project Title: Smart Ecommerce System </span> 
               <span>Project Type: Full Stack </span> 
               <span>Tech Stack : React, Python, Flask, ML</span>
            </div>
            <div className='image'>
            <img class = "port" src={shoping} width="400" height="250"/>
            <div className='project-desc'>
               <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
            </div>
            <button className='get-in-touch goto'>Goto Project</button>
            </div>
        </div>
        <div className='project-card'>
            <div className='project-title'>
               <span>Project Title: Issue Tracking API </span> 
               <span>Project Type: Back-end </span> 
               <span>Tech Stack : Python, Flask, Postgres</span>
            </div>
            <div className='image'>
            <img class = "port" src={shoping} width="400" height="250"/>
            <div className='project-desc'>
               <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
            </div>
            <button className='get-in-touch goto'>Goto Project</button>
            </div>
        </div>

        <div className='project-card'>
            <div className='project-title'>
               <span>Project Title: SIMS </span> 
               <span>Project Type: Back-end </span> 
               <span>Tech Stack : Nodejs, Express, MongoDB</span>
            </div>
            <div className='image'>
            <img class = "port" src={shoping} width="400" height="250"/>
            <div className='project-desc'>
               <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
            </div>
            <button className='get-in-touch goto'>Goto Project</button>
            </div>
        </div>

        <div className='project-card'>
            <div className='project-title'>
               <span>Project Title: My React Dashboard </span> 
               <span>Project Type: Front-end </span> 
               <span>Tech Stack : React</span>
            </div>
            <div className='image'>
            <img class = "port" src={shoping} width="400" height="250"/>
            <div className='project-desc'>
               <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
            </div>
            <button className='get-in-touch goto'>Goto Project</button>
            </div>
        </div>

        <div className='project-card'>
            <div className='project-title'>
               <span>Project Type: Full Stack </span> 
               <span>Tech Stack : React, Python, Flask, ML</span>
            </div>
            <div className='image'>
            <img class = "port" src={shoping} width="400" height="250"/>
            <div className='project-desc'>
               <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
            </div>
            <button className='get-in-touch goto'>Goto Project</button>
            </div>
        </div>
        <div className='project-card'>
            <div className='project-title'>
               <span>Project Type: Full Stack </span> 
               <span>Tech Stack : React, Python, Flask, ML</span>
            </div>
            <div className='image'>
            <img class = "port" src={shoping} width="400" height="250"/>
            <div className='project-desc'>
               <span>Project Type: Full Stasdhabdgauyegdf absuydaduyeck </span> 
            </div>
            <button className='get-in-touch goto'>Goto Project</button>
            </div>
        </div>
    </div>
</div>
    )
}

export default Portfolio;