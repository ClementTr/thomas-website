import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function ContactComponent (){
 return (
    <div id="contact-section">

      <div className='contact-title'>
        Me Contacter
      </div>
      <div className="container contact-content">
      	<div className="row">
        	<div className="col-md-12">
            <div className="article-content">
              <p>
              Pour prendre rendez-vous, il suffit de me contacter par téléphone au <b>06 43 89 09 50</b>.<br/>
              Je suis à votre disposition pour répondre à toutes vos questions, alors n’hésitez pas
              à envoyer un mail: <b>tailleur.osteo@gmail.com</b>.<br/>
              </p>

              <p>
              Pour tout changement ou annulation de rendez-vous veuillez prévenir 48h à l’avance.<br/>
              Si vous avez effectué des examens complémentaires récents, tel que des imageries médicales,
              des examens biologiques, ou encore des comptes-rendus opératoires, veuillez les apporter.
              </p>
            </div>
        	</div>
				</div>
			</div>

      <div className="container access-content">
        <div className="row">
           <div className="col">
              <h4 className="contact-city-title">Cabinet de Clichy</h4>
              <div className="contact-city-address">
                40 Bis rue Villeneuve<br/>
                92110 Clichy
              </div>
              <div className="contact-city-access">
                <b>Accès:</b><br/>
                Métro - Mairie de Clichy (ligne 13)<br/>
                Bus - Mairie de Clichy - Metro (ligne 54)<br/>
                Bus - Rue Martre - Mairie De Clichy. (ligne TUC)
              </div>

              <iframe width="100%" height="300px" src="https://maps.google.com/maps?q=40%20Bis%20rue%20Villeneuve%2092110%20Clichy&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
              </iframe>
           </div>
           <div className="vl"></div>
           <div className="col">
              <h4 className="contact-city-title">Cabinet de Issy-les-moulineaux</h4>
              <div className="contact-city-address">
                40 Boulevard Gambetta<br/>
                92130 Issy-les-moulineaux
              </div>
              <div className="contact-city-access">
                <b>Accès:</b><br/>
                Métro: Ligne 12   Corentin Celton<br/>
                RER - Issy Val De Seine (ligne C)<br/>
                Bus - Corentin Celton-Metro (lignes 126, 189 et 394)
              </div>
              <iframe width="100%" height="300px" src="https://maps.google.com/maps?q=40%20Boulevard%20Gambetta%2092130%20Issy-les-moulineaux&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
              </iframe>
           </div>
        </div>
      </div>

      <RDVButtonComponent/>


    </div>
 )
}

export default ContactComponent;
