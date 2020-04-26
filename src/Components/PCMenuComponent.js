import React from 'react';
import {Link} from 'react-router-dom';

function PCMenuComponent (){
 return (
    <div id='pc-menu-section'>
        <nav className="navbar navbar-expand-lg header-nav">
            <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
                <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mon Profil
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/thomas-tailleur" className="dropdown-item">Thomas Tailleur</Link>
                {/*<Link to="/partenaires" className="dropdown-item">Partenaires</Link>*/}
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pour Qui ?
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/osteopathie-du-nourrisson">Ostéopathie du nourrisson</Link>
                <Link className="dropdown-item" to="/osteopathie-de-la-femme-enceinte">Ostéopathie de la femme enceinte</Link>
                <Link className="dropdown-item" to="/osteopathie-de-l-enfant">Ostéopathie de l'enfant</Link>
                <Link className="dropdown-item" to="/osteopathie-du-sportif">Ostéopathie du sportif</Link>
                <Link className="dropdown-item" to="/osteopathie-de-l-adulte">Ostéopathie de l'adulte</Link>
                </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vidéos
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/etirements">Étirements: Généralité</Link>
                <Link className="dropdown-item" to="/etirements-partie-haute">Étirements: Partie Haute</Link>
                <Link className="dropdown-item" to="/etirments-partie-basse">Étirements: Partie Basse</Link>
                <Link className="dropdown-item" to="/renforcement-musculaire">Renforcement Musculaire</Link>
                </div>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacts & Rendez-vous</Link>
            </li>
            </ul>
        </nav>
    </div>

 )
}

export default PCMenuComponent;
