import SupHeaderComponent from './SupHeaderComponent';
import React from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent (){
  return (
    <div id="header-navbar" className="header">

      <SupHeaderComponent/>

      <div id="pc">
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
                <Link to="/partenaires" className="dropdown-item">Partenaires</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pour Qui ?
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="/osteopathie-du-nourrisson">Ostéopathie du Nourrisson</Link>
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
                <Link className="dropdown-item" to="/etirements">À Savoir: Étirements</Link>
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

      <div id="mobile">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-light p-4">
              <h4 className="nav-title">Menu</h4>

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
                            <a className="dropdown-item" href="/partenaires">Partenaires</a>
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

    </div>

  )
}

export default HeaderComponent;
