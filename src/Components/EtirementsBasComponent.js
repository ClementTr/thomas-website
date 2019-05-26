import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function EtirementsBasComponent (){
	return (
		<div id="etirements-bas-section" className="article">
			<h2>Étirements : Partie basse</h2>
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
						<h4>Fessiers et piriforme</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/AZqmCvScrd4"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Ischio-jambier</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/AoeQIfCm3qI"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Adducteurs</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/N9t6dNHEJUI"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Mollets</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/uO7_515A0ms"></iframe>
					</div>

					<div className="col-md-6 medical-video">
						<h4>Psoas</h4>
						<iframe allowFullScreen="allowfullscreen" width="100%" height="300px" src="https://www.youtube.com/embed/V6sLYVQu9Ng"></iframe>
					</div>

				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default EtirementsBasComponent;
