import React from "react";
import calc from "..images/calc.png"
import turner from "..images/turner_cb.png"
import plastics from "..images/plastic.png"

function Projects () { 
    return ( 
        <section id="Projects">
        <h1 class="header"><span>Projects</span></h1>
        
        <div class="project-container">
            <div class="box">
                <h1><span>Plasti-bot</span></h1>
                <p>
                    Collaborating with peers at Tufts IDEA lab to create an 
                    AI model that can sort plastics according to type.
                </p>
                <p><span>Featuring: Hyperspectral imaging, Convolutional 
                    Neural Networks(CNN). 
                </span></p>
                <img src={plastics} alt="plastic"/>

            </div>

            <div class="box">
                <h1><span>Floor</span></h1>
                <p>
                    Developed a demo chatbot to help new hires get acquainted 
                    with Turner's Astrazeneca jobsite.
                </p>
                <p><span>Featuring: IBM WatsonX Assistant 
                </span></p>
                <img src={turner} alt="turner_cb"/>

            </div>

            <div class="box">
                <h1><span>Calc-U-Later</span></h1>
                <p>
                  Designed a GUI standalone calculator with PEDMAS and 
                  trigonometric functiions . 
                </p>
                <p><span>Featuring: Tkinter, PyInstaller
                </span></p>
                <img src={calc} alt="calc"/>

            </div>

        </div>

    </section>
    )
}

export default Projects;