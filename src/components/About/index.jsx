import '../../styles/About.css';
import Portrait from '../../assets/images/portrait.jpg';

function About() {
    return (
        <section id='About'>
            
            <div>
              <h1>Thomas Luck</h1>
              <h2>Développeur full-stack</h2>
              <p>Jeune développeur passionné du web, venez découvrir sur mon site web mes différentes compétences et mes travaux réalisés. </p>
            </div>
            <img src={Portrait}></img>
        </section>
    )
}

export default About;