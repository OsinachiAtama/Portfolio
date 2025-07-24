import React from "react"; 
import profileImg from "../images/profile1.png";

function About() { 
    return ( 
        <section id="about">
        <div className="about-box">
            <div className="about-info">
                <h1><span>About me</span></h1>
                <p> I love to learn and I love collaboration. While I can work 
                    excellently to achieve my goals, I believe I function best 
                    in a team. My biggest interests are technology, entreprenuership,
                    and the intersection between them. In short, I love to create 
                    efficient and profitable solutions to problems using technology.
                 
                </p>
            </div>

            <h2><span>Skills</span></h2>

            <div className=" skills"> 
                <ul>
                    <li>
                        <span><i className='bx bx-chevron-right'></i>HTML</span>
                    </li>

                    <li>
                        <span><i className='bx bx-chevron-right'></i>CSS</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span><i className='bx bx-chevron-right'></i>C++</span>
                    </li>

                    <li>
                        <span><i className='bx bx-chevron-right'></i>Python</span>
                    </li>
                </ul>
            </div>
             
        </div>
        <img src={profileImg} alt="Profile"/>
    </section>
    );
}

export default About;
   