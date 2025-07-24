import { Link } from 'react-router-dom'; 

export default function Navbar() { 
    return ( 
        <nav> 
              <a href="#" className = "logo" ><span>OA</span> </a>
        <ul className="menu">
            <Link to = "/">Home</Link>
            <Link to = "/About">About</Link>
            <Link to = "/Projects">Projects</Link>
            {/* <a href="#contact">Contact</a> */}
        </ul>
        {/* <i className="bx bx-menu-alt-right" id="menu"></i>  */}
        <a href="https://docs.google.com/document/d/15bx5w6itOr2MkXTo_YjRsiiTMItWhS0G/edit?usp=sharing&ouid=110801441156730051472&rtpof=true&sd=true" className="btn">Resume</a>
        </nav>
    )
}