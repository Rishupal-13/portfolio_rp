import React from 'react'

import LottieAnimation from './Lottie';
import main6 from './Animations/hey.json';

function Home() {


    return ( 
        <div className = "home">
            <section id = "hero" class = "d-flex align-items-center justify-content-center">
           
            <div class="greet-main" id="greeting" >
                <div class="greeting-main">
                    <div class="greeting-text-div">
                        <div>
                        <h1 class="greeting-text">Hi there 👋.</h1><p class="greeting-text-p subTitle" style={{color: "rgb(127, 141, 170)"}}>
                        <span>I'm </span><span style={{color: "rgb(185, 104, 199)"}}>
                         Rishu Pal. </span>Full Stack Developer, ML Enthusiast 🔥. Always learning.</p>
                        </div>
                    </div>
                     <div class="greeting-image-div">
                     <LottieAnimation lotti = {main6} height={400} width={400} />
                     </div>
              </div>
              </div>
   
      

        
           
            </section>
           


</div>
)
}

export default Home