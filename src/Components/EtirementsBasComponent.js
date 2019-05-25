import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function EtirementsBasComponent (){
	return (
		<div id="nourrisson-section" className="partenaires">
			<div className="container">
      	<div className="row">
					<h2>Étirements : partie basse</h2>
        	<div className="col-md-12">
						Infos Pratiques:<br/><br/>
						Les étirements doivent toujours se faire sur un muscle sain et non douloureux.<br/>
						Maintenir 15 à 20 secondes par étirement<br/>
						Répéter 5-6 fois l'exercice. <br/>
						Ne jamais aller trop loin dans l'étirement pour éviter les blessures musculaires ou tendineuses.
					</div>
				</div>
			</div>

			<div className="container">
      	<div className="row">
					<h4>Fessiers et piriforme</h4>
        	<div className="col-md-12">

					</div>

					<h4>Ischio-jambier</h4>
        	<div className="col-md-12">

					</div>

					<h4>Adducteurs</h4>
        	<div className="col-md-12">

					</div>

					<h4>Mollets</h4>
        	<div className="col-md-12">

					</div>

					<h4>Psoas</h4>
        	<div className="col-md-12">

					</div>

				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default EtirementsBasComponent;
