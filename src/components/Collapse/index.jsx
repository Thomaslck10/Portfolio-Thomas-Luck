import '../../styles/Collapse.css';
import { useState } from 'react';

function Collapse() {
  const [toggle, setToggle] = useState();
  return (
    <div className="collapse">
      <h3 className={toggle ? 'show-content' : 'hidden-content'} onClick={() => setToggle(!toggle)}>
        Voir moins
      </h3>
      <h3 className={toggle ? 'hidden-content' : 'show-content'} onClick={() => setToggle(!toggle)}>
        Voir plus
      </h3>
      <div className={toggle ? 'show-content' : 'hidden-content'}>
      </div>
    </div>
  );
}

export default Collapse;
