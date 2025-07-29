import React from "react"; 
// import profileImg from "/images/profile1.png";
import './style/About.css';
function About() { 
    const skills = ["Python", "Reactjs", "HTML", "CSS", "JavaScript", "ReactNative", "MongoDB", "Postgresql", "C++"]
    skills.sort()
    return ( 
        <>
            <div class="about_circle"></div>
            <section id="about">
                <img src="/images/profile1.png" alt="Profile"/>
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

                    <div className="skills"> 
                        <ul>
                            { 
                                skills.map((skill => 
                                    <li key={skill}><span><i className='bx bx-chevron-right'></i>{skill}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                </div>
                
                </section>
        </>
    );
}

export default About;
   