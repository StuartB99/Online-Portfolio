import React from "react";
import { DivImage, DivDescription } from "../components/project_divs";
import data_vis_icon  from "../assets/data_vis_icon.JPG"
import flatland_icon  from "../assets/flatland_icon.png"
import tutor_allocation_icon  from "../assets/tutor_allocation_icon.JPG"
import dite_icon from "../assets/dite_icon.png"
import restaurant_journal_icon from "../assets/restaurant_journal_icon.png"
import github_website_icon from "../assets/github_website_icon.png"
import vitals_app_icon from "../assets/healthcare-icon.jpg"
import distance_detector_icon from "../assets/social_distance_detector.JPG"
import research_icon from "../assets/paper_with_magnifying_glass.png"


function Projects() {
  return (
    <div className="about">
      <div class="container">
        <h1 class="my-4 font-weight-normal" align="left">Projects</h1>
        <hr></hr>
        {/* <p align="left">Click on the images for more information about each project.</p> */}
        <div class="row align-items-center my-3">
            <DivImage img_src={tutor_allocation_icon} img_alt="Tutor Allocation System Icon" img_height="200px" img_width="200px"/> 
            <DivDescription title="Tutor Allocation System" description="As part of a team of 10, created a Tutor Allocation System website using the PERN stack which consists of PostgreSQL database, Express.js, React framework and Node.js."/>
            <div class="gap-20"></div>
            
            <DivImage img_src={dite_icon} img_alt="DITE Icon" img_height="200px" img_width="200px"/> 
            <DivDescription 
              title="DITE Application" 
              description={["Using Flutter and as part of a team of 4, we took over and extended development for the creation of a Flutter application that helps signing Deaf individuals access a Sign Language Interpreter (SLI) by appointment/on-demand and have their health consultation translated via video conferencing or chat. The project is done for the "
                , <a href="https://www.monash.edu.my/jcsmhs/about/heard/dite">Monash School of Medicine.</a>]}
            />
            <div class="gap-20"></div>
            
            <DivImage img_src={flatland_icon} img_alt="Flatland Icon" img_width="300px"/> 
            <DivDescription 
              title="Flatland Challenge" 
              description="The challenge tackles a key problem in the transportation world: How to efficiently manage dense traffic on complex railway networks? 
              It aims to address the problem of train scheduling and rescheduling by providing a simple grid world environment and allowing for diverse experimental approaches.
              This was done using Machine learning algorithms in Python.
              To acheive this, I had applied A* algorithm, prioritized planning local search and a library that uses dueling deep Q-networks to find the optimized solution."
            />
            <div class="gap-20"></div>

            <DivImage img_src={restaurant_journal_icon} img_alt="Restaurnat Journal Icon" img_width="200px" img_height="200px"/> 
            <DivDescription 
              title="Personal Android Application (Restaurant Journal) " 
              description={[ "A personal project of mine. I created an Android application to allow people to record their experiences at restaurants in thier phone fortheir reference. The application is currently avaialble on the "
                , <a href="https://play.google.com/store/apps/details?id=my.risingcore.restaurant_journal">Google Play Store.</a>]}
              />
            <div class="gap-20"></div>

            <DivImage img_src={vitals_app_icon} img_alt="Health Vitals Monitoring System" img_width="200px" img_height="200px"/> 
            <DivDescription 
              title="Health Vitals Monitoring System " 
              description={[ "In a two person team using Java, created an Android application that allows health practitioners to check on the health vitals of their patients which are constantly updated. The vitals are sourced from the FHIR server. The link for this Github repository is  "
                , <a href="https://github.com/StuartB99/Patient-Vitals-App">here.</a>]}
              />
            <div class="gap-20"></div>
            
            <DivImage img_src={distance_detector_icon} img_alt="Social Distancing Detector" img_width="300px" img_height="300px"/> 
            <DivDescription 
              title="Social Distancing Detector " 
              description={[ "A Python system which detects and tracks humans and their distance from each other. It informs the user when social distancing is not being practiced. The system uses the pre-trained YoloV3 object detection model to detect humans. Can be applied on both pictures and videos. The link for this Github repository is   "
                , <a href="https://github.com/StuartB99/Social-Distancing-Detector">here.</a>]}
              />
            <div class="gap-20"></div>
            
            <DivImage img_src={research_icon} img_alt="Metamorphic Testing Research Paper" img_width="200px" img_height="200px"/> 
            <DivDescription 
              title="Metamorphic Testing Research Paper " 
              description="Supervised by Dr Lim Mei Kuan and Dr Chong Chun Yong, the research used various metamorphic relations to conduct metamorphic testing on object detection models. The models were taken from Tensorflow, Pytorch and other open-sourced detection models."
              />
            <div class="gap-20"></div>

            <DivImage img_src={github_website_icon} img_alt="Github Inspector Website" img_width="200px" img_height="200px"/> 
            <DivDescription 
              title="GitHub Repositories Inspector" 
              description="A website that displays statistics of any public repository in Github given its link. Using Wix,
              the statistics are displayed in the form of tables and graphs for easy analysis for the authenticated users. 
              These tables and graphs can be saved for reference later on. "
              />
            <div class="gap-20"></div>
            
            <DivImage img_src={data_vis_icon} img_alt="Data Vis Icon" img_width="200px"/> 
            <DivDescription 
              title="Data Visualization" 
              description={[ "Using Tableau and D3.js library, I have cleaned, combined and transformed various datasets into data visualizations. The link for one of the data visualation Github repository is"
                , <a href="https://github.com/StuartB99/Volcanoes-Data-Visualisation">here.</a>]}
              />
            <div class="gap-20"></div>

        </div>
      </div>
    </div>
  );
}

export default Projects;