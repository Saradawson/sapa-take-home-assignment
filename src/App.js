import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header style={{backgroundImage: 'url(/images/TopHeaderImage.png)', backgroundSize: '100vw', backgroundRepeat:'no-repeat', backgroundColor: '#103c00', height:'100vh'}}>
        <nav>
          <Link to='/'>APPOINTMENTS</Link>
          <Link to='/'>MEDICAL CARD INFO</Link>
          <Link to='/'>FAQs</Link>
          <Link to='/'>PHARMACIES</Link>
          <Link to='/'>ABOUT</Link>
        </nav>
        <img src='/images/updatedAssets/UtahGrownLogoWhiteBorder.png' alt='Utah Grown Logo White Boarder' style={{ textAlign: 'center'}}/>
      </header>
      <main>

      </main>
      <footer></footer>
    </div>
  );
}

export default App;
