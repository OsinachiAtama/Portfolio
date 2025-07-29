import { Link } from 'react-router-dom'; 
import "./style/NavBar.css"
import { useState } from 'react';

export default function Navbar() { 
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuClick = ()=>{ 
       setMenuOpen(prev=>!prev);
    }
    return ( 
        <nav> 
            <div className='menu_logo'>
                <a href="#" className = "logo" ><span>OA</span> </a>
                <i 
                className="bx bx-menu-alt-right" 
                id="menu"
                onClick={handleMenuClick}></i> 
            </div>
            <ul className={ menuOpen ? "menu_open" : "menu"}>
                <Link to = "/" className="menu_item">Home</Link>
                <Link to = "/About" className="menu_item">About</Link>
                <Link to = "/Projects" className="menu_item">Projects</Link>
                <Link to = "/PhotoJournal" className="menu_item">Photo Journal</Link>
                {/* <a href="#contact">Contact</a> */}
                <a href="https://docs.google.com/document/d/1Rm9aoWEEORMaM9qXgwSwrDzKM_brZgFI/edit?usp=sharing&ouid=110801441156730051472&rtpof=true&sd=true" className="btn" id = "resume">Resume</a>
            </ul>   
        </nav>
    )
}