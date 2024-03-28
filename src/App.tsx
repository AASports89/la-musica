import Navbar from './components/Navbar';
import Music from './components/Music';
import logo from './images/logo192.svg';
import './App.css';
import Aos from 'aos';

function App() {

  Aos.init({duration:3000});
  const year = new Date().getFullYear();
  
  return(
    <div className="container-fluid">
      <Navbar />
      <Music />
        <footer data-aos="slide-up" id='footer' className='App-footer'>				
          <header className="App-header">
            <div className="row justify-content-md-center">
              <div className="col-12 justify-content-center" id="footer-div">
                <h1 className='card-header' id='footer-card'>
                  <p id="footer-title"><img id="royal-icon" src={logo} alt="Royal Pastry"></img><b> © A&sup2; Streaming™ - {year}. All Rights Reserved.</b></p>
                </h1> 	
              </div>
            </div>
          </header>
        </footer>
    </div>
);
}

export default App;
