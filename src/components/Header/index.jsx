import '../../styles/Header.css';

function Header() {
    return (
        <header>
            <nav className='nav-bar'>
                <a href="About">
                    À propos
                </a>
                <a href="Skills">
                    Compétences
                </a>
                <a href="#">
                    Portfolio
                </a>
                <a href="#">
                    Contact
                </a>
            </nav>
        </header>
    )
}

export default Header;