import React, {useEffect} from 'react';
import '../App.css';
import headphones from '../images/headphones.svg';
import stillDre from '../images/DeezNuuts.mp3';
import Aos from 'aos';


export default function Music() {
	
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])

return (

<main className="row justify-content-center">
  <div id="main" className="w-100 h-100 d-lg-flex flex-lg-row flex-sm-column justify-content-center align-items-center p-3">
    <div id='main-div' className="rounded box_shadow mx-sm-auto mb-sm-4">
      <img id="img1" src={headphones} alt="Headphones" width="250px" height="250px" className="rounded-circle mt-5 mx-5 mb-4 shadow"></img>
     <h3 id='h3' className=" text-center text-white mb-2 mt-3">DJ Pili$o$ - PlayList</h3>
      <div>
	<ul id="list" className=" h-50 text-white overflow-scroll overflow-x-hidden list-unstyled font-weight-bold">
	  <p><audio id='stillDRE' src={stillDre} preload="auto" controls className="text-dark mx-3 mt-2"></audio></p>
	</ul>
      </div>
  </div>
</div>
<script type="text/javascript" src='./main.js'></script>
</main>
)};

