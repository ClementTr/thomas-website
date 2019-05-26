import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function RenforcementComponent (){
	return (
		<div id="renforcement-section" className="article">
			<h2>Renforcement musculaire</h2>
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
						<h4>Échauffement musculaire</h4>
						{/*}<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/OkV0y3j58Dk">
						</iframe>*/}
					</div>

					<div className="col-md-6 medical-video">
						<h4>Gainage</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/FQFAqXPAyrU"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Dos et Abdominaux</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/fAd0kNXZ6ng"></iframe>
					</div>

				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default RenforcementComponent;
