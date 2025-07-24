import React from "react"; 
import profileImg from "../images/profile1.png";

export default function Home (){ 
    return (
        <section id="home">
       
        <img className = "profile" src={profileImg} alt="profile"/>
        
        <div className="info-box">
            <h1><span>Hello, I'm Osinachi</span></h1>
            <h3><span>Computer Science major</span> at Tufts University</h3>
            <p>My passion is creating innovative solutions both in business 
                and technological spaces.
               
            </p>
            <p> <h4><span> Great to meet you!</span></h4></p>

        

            <div className="btn-box">
                <a className="btn"href="https://docs.google.com/document/d/15bx5w6itOr2MkXTo_YjRsiiTMItWhS0G/edit?usp=sharing&ouid=110801441156730051472&rtpof=true&sd=true">Resume</a>
            </div>

            <ul className="icons">
                <a className="icon"   href="https://www.linkedin.com/in/osinachi-atama/">
                    <i className='bx bxl-linkedin' ></i></a>
                <a  className="icon" href="https://github.com/OsinachiAtama">
                    <i className='bx bxl-github' ></i>
                </a>
            </ul>
            <footer>
                <div>
                    <span><i className='bx bxl-gmail'></i>
                        osinachi.atama@gmail.com
                    </span>
                </div>
    
                <div>
                    <span><i classNameName='bx bxs-phone' ></i>
                       +1 857 829 9689
                    </span>
                </div>
            </footer>
        </div>

        </section>
    )
}