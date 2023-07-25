import '../../styles/Footer.css';
import LogoGithub from '../../assets/images/logo_github.png';
import LogoLinkedin from '../../assets/images/logo_linkedin.png'; //svg

function Footer() {
    return (
        <footer className='footer'>
         <div className='logo-div'>
            <a href='https://github.com/Thomaslck10?tab=repositories' target='_blank'>
                <img src={LogoGithub} className='logo'></img>
            </a>
            <a href='https://www.linkedin.com/in/thomas-luck-35301b20b/' target='_blank'>
                <img src={LogoLinkedin} className='logo'></img>
            </a>
         </div>
         <h3>Réalisé par Thomas Luck</h3>
        </footer>
    )
}

export default Footer;