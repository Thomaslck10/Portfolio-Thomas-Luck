import '../../styles/Works.css';
import P2 from '../../assets/images/P2.png';
import P3 from '../../assets/images/P3.png';
import P5 from '../../assets/images/P5.png';
import P6 from '../../assets/images/P6.png';
import P7 from '../../assets/images/P7.png';
import Collapse from '../../components/Collapse';


function Works() {
    return (
        <section id='Works'>
            <h2>Mes travaux</h2>
            <div className='cards-container'> 
                   <div className='works-card'>
                    <img src={P2}></img>
                    <h3>Créez la page d'accueil d'une agence de voyage avec HTML & CSS</h3>
                    <Collapse lien={'https://github.com/Thomaslck10/P2'} description={'Création d\'une page d\'accueil pour l\'agence de voyage Booki, entièrement responsive en utilisant uniquement HTML et CSS, utilisation de Font Awesome pour les logos.'} />
                   </div>
                   <div className='works-card'>
                    <img src={P3}></img>
                    <h3>Créez une page web dynamique avec JavaScript</h3> 
                    <Collapse lien={''} description={'Création d\'une page web dynamique en utilisant Javascript'}/> 
                   </div>                
                   <div className='works-card'>
                    <img src={P5}></img>
                    <h3>Débuggez et optimisez un site de photographe</h3>
                    <Collapse lien={''} description={''}/>   
                   </div>
                   <div className='works-card'>
                    <img src={P6}></img>
                    <h3>Créez une application web de location immobilière avec React</h3>
                    <Collapse lien={''} description={''}/>   
                   </div>
                   <div className='works-card'>
                    <img src={P7}></img>
                    <h3>Développez le back-end d'un site de notation de livres</h3>
                    <Collapse lien={''} description={''}/>    
                   </div>
            </div>
        </section>
    )
}

export default Works;