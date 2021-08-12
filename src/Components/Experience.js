import React from 'react'
import LottieAnimation from './Lottie';
import main6 from './Animations/webjson.json';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


function Experience() {
    return (
        <div className="experience" id ="experience">
            <div class="container">

            <div class="section-title">
            <h2>Experience</h2>
            <p> things pretty and easy to use. I can't stop learning new things; the more, the better.</p>
            </div>

            <div class="row">
            <div class="col-lg-4" data-aos="fade-right" style={{marginTop: "0px"}}>
            <LottieAnimation lotti = {main6} height = {400} width = { 360 }/>

            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                
                        <Timeline>
                        
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
                        <h3>GROOM - An IITB startup</h3>
                        <h4 style={{color : "red"}}>Data Science Intern</h4>
                        <p>
                            --Worked on data annotation and object detection
                            frameworks which directly bring value through fashion tech
                            and personalization of one's fashion choices.
                            --Built a Computer Vision model to identify clothing features
                            from the image and performed a comparative analysis
                            between human predicted and AI predicted images to find
                            the accuracy of the ML model using Yolov5 & VGG16
                        </p>
                    
                        <p>
                    CGPA : 7.82
                        </p>
                    </TimelineItem>
                        </Timeline>
</div>
</div>
                               
        </div>
        </div>
    )
}

export default Experience
