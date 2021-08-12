import React from 'react'
import ml1 from './images/s2.jpg'
import ml2 from './images/s3.png'
import ml3 from './images/fkjpg.jpg'
import ml4 from './images/s6.png'
import {
      HashRouter,
    
 } from "react-router-dom";

   import { SocialIcon } from 'react-social-icons';
function ml() {
    return (
      
        <div id ="ML" className="Machinl-active" >
         <div class="row">    
      
          
           <div class="col-lg-3 col-md-6  align-items-stretch">
      
            <div class="project-detail">
    

    
              <div class="member-img" >
              <img src = { ml1 } alt = "pic2" className = "img-fluid" />
    
            </div>
              
            
              <div class="member-info">
                <h4>Car Price Prediction</h4>
                <SocialIcon url="https://github.com/Rishupal-13/Car-Price-prediction" />
                <span>Github Link</span>
              </div>
           
              
            </div>
            
          </div>
      
          

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <HashRouter>
            <div class="project-detail">
              <div class="member-img">
              <img src = { ml2 } alt = "pic2" className = "img-fluid" />
        
              </div>
              <div class="member-info">
                <h4>Face Mask Drtection Model</h4>
                
                <SocialIcon url="https://github.com/Rishupal-13/face-mask-detection" />
                <span>Github Link</span>
              </div>
              
            </div>
        

            </HashRouter>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="project-detail">
              <div class="member-img">
              <img src = { ml3 } alt = "pic2" className = "img-fluid" />
              </div>
              <div class="member-info">
                <h4>Social Distancing Model</h4>
                <SocialIcon url="https://github.com/Rishupal-13/face-mask-detection" />
                  <span>Github Link</span>
                </div>
               
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="project-detail">
              <div class="member-img">
              <img src = { ml4 } alt = "pic2" className = "img-fluid" />
              
              </div>
              <div class="member-info">
                <h4>Movie Recommendation</h4>
              
                <SocialIcon url="https://github.com/Rishupal-13/Movie-recommendation-system" />
              
            <span>Github Link</span>
          </div>
          
              </div>
          
          </div>

        </div>
        </div>
    
 
    )
}

export default ml
