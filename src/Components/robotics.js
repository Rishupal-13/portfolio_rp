import React from 'react'
import pic2 from './images/rob1.jpg'
import pic3 from './images/rob2.jpg'
import pic4 from './images/rob3.jpg'

function robotics() {
    return (
         
        <div id ="robotics" className="robotics-active" >
         <div class="row">    
      
          
           <div class="col-lg-4 col-md-4  align-items-stretch">
      
            <div class="project-detail">
              <div class="member-img">
              <img src = { pic2 } alt = "pic2" className = "img-fluid" />

              </div>
              <div class="member-info">
                <h4>LINE FOLLOWER BOT</h4>
               
              <span>Github Link</span>
              </div>
            </div>
            
          </div>
          <div class="col-lg-4 col-md-4  align-items-stretch">
      
            <div class="project-detail">
              <div class="member-img">
              <img src = { pic3 } alt = "pic2" className = "img-fluid" />

              </div>
              <div class="member-info">
                <h4>MAZE RUNNER</h4>
             
              <span>Github Link</span>
              </div>
            </div>
            
          </div>
      
          

          <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
            <div class="project-detail">
              <div class="member-img">
              <img src = { pic4} alt = "pic2" className = "img-fluid" />
        
              </div>
              <div class="member-info">
                <h4>THIRD EYE FOR BLIND</h4>
              
              <span>Github Link</span>
              </div>
            </div>
          </div>

      

    

        </div>
        </div>
    
    )
}

export default robotics
