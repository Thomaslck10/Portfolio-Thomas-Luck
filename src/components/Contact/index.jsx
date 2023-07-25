import '../../styles/Contact.css';
import Phone from '../../assets/images/phone.png';
import Mail from '../../assets/images/mail.png';

function Contact() {
    return (
        <section id='Contact'>
            <div>
            <img src={Phone}></img>
            <p>06.42.92.57.52</p>
            </div>
            <div>
            <img src={Mail}></img>
            <p>Thomas.luck10@outlook.fr</p>
            </div>
        </section>
    )
}

export default Contact;