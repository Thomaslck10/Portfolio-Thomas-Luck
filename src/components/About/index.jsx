import '../../styles/About.css';
import Portrait from '../../assets/images/portrait.jpg';

function About() {

    return (
        <section id='About'>
            <a href='https://thomaslck10.github.io/Portfolio-Thomas-Luck/CV.pdf' target='_blank'>Télécharger mon CV</a>         
            <div>
              <h1>Thomas Luck</h1>
              <h2>Développeur full-stack</h2>
              <p>Jeune développeur passionné du web, venez découvrir sur mon site web mes différentes compétences et mes travaux réalisés. </p>
            </div>
            <img src={Portrait} alt='portrait Thomas Luck'></img>           
        </section>
    )
}

export default About;