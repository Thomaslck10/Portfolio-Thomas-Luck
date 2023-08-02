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
                    <img src={P2} alt='Projet Booki HTML CSS'></img>
                    <h3>Créez la page d'accueil d'une agence de voyage avec HTML & CSS</h3>
                    <Collapse lien={'https://github.com/Thomaslck10/P2'} description={'Création d\'une page d\'accueil pour l\'agence de voyage Booki, entièrement responsive en utilisant uniquement HTML et CSS, utilisation de Font Awesome pour les logos.'} />
                   </div>
                   <div className='works-card'>
                    <img src={P3} alt='Projet Javascript'></img>
                    <h3>Créez une page web dynamique avec JavaScript</h3> 
                    <Collapse lien={'https://github.com/Thomaslck10/P3'} description={'Création d\'une page web dynamique en utilisant Javascript, suivre une documentation API, Récupérer les données utilisateurs dans le JavaScript via des formulaires, Manipuler les éléments du DOM avec JavaScript, Gérer les événements utilisateurs avec JavaScript'}/> 
                   </div>                
                   <div className='works-card'>
                    <img src={P5} alt='Projet optimisation SEO'></img>
                    <h3>Débuggez et optimisez un site de photographe</h3>
                    <Collapse lien={'https://github.com/Thomaslck10/thomasluckp5.github.io'} description={'Optimiser les performances d\'un site web, Débugger un site web grâce aux Chrome DevTools, Rédiger un cahier de recette pour tester un site, Optimisation SEO'}/>   
                   </div>
                   <div className='works-card'>
                    <img src={P6} alt='Projet React'></img>
                    <h3>Créez une application web de location immobilière avec React</h3>
                    <Collapse lien={'https://github.com/Thomaslck10/kasa-p6'} description={'Configurer la navigation entre les pages de l\'application avec React Router, Initialiser une application avec Create React App, Développer des éléments de l\'interface d\'un site web grâce à des composants React'}/>   
                   </div>
                   <div className='works-card'>
                    <img src={P7} alt='Projet backend mongoDB'></img>
                    <h3>Développez le back-end d'un site de notation de livres</h3>
                    <Collapse lien={'https://github.com/Thomaslck10/P7'} description={'Implémenter un modèle logique de données conformément à la réglementation, Mettre en œuvre des opérations CRUD de manière sécurisée, Stocker des données de manière sécurisée'}/>    
                   </div>
            </div>
        </section>
    )
}

export default Works;