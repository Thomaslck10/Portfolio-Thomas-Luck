import { useState } from 'react';
import bar from '../../assets/images/menu-bar.png';
import '../../styles/Collapse.css';

function Collapse({}) {
  const [toggle, setToggle] = useState();

  return (
    <div className="collapse">
      <img src={bar} className="collapse-img" onClick={() => setToggle(!toggle)}>
      </img>
      <div className={toggle ? 'show-content' : 'hidden-content'}>
         <nav>
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
      </div>
    </div>
  );
}

export default Collapse;
