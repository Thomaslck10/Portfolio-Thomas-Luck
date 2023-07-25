import '../../styles/Works.css';
import P2 from '../../assets/images/P2.png';
import P3 from '../../assets/images/P3.png';
import P5 from '../../assets/images/P5.png';
import P6 from '../../assets/images/P6.png';
import P7 from '../../assets/images/P7.png';

function Works() {
    return (
        <section id='Works'>
            <h2>Mes travaux</h2>
            <div className='cards-container'>              
                    <img src={P2}></img>
                    <img src={P3}></img>                
                    <img src={P5}></img>
                    <img src={P6}></img>
                    <img src={P7}></img>
            </div>
        </section>
    )
}

export default Works;