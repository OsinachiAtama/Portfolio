import React, {useEffect, useState} from "react";
import "./style/PhotoJournal.css";

export default function Journal () { 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const images = []; 
    function Gallery () { 
        const imgCount = 135; 

        for (var i = 1; i <= imgCount; i++) { 
            images.push(`/images/nature/photo${i}.jpg`);
        }

    }

    Gallery();

    function Circles() {
        const circles = [];

        const getRandomStyle = () => { 
            const maxLeft = windowWidth - 100; // assuming max circle width is 50px
            const left = Math.random() * maxLeft;
            // const bottom = Math.random() * 100;
            console.log(windowWidth);
            return { 
                left: `${left}px`, 
                // bottom: `${bottom}px`,
                animationDelay: `${Math.random() *5}s`
            }
        };
        // for (let i = 0; i < 5; i++) {
        //     circles.push(<div key={`b-${i}`} className=" circle circleB"  style={getRandomStyle()}/>);
        // }
        // for (let i = 0; i < 5; i++) {
        //     circles.push(<div key={`m-${i}`} className=" circle circleM" style={getRandomStyle()} />);
        // }
        var num_circles = Math.floor(windowWidth/35)
        for (let i = 0; i < num_circles; i++) {
            circles.push(<div key={`s-${i}`} className="circle circleS" style={getRandomStyle()} />);
        }
        return circles
    }   
    return (
        <>
            <section id="journal"> 
               <div className="floating-circles">{Circles()}</div>
               <div className="blob">
                    <h1><span>Hello and welcome! </span></h1><br/>
                    Whether you're a recruiter, professor, fellow student, friend, or family member—I'm truly glad you’re here.
                    Photography, especially of nature, is one of my favorite ways to slow down and capture the beauty around me. 
                    Most of the photos you'll see here are from moments that caught my eye and stayed with me. <br/>

                    I’m excited to share a glimpse of what I see through my lens, and I hope you enjoy exploring this collection as 
                    much as I’ve enjoyed creating it. <br/>

                    Thank you for stopping by! <br/>
                    <span>- Osinachi </span>


               </div>
               <div id="renderImgs"> 
                    { 
                        //React's map uses two options one passing the element, the other passing the index
                        images.map((src, idx) => (
                            <img
                                key = {idx}
                                src = {src}
                                alt = {`Nature photo ${idx + 1}`}
                                loading = "lazy"
                                className = "nature_img"
                            />
                        ))
                    }
               </div>
            </section>
        </>
    );
}