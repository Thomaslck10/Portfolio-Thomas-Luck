import '../../styles/Collapse.css';
import { useState } from 'react';

function Collapse({ description, lien }) {
  const [toggle, setToggle] = useState();
  return (
    <div className="collapse">
      <a className={toggle ? 'show-content' : 'hidden-content'} onClick={() => setToggle(!toggle)}>
        Voir moins
      </a>
      <a className={toggle ? 'hidden-content' : 'show-content'} onClick={() => setToggle(!toggle)}>
        Voir plus
      </a>
      <div className={toggle ? 'show-content-description' : 'hidden-content'}>
        <p>{description}</p>
        <a target='_blank' href={lien}>Lien vers le repo Github</a>
      </div>
    </div>
  );
}

export default Collapse;
