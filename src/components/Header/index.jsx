import '../../styles/Header.css';
import bar from '../../assets/images/menu-bar.png';
import { useState } from 'react';

function Header() {
  const [toggle, setToggle] = useState();

  return (
    <header>
      <nav>
      <img src={bar} className="collapse-img" onClick={() => setToggle(!toggle)}>
      </img>
      <div className={toggle ? 'show-content' : 'hidden-content'}>      
          <a href='#Contact' onClick={() => setToggle(!toggle)}>
            <h3>Contact</h3>
          </a>
          <a href='#About' onClick={() => setToggle(!toggle)}>
            <h3>A propos</h3>
          </a>
          <a href='#Skills' onClick={() => setToggle(!toggle)}>
            <h3>Compétences</h3>
          </a>
          <a href='#Works' onClick={() => setToggle(!toggle)}>
            <h3>Travaux</h3>
          </a>
          <a href='#Services' onClick={() => setToggle(!toggle)}>
            <h3>Services</h3>
          </a>
      </div>
      </nav>
    </header>
  );
}

export default Header;