import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function EtirementsHautComponent (){
	return (
		<div id="etirements-haut-section" className="article">
			<h2>Étirements : Partie haute</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							<b>Infos Pratiques</b>:
							<ul>
								<li>Les étirements doivent toujours se faire sur un muscle sain et non douloureux</li>
								<li>Maintenir 15 à 20 secondes par étirement</li>
								<li>Répéter 5-6 fois l'exercice</li>
								<li>Ne jamais aller trop loin dans l'étirement pour éviter les blessures musculaires ou tendineuses</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
      	<div className="row">

        	<div className="col-md-6 medical-video">
						<h4>Trapèze supérieur</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/OkV0y3j58Dk"></iframe>
					</div>

        	<div className="col-md-6 medical-video">
						<h4>Grand Dorsal</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/PW4TuauWd-g"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Triceps</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/l4Y1mKS-JZE"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Petit et Grand rond</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/LuIWCTlopmA"></iframe>
					</div>

				</div>
			</div>


			<RDVButtonComponent/>

	  </div>
	)
}

export default EtirementsHautComponent;
