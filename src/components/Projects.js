import React from "react";
// import sceneit from "../images/SceneIt.png"
// import oppo_room from "../images/oppo_room.png"
// import plastics from "../images/plastic.jpg"
import './style/Projects.css';

function Projects () { 
    return ( 
        <>
            <div className="project_circle" ></div>
            <section id="Projects">
                <h1 className="header"><span>Projects</span></h1>
                
                <div className="project-container">
                    <div className="box">
                        <div class="title"><h1><span>Plasti-bot</span></h1></div>
                        <div class="info_text">
                            <p>
                                Collaborating with peers at Tufts IDEA lab to create an 
                                AI model that can sort plastics according to type.
                            </p>
                            <p><span>Featuring: Hyperspectral imaging, Convolutional 
                                Neural Networks(CNN). 
                            </span></p>
                        </div>
                        <div class="img_div"><img src="/images/plastic.jpg" alt="plastic"/></div>
                    </div>

                    <div className="box">
                        <div class = "title"><h1><span>SceneIt</span></h1></div>
                        <div class="info_text">
                            <p>
                                Spearheading the development of a mobile app called SceneIt 
                                which will connect Clubs on campus like never before.
                            </p>
                            <p><span>Featuring: Expo, ReactNative, Firebase </span></p>
                        </div>
                        <div class="img_div"><img src="/images/SceneIt.png" alt="turner_cb"/></div>

                    </div>

                    <div className="box">
                        <div class="title"><h1><span>Opportunity Room</span></h1></div>
                        <div class="info_text">
                            <p>
                                Re-Engineering the backend of this <a href="https://opportunity-room.com/"><span>website</span></a> that connects people 
                                to amazing opportunities.
                            </p>
                            <p><span>Featuring: PHP, WordPress short-Code, HTML, CSS.
                            </span></p>
                        </div>
                        <div class="img_div"><img src="/images/oppo_room.png" alt="calc"/></div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects;