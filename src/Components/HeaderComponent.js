import { useToasts } from 'react-toast-notifications'
import SupHeaderComponent from './SupHeaderComponent';
import PCMenuComponent from './PCMenuComponent';
import MobileMenuComponent from './MobileMenuComponent';
import React from 'react';
import {Link} from 'react-router-dom';

function HeaderComponent (){
  return (
    <div id="header-navbar" className="header">

      <SupHeaderComponent/>

      <div id="pc-menu">
        <PCMenuComponent/>
      </div>

      {/*INFORMATION FLAG*/}
      <div className="information-row">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <center>
                <h3>⚠️ INFORMATION COVID19 ⚠️</h3>
              </center>
                <br/>
                Le cabinet met en place toutes les mesures sanitaires strictes pour recevoir les patients dans les meilleures conditions.
                <br/>
                Il est demandé aux patients pour prendre rendez-vous de:
                <br/>
                <ol>
                  <li>Venir avec un masque (tissu, chirurgical ou type FFP2)</li>
                  <li>Respecter les gestes barrières</li>
                  <li>Ne pas venir accompagné(e)</li>
                  <li>Ne pas arriver en avance</li>
                  <li>Ne pas se présenter avec des symptomes typiques du COVID19 (toux, fièvre, fatigue) ➡️ Appelez votre médecin</li>
                </ol>
                <center>
                <i>
                  Le cabinet met en place des conditions sanitaires et hygièniques strictes comme la mise à disposition de gel hydroalcoolique.
                  <br/>
                  Pour toute information complémentaire, ne pas hésiter, avant de prendre rendez-vous, à consulter votre thérapeute.
                  <br/>
                  <br/>
                  Merci de votre confiance,
                  <br/>
                  Thomas TAILLEUR
                  <br/>
                </i>
              </center>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default HeaderComponent;
