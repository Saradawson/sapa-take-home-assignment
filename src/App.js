import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header style={{backgroundImage: 'url(/images/TopHeaderImage.png)', backgroundSize: '100vw', backgroundRepeat:'no-repeat', backgroundColor: '#103c00', height:'100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <nav style={{marginTop: '4rem', width: '80%', display: 'flex', justifyContent: 'space-around'}}>
          <Link className='nav-link' to='/'>APPOINTMENTS</Link>
          <Link className='nav-link' to='/'>MEDICAL CARD INFO</Link>
          <Link className='nav-link' to='/'>FAQs</Link>
          <Link className='nav-link' to='/'>PHARMACIES</Link>
          <Link className='nav-link' to='/'>ABOUT</Link>
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
