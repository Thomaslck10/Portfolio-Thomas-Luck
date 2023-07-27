import '../../styles/Services.css';
import imgReact from '../../assets/images/site-react.webp';
import SEO from '../../assets/images/SEO.webp';
import debug from '../../assets/images/debug.png';

function Services() {
    return (
        <section id='Services'>
            <h2>Mes services</h2>
            <div className='service-grid'>
            <div className='service-card'>
                <img src={imgReact}></img>
                <h3>Création de votre site web avec React</h3>
            </div>
            <div className='service-card'>
                <img src={SEO}></img>
                <h3>Optimisation des performances et du SEO de votre application</h3>
            </div>
            <div className='service-card'>
                <img src={debug}></img>
                <h3>Correction des bugs</h3>
            </div>
            </div>
        </section>
        

    )
}

export default Services;