import React from "react";
import envelopeSymbol from "../assets/envelope.svg";
import linkedinSymbol from "../assets/linkedin.svg";
import githubSymbol from "../assets/github.svg";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          
          <div class="col-lg-5">
            <h1 class="font-weight-normal" align="left">Contact</h1>
            <hr></hr>
            <p align='left'>
              Below are a few ways to reach me:
            </p>

            <div class="row" > 
              <div class="col-lg-3">
                <img src={envelopeSymbol} width="30" height="40" alt="Email: "></img>
              </div>
              <div ><p>stuart.boey@gmail.com</p></div>              
            </div> 

            <div class="row"> 
              <div class="col-lg-3">
                <img src={linkedinSymbol} width="30" height="40" alt="Linkedin: "></img>
              </div>
              <div ><a href="https://www.linkedin.com/in/stuart-boey-7640261a2" target="_blank" rel="noreferrer">Linkedin Link</a></div>              
            </div>
            
            <div class="row"> 
              <div class="col-lg-3">
                <img src={githubSymbol} width="30" height="40" alt="Linkedin: "></img>
              </div>
              <div ><a href="https://github.com/StuartB99" target="_blank" rel="noreferrer">Github Link</a></div>              
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;