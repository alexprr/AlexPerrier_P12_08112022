import logo from '../assets/logo.svg'

import style from '../styles/TopMenu.module.css'

const TopMenu = () => {
  return (
    <header>
      <nav>
        <ul>
          <a href='/'><img src={logo} alt='Logo'/></a>
          <a href='/'>
            <li>Accueil</li>
          </a>
          <a href='/'>
            <li>Profil</li>
          </a>
          <a href='/'>
            <li>Réglage</li>
          </a>
          <a href='/'>
            <li>Communauté</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default TopMenu