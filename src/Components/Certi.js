 import React from 'react'
 import { Card} from 'semantic-ui-react'
import u1 from './images/u1.png';
import u2 from './images/u2.jpg';
import u3 from './images/u3.png';
 
 function Certi() {
     return (
         <div className="certificates" id="certificates">
             <div class="certs-body-div" style={{marginTop: "50px", marginBottom:"50px"}}>
             <div class="container">

            <div class="section-title">
            <h2>Certifications</h2>
            <p> things pretty and easy to use. I can't stop learning new things; the more, the better.</p>
            </div>

            
               <div className="react-card">
               <div className = "row">
               <div className = "col-12 col-md-4" id = "my-cards" >
               <Card>
               <img src = { u1 } alt = "pic2" className = "img-fluid" />
                    <Card.Content>
                    <Card.Header>Machine Learning Data Science A-Z: Handson Python 2021
</Card.Header>
                    <Card.Description>
                    Udemy course by Navid Shirzadi.
                    </Card.Description>
                    </Card.Content>
                  
                </Card>
                </div>
                <div className = "col-12 col-md-4" id = "my-cards" >
               <Card>
               <img src = { u2 } alt = "pic2" className = "img-fluid" />
                    <Card.Content>
                    <Card.Header>The Complete 2020 Web
Development Bootcamp </Card.Header>
                    
                    <Card.Description>
                    Udemy
course by Angela Yu
                    </Card.Description>
                    </Card.Content>
                    
                </Card>
                </div>
                <div className = "col-12 col-md-4" id = "my-cards" >
               <Card>
               <img src = { u3 } alt = "pic2" className = "img-fluid" />
                    <Card.Content>
                    <Card.Header>Master Class: React + Typescript
2021 Web Development</Card.Header>
                  
                    <Card.Description>
                    Udemy
course by Rysher Magbanua
                    </Card.Description>
                    </Card.Content>
                    
                </Card>
                </div>
                </div>
                
               </div>
          
                
              </div>
         </div>
         </div>
     )
 }
 
 export default Certi
 