import React from 'react'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import ml from "./ml.js";
import robotics from './robotics.js';
import webd from "./webd.js";


function Portf() {

 
    return (
     <div className="projects" id ="projects">
        <div  id="portfolio" class="portfolio section-bg" style={{marginTop: "40px", marginBottom: "40px"}}>
   
      <div className="container" >

        <div className="section-title">
          <h2>Projects</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
       
  
        <div className="row aos-init aos-animate" data-aos="fade-up">
        <HashRouter>
          <div className="col-lg-12 d-flex justify-content-center">
            <div class="summary_toggle" style={{ backgroundColor: "pink",
    color:" #fff",
    fontWeight: "700",
    textDecoration: "none",
    padding:" 20px",


}}>
            <li><NavLink to="/ml">Machine Learning</NavLink></li>
            <li><NavLink to="/webd">Web development</NavLink></li>
            <li><NavLink to="/robotics">Robotics/Electrical</NavLink></li>
            
            </div>
          
          </div>
          <div className="content">
            <Route path="/ml" component={ml}/>
            <Route path="/webd" component={webd}/>
            <Route path="/robotics" component={robotics}/>
          </div>
          </HashRouter>
        </div>
           
      
    </div>
  </div>
  </div>
    )
}

export default Portf
