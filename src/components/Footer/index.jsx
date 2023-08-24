import '../../styles/Footer.css';
import LogoGithub from '../../assets/images/logo_github.svg';
import LogoLinkedin from '../../assets/images/logo_linkedin.png';
import Phone from '../../assets/images/phone.png';
import Mail from '../../assets/images/mail.png';

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
         <a href='https://thomaslck10.github.io/Portfolio-Thomas-Luck/CV.pdf' target='_blank'>Télécharger mon CV</a>
         <div className='contact-footer'>
         
          <div className='phone-div'>
            <img src={Phone} className='logo-phone' alt='logo téléphone'></img>
            <p>06.42.92.57.52</p>
          </div>
         <div className='mail-div'>
            <img src={Mail} className='logo-mail' alt='logo mail'></img>
            <p>Thomas.luck10@outlook.fr</p>
         </div>
        </div>
         <h3>Réalisé par Thomas Luck</h3>
        </footer>
    )
}

export default Footer;