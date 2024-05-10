import Navbar from './components/Navbar';
import Music from './components/Music';
import './App.css';
import Aos from 'aos';

function App() {

  Aos.init({duration:3000});
  const year = new Date().getFullYear();
  
  return(
    <div className="container-fluid">
      <Navbar />
      <Music />
      <div id="bday" className="container-fluid">
        <div className='card-header' id='bday_card'>
        #PilisosOverPurposeHappyBdayGary
        </div>
    
      </div>
        <footer data-aos="slide-up" id='footer' className='App-footer'>				
          <header className="App-header">
            <div className="row justify-content-md-center">
              <div className="col-12 justify-content-center" id="footer-div">
                <h1 className='card-header' id='footer-card'>
                  <p id="footer-title"><img id="royal-icon" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1714965196/logo192_haaszm.svg" alt="Pilisos"></img><b> © Pilisos Over Purpose™ - {year}. All Rights Reserved.</b></p>
                </h1> 	
              </div>
            </div>
          </header>
        </footer>
    </div>
);
}

export default App;
