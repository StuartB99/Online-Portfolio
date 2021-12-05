import React from "react";
import { Link } from "react-router-dom";
import { DivImage, DivDescription } from "../components/project_divs";
import restaurant_journal_icon from "../assets/restaurant_journal_icon.png"
import distance_detector_icon from "../assets/social_distance_detector.JPG"
import tutor_allocation_icon  from "../assets/tutor_allocation_icon.JPG"
import selfie_icon from "../assets/selfie.jpg"
import dite_icon from "../assets/dite_icon.png"

function Home() {
  return (
    <div className="home">
      <div class="container">
        
        <div class="row align-items-center my-4">
          <div class="col-lg-3 center" style={{justifyContent:'center', alignItems:'center'}}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0 rounded-circle"
              src={selfie_icon}
              alt="Selfie"
              width="250px"
            />
          </div>
        </div>

        <div>
          <h1 class="font-weight-heavy">Hi, I'm Stuart</h1>
          <p align='justify'>
            I am an aspiring Software Engineer who is graduating from Monash University. I am interested in full-stack development as 
            well as machine learning. I enjoy developing and working on projects that can help people. I often look for things to work 
            on and learn about. Below I have listed a few recent projects. For a full list, you can navigate to the Projects page. Feel free to read on.
          </p>
        </div>

        {/* The project section */}       
        <div class="gap-40"></div>
        <h3 align="left">Recent Projects:</h3>
        <div class="gap-20"></div>
      
        <div class="row align-items-center">

          <DivImage img_src={tutor_allocation_icon} img_alt="Tutor Allocation System Icon" img_height="200px" img_width="200px"/> 
          <DivDescription title="Tutor Allocation System" description="As part of a team of 10, created a Tutor Allocation System website using the PERN stack which consists of PostgreSQL database, Express.js, React framework and Node.js."/>
          <div class="gap-20"></div>
          
          <DivImage img_src={dite_icon} img_alt="DITE Icon" img_height="200px" img_width="200px"/> 
          <DivDescription 
            title="DITE Application" 
            description={["Using Flutter and as part of a team of 4, we took over and extended development for the creation of a Flutter application that helps signing Deaf individuals access a Sign Language Interpreter (SLI) by appointment/on-demand and have their health consultation translated via video conferencing or chat. The project is done for the "
              , <a href="https://www.monash.edu.my/jcsmhs/about/heard/dite" target="_blank" rel="noreferrer">Monash School of Medicine.</a>]}
          />
          <div class="gap-20"></div>

          <DivImage img_src={restaurant_journal_icon} img_alt="Restaurnat Journal Icon" img_width="200px" img_height="200px"/> 
          <DivDescription 
            title="Personal Android Application (Restaurant Journal) " 
            description={[ "A personal project of mine. I created an Android application to allow people to record their experiences at restaurants in thier phone fortheir reference. The application is currently avaialble on the "
              , <a href="https://play.google.com/store/apps/details?id=my.risingcore.restaurant_journal" target="_blank" rel="noreferrer">Google Play Store.</a>]}
            />
          <div class="gap-20"></div>

          <DivImage img_src={distance_detector_icon} img_alt="Social Distancing Detector" img_width="300px" img_height="300px"/> 
          <DivDescription 
            title="Social Distancing Detector " 
            description={[ "A Python system which detects and tracks humans and their distance from each other. It informs the user when social distancing is not being practiced. The system uses the pre-trained YoloV3 object detection model to detect humans. Can be applied on both pictures and videos. The link for this Github repository is   "
              , <a href="https://github.com/StuartB99/Social-Distancing-Detector" target="_blank" rel="noreferrer">here.</a>]}
            />
          <div class="gap-20"></div>

        </div>
        <Link class="nav-link" to="/Online-Portfolio/projects" >
          <button type="button" class="btn btn-primary btn-lg">View All Projects</button>
        </Link>

        <div class="gap-80"></div>
      </div>
    </div>
  );
}

export default Home;