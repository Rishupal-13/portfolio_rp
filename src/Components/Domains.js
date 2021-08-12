import React from 'react'
import pic2 from './images/download.jpg'
import pic3 from './images/mljpg.jpg'
import pic4 from './images/st.png'
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react';
        
   
function Domains() {

 
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick= () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="domains" id = "domains">
        <div className = "project-port">
         <div className = "container" >
            <div className = "section-title">
                <h2 > My domains </h2>
                <p>These are the three fields I work on. I have experience in each of them and have made several individual and group projects in these domains.
                
                </p> 
                <h5>Flip the card to see the respective skills </h5>
            </div> 
            <div className = "row">
               <div className = "col-12 col-md-4" id = "my-cards" >
               <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                   <div className = "card">
                        <img src = { pic2 } alt = "pic2" className = "img-fluid" />
                        <div className = "card-body" >
                           <h5 class = "card-title" > WEB DEVELOPMENT </h5>
                           <p class = "card-text" >
                          
                           </p> 
                           <button class = "btn btn-secondary" onClick={handleClick} >Flip</button>
                        </div> 
                    </div> 
                    <div className = "card">
                       
                        <div className = "card-body" >
                           <h5 class = "card-title" > Web Dev </h5>
                           <p class = "card-text" >
                           <ul>
                                <li>HTML, CSS, Javascript, Bootstrap</li>
                                <li>Reactjs, Redux, React Native</li>
                                <li>Djago, sql</li>
                            </ul>
                           </p> 
                           <button className = "btn btn-secondary" onClick={handleClick} >Go Back</button>
                        </div> 
                    </div> 
                    </ReactCardFlip> 
                </div>
              
                <div className = "col-12 col-md-4" id = "my-cards" >
               <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                   <div className = "card">
                        <img src = { pic3 } alt = "pic2" className = "img-fluid" />
                        <div className = "card-body" >
                           <h5 class = "card-title" > DATA SCIENTIST </h5>
                           <p class = "card-text" >
   
                           </p> 
                           <button className = "btn btn-secondary" onClick={handleClick} >Flip</button>
                        </div> 
                    </div> 
                    <div className = "card">
                        
                        <div className = "card-body" >
                           <h5 class = "card-title" > Data Science </h5>
                           <p class = "card-text" >
                           <ul>
                                <li>Python, Numpy, Pytorch</li>
                                <li>TensorFlow, Scikit-learn, NLP</li>
                                <li>OpenCV , NL[</li>
                            </ul>
                           </p> 
                           <button class = "btn btn-secondary" onClick={handleClick} >Go Back</button>
                        </div> 
                    </div> 
                    </ReactCardFlip> 
                </div>
                <div className = "col-12 col-md-4" id = "my-cards" >
               <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                   <div className = "card">
                        <img src = { pic4 } alt = "pic2" className = "img-fluid" />
                        <div className = "card-body" >
                           <h5 class = "card-title" > ROBOTICS </h5>
                           <p class = "card-text" >
   
                           </p> 
                           <button className = "btn btn-secondary" onClick={handleClick} >Flip</button>
                        </div> 
                    </div> 
                    <div className = "card">
                        
                        <div className = "card-body" >
                           <h5 class = "card-title" > Robotics </h5>
                           <p class = "card-text" >
                           <ul>
                               <li>
                                   Arduino, Microcontrollers, Microprocessors
                               </li>
                               <li>
                                Motors, Sensors.
                               </li>
                           </ul> 
                           </p> 
                           <button class = "btn btn-secondary" onClick={handleClick} >Go Back</button>
                        </div> 
                    </div> 
                    </ReactCardFlip> 
                </div>
            
            </div> 
        </div>
    </div>    
    </div>

    )
}

export default Domains