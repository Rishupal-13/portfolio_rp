import React from 'react'
import pic2 from "./images/cov.png";
import pic3 from "./images/pp.jpg";
import pic4 from "./images/car.png";
import { SocialIcon } from 'react-social-icons';
function webd() {
    return (
        
      <div className="webd-active" id="webd">
        <div class="row">    
          <div class="col-lg-4 col-md-4  align-items-stretch">
            <div class="project-detail">
              <div class="member-img">
              <img src = { pic2 } alt = "pic2" className = "img-fluid" />

              </div>
              <div class="member-info">
                <h4>COVID-MADAD</h4>
                <SocialIcon url="https://github.com/Rishupal-13/covid-madad" />
              
              <span>Github Link</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 align-items-stretch">
            <div class="project-detail">
              <div class="member-img">
              <img src = { pic3 } alt = "pic2" className = "img-fluid" />
        
              </div>
              <div class="member-info">
                <h4>PORTFOLIO WEBSITE</h4>
                <SocialIcon url="https://github.com/Rishupal-13/portfolio-rp" />
              
              <span>Github Link</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 d-flex align-items-stretch">
            <div class="project-detail">
              <div class="member-img">
              <img src = { pic4 } alt = "pic2" className = "img-fluid" />
              </div>
              <div class="member-info">
                <h4>CAR SERVICING WEBSITE</h4>
                <SocialIcon url="https://github.com/Rishupal-13/car-servicing" />
              
              <span>Github Link</span>
              </div>
            </div>
          </div>
         </div>
        </div>

    )
}

export default webd
