import Link from 'react-router-dom';
import React from 'react';

function MobileMenuComponent (){
 return (
    <div id="mobile-menu-section">
        <div className="pos-f-t">
        
        <h4 className="nav-title">Menu</h4>
        <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-light p-4">
            <div id="accordion">

                <ul className="list-group">
                <li>
                    <a href="/">Accueil</a>
                </li>

                <li>
                    <div>
                    <div id="headingTwo">
                        <a className="mobile-menu" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Mon Profil
                        </a>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <ul className="list-group">
                        <li>
                            <a className="dropdown-item" href="/thomas-tailleur">Thomas Tailleur</a>
                            {/*<a className="dropdown-item" href="/partenaires">Partenaires</a>*/}
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>

                <li>
                    <div>
                    <div id="headingThree">
                        <a className="mobile-menu" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Pour Qui ?
                        </a>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <ul className="list-group">
                        <li>
                            <a className="dropdown-item" href="/osteopathie-du-nourrisson">Ostéopathie du Nourrisson</a>
                            <a className="dropdown-item" href="/osteopathie-de-la-femme-enceinte">Ostéopathie de la femme enceinte</a>
                            <a className="dropdown-item" href="/osteopathie-de-l-enfant">Ostéopathie de l'enfant</a>
                            <a className="dropdown-item" href="/osteopathie-du-sportif">Ostéopathie du sportif</a>
                            <a className="dropdown-item" href="/osteopathie-de-l-adulte">Ostéopathie de l'adulte</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a href="/prendre-rendez-vous">Prendre Rendez-vous</a>
                </li>
                <li className="nav-item">
                    <a href="/contact">Contact</a>
                </li>

                </ul>

            </div>
            </div>
        </div>

        <nav id="nav-mobile" className="navbar navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </nav>

        </div>
      
    </div>
 )
}

export default MobileMenuComponent;
