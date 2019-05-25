import SupHeaderComponent from './SupHeaderComponent';
import React from 'react';

function HeaderComponent (){
  return (
    <div id="header-navbar" className="header">

      <SupHeaderComponent/>

      <div id="pc">
        <nav className="navbar navbar-expand-lg header-nav">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <a className="nav-link" href="/">Accueil</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mon Profil
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/thomas-tailleur">Thomas Tailleur</a>
                <a className="dropdown-item" href="/partenaires">Partenaires</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pour Qui ?
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/osteopathie-du-nourrisson">Ostéopathie du Nourrisson</a>
                <a className="dropdown-item" href="/osteopathie-de-la-femme-enceinte">Ostéopathie de la femme enceinte</a>
                <a className="dropdown-item" href="/osteopathie-de-l-enfant">Ostéopathie de l'enfant</a>
                <a className="dropdown-item" href="/osteopathie-du-sportif">Ostéopathie du sportif</a>
                <a className="dropdown-item" href="/osteopathie-de-l-adulte">Ostéopathie de l'adulte</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vidéos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/etirements">À Savoir: Étirements</a>
                <a className="dropdown-item" href="/etirements-partie-haute">Étirements: Partie Haute</a>
                <a className="dropdown-item" href="/etirments-partie-basse">Étirements: Partie Basse</a>
                <a className="dropdown-item" href="/renforcement-musculaire">Renforcement Musculaire</a>
              </div>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="/prendre-rendez-vous">Prendre Rendez-vous</a>
            </li>*/}
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contacts & Rendez-vous</a>
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
