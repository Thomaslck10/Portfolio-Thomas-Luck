import '../../styles/Header.css';
import bar from '../../assets/images/menu-bar.png';
import { useState } from 'react';

function Header() {
  const [toggle, setToggle] = useState();
  const links = {Contact : 'Contact', About : 'A propos', Skills : 'Compétences', Works : 'Travaux', Services : 'Services' }

  return (
    <header>
      <nav>
      <img src={bar} className="collapse-img" onClick={() => setToggle(!toggle)} alt='icone liste'>
      </img>
      <div className={toggle ? 'show-content-header' : 'hidden-content'}>
        {Object.keys(links).map(key => 
        <a href={`#${key}`} onClick={() => setToggle(false)}>{links[key]}</a>)}  
      </div>
      </nav>
    </header>
  );
}

export default Header;