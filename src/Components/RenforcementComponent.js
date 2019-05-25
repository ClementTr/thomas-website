import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function RenforcementComponent (){
	return (
		<div id="nourrisson-section" className="partenaires">
			<div className="container">
      	<div className="row">
					<h2>Renforcement musculaire</h2>
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
					<h4>Échauffement musculaire</h4>
        	<div className="col-md-12">

					</div>

					<h4>Gainage</h4>
        	<div className="col-md-12">

					</div>

					<h4>Dos et Abdominaux</h4>
        	<div className="col-md-12">

					</div>

				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default RenforcementComponent;
