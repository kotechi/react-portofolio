import '../css/navbar.css';
import { useState } from 'react';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav className= "z-50 py-4  text-xl shadow-md shadow-primary/20">
            <div>
                <div className="nav-left flex items-center">
                    <h1 className="text-3xl font-bold ">Adit<span className='text-white '>iya</span></h1>
                </div>
                <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={menuOpen ? "nav-link active" : "nav-link"}>
                <a className="nav-a font-medium " href="#home">home</a>
                <a className="nav-a font-medium " href="#about">about</a>
                <a className="nav-a font-medium " href="#skill">skill</a>
                <a className="nav-a font-medium " href="#project">project</a>
                <a className="nav-a font-medium " href="#contact">contact</a>
            </div>
            {/* <div className="nav-right">
                <a href="" className="text-green-500 py-1 px-2 hover:border-green-900 bg-gray-900 border-1 border-green-500 rounded-md">Login</a>
            </div> */}
        </nav>
    )
}