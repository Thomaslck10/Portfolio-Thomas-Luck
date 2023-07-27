import '../../styles/Header.css';
import Collapse from '../Collapse';

function Header() {
    return (
        <header>
            <div className='collapse'>
              <Collapse />
            </div>
        <nav className='nav-bar'>
          <a href='#Contact'>
            <h3>Contact</h3>
          </a>
          <a href='#About'>
            <h3>A propos</h3>
          </a>
          <a href='#Skills'>
            <h3>Compétences</h3>
          </a>
          <a href='#Works'>
            <h3>Travaux</h3>
          </a>
          <a href='#Services'>
            <h3>Services</h3>
          </a>
         </nav>
        </header>
    )
}

export default Header;