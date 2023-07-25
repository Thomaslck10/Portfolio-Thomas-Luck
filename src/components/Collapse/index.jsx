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

      </div>
    </div>
  );
}

export default Collapse;
