import React from 'react'
import { Fade } from "react-reveal";
import pdf from './images/1802099_Rishu_EE.pdf'
import { Viewer } from '@react-pdf-viewer/core'; // install this library
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core'; // install this library
function Resume() {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
         <div className = "resume-port"  id ="resume" style={{marginTop: "60px", marginBottom: "40px"}}>
             <div>
      <div className="basic-contact">
      <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" >
                Resume
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                
              >
                You can contact me regarding SDE roles through my social media handles
              </p>
            </div>
            <div className="blog-heading-img-div">
              
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="container">
            <div className='pdf-container'>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={pdf}
                  plugins={[defaultLayoutPluginInstance]} />
             
            </Worker>
          </div>
             </div> 

          </div>
        </Fade>

      </div>
      
   
      </div>
        </div>
    )
}

export default Resume