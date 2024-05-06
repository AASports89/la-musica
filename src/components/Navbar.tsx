import React, {useEffect} from 'react';
import '../App.css';
import Aos from 'aos';

export default function Navbar() {
    
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])

    return (
		<div className="col-12">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">     
          <div className="col-2 justify-center">
            <h1 className="text-hide">
                <img id='logo' src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1714965196/logo192_haaszm.svg" className="card-img" alt="Logo"  data-aos="slide-right"/>
            </h1>
          </div>
          <div className="col-10">
            <h2 className="card-header">
         
              </h2>
          </div>
        </nav>
        <header id='header' className="navbar navbar-expand-lg">
          <a id='home' data-aos="flip-right" className="nav-link active" href='/'>
            {/* <i id='home-icon' className="fa-solid fa-house"></i>  */}
            <i id='custom-icon' className="fa-solid fa-vacuum"></i>
            Home
          </a>   
          {/* <a id='menu' data-aos="flip-down" className="nav-link active" href="/Music">
          <i id='menu-icon' className="fa-solid fa-headphones"></i>
            Music
          </a> */}
          {/* <a id='custom' data-aos="flip-left" className="nav-link active" href='/Movies'>
          <i id='custom-icon' className="fa-solid fa-clapperboard"></i>
          Movies
            </a> */}
        </header>
      </div>
    )};