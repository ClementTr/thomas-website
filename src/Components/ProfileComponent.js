import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function ProfileComponent (){
 return (
    <div id="profile-section">
      <div className="container">
           <div className="row">
               <div className="col-md-5">
                   <img src="img/profile2.png" width="80%" className="img-responsive"/>
               </div>
               <div className="col-md-7">
                 <div className="about-text">
                     <div className="section-title">
                         <h4>Formation</h4>
                         <hr/>
                         <div className="clearfix"></div>
                     </div>
                     <ul className="about-list">
                         <li>
                             <span className="fa fa-dot-circle-o"></span>
                             <strong>Ostéopathe D.O</strong> - <em>Diplômé du Collège Ostéopathique Européen de Cergy Saint-Christophe à l’issue d’une formation initiale de 5 ans, je suis à ce jour ostéopathe exclusif à Clichy la Garenne (92110) et à Issy-les-Moulineaux (92130).</em>
                         </li>
                         <li>
                             <span className="fa fa-dot-circle-o"></span>
                             <strong>MASTER II en OSTEOPATHIE</strong> - <em>Titulaire d’un Master II d’Ostéopathie de la faculté de DRESDE en Allemagne après avoir présenté un mémoire cas clinique et une recherche de littérature.</em>
                         </li>
                         <li>
                             <span className="fa fa-dot-circle-o"></span>
                             <strong>Diplôme Universitaire de soin et prise en charge traumatique chez le sportif</strong> - <em>Je suis également titulaire d’un DU d’Urgence Traumatique en milieu sportif, de la faculté de médecine de Bordeaux, me permettant d’assurer la prise en charge ainsi que le suivi du sportiftraumatisé aux cabinets ou en club ( Strapping, Cryothérapie, Kinésio-Taping, massagesdrainant, massages de récupération, etc…)</em>
                         </li>
                         <li>
                             <span className="fa fa-dot-circle-o"></span>
                             <strong>Ostéopathe équin</strong> - <em>Actuellement en fin de formation en ostéopathie équine à l’IFOREC de Paris.</em>
                         </li>
                     </ul>
                 </div>
               </div>
               <div className="article">
                 <div className="col-md-12">
                  <h2>Expérience Professionnelle</h2>
                  <p>
                    Diplômé du Collège Ostéopathique Européen à Cergy, j’ai reçu une formation en 5 ans, durant laquelle j’ai été formé à traiter plusieurs types de patients.
                    J’ai en effet pu prendre en charge des bébés, des femmes enceintes, des sportifs, ou encore des personnes âgées.
                  </p>

                  <p>
                    J’ai couvert de nombreux évènements dans le domaine du sport: Course croisière EDEHC, les 24H du VTT, championnat de france de Judo catégorie Juniors.
                  </p>

                  <p>
                    L’école du Collège Ostéopathique Européen (COE) est agrée par le ministère de la santé, me délivrant ainsi le Diplôme d’Ostéopathe ( D.O ), qui permet l’usage du Titre d’Ostéopathe, et l’exercice libéral d’ostéopathe.
                  </p>

                  <p>
                    De plus, elle fait partie des 11 écoles françaises d’ostéopathie, habilitées de Niveau 1 par le Ministère du Travail.
                  </p>

                  <p>
                    Concernant ma pratique ostéopathique, j’adapte mon traitement en fonction du motif de consultation, en prenant soin de considérer le patient dans sa globalité.
                    Pour ce faire je pratique aussi bien le structurel que le tissulaire, mais aussi les techniques crâniennes et viscérales.
                  </p>

                  <p>
                    Actuellement ostéopathe à Clichy-la-Garenne, au 40 Bis rue Villeneuve 92110, derrière la Mairie de Clichy et au 40 boulevard Gambetta Issy-les-Moulineaux 92130,au cabinet médical. Je vous accueille au sein de mes cabinets d’ostéopathie sur rendez-vous.
                  </p>
                 </div>
               </div>
          </div>
       </div>
       <RDVButtonComponent/>
    </div>
 )
}

export default ProfileComponent;
