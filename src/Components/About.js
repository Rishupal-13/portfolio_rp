import React from 'react'

import LottieAnimation from './Lottie';
import main5 from './Animations/main5.json';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';



function About() {
    return ( 
    <div class = "about2">
        <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>I am a full stack web developer and a machine learning enthusiast. I like collaborating with people and solving real world problems through my coding skills.

I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better.</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right" style={{marginTop: "260px"}}>
          <LottieAnimation lotti = {main5} height = {400} width = { 360 }/>

          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Educational Backgroud</h3>
           
            <Timeline lineColor={'#ddd'}>
  <TimelineItem
     key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#red', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'
    }} >
    <h3>B.Tech</h3>
    <h4 style={{color : "red"}}>National Institute Of Technology, Patna</h4>
    <p>
     5th sem___Electrical Engineering
    </p>
   
    <p>
  CGPA : 7.82
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{  }}>Intermediate (Class 12th)</h3>
    <h4 style={{ color: '#61b8ff' }}>Macro Vision cademy</h4>
    <p>
   CBSE
    </p>
    <p>
      percenatge : 90.2%
    </p>
    </TimelineItem>
    <TimelineItem
        key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: 'green', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    
    }}
    >
        <h3>Matriculation (Class 10th)</h3>
        <h4 STYLE={{color: "green"}}>Central Railway Secondary School</h4>
        <p>
        CBSE
        </p>
        <p>
        CGPA : 9.6
        </p>

    </TimelineItem>
    
    </Timeline>
            

            
          </div>
        </div>

    </div>
    
    </section>
    </div>


    )
}

export default About