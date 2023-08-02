import '../../styles/About.css';
import Portrait from '../../assets/images/portrait.jpg';


const PDF_FILE_URL = '/CV.pdf'

function About() {
    const downloadFileAtURL = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        console.log(url);
    };
    return (
        <section id='About'>
            <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL);}}>Télécharger mon CV</button>         
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