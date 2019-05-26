import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function EnceinteComponent (){
	return (
		<div id="enceinte-section" className="article">
		  <h2>Ostéopathie de la femme enceinte</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							<p>
								Les  Cabinets d’ostéopathie se situent à Issy-Les-Moulineaux ( limite avec le 15ème arrondissement,
									Vanves, Boulogne-Billancourt ) ainsi qu'à Clichy (92) près de la mairie.
							</p>

							<p>
								La femme enceinte va subir de nombreuses transformations au cours de sa grossesse.
								<br/>
								Au cours de la grossesse, il est fréquent, que des troubles fonctionnels, tels que des douleurs vertébrales
								(sciatalgie, cruralgie), des troubles digestifs (nausée, vomissement, constipation, digestion difficile),
								des sensations de pesanteur apparaissent.
							</p>

							<p>
								L’ostéopathie peut aider les femmes enceintes pour des troubles d’origine mécanique.
								<br/>
								Grâce à ses mains expertes, l’ostéopathe va aider à traiter ces dysfonctions et va aider le corps
								à s’adapter tout au long de la grossesse.
								<br/>
								En effet, lorsque le bébé se développe au sein de l’utérus pendant la grossesse, la femme
								enceinte peut rencontrer différents maux. La lombalgie est la plus fréquente car la traction
								du bébé par sa prise de poids entraine une hyperlordose de la femme enceinte. Cette compensation
								mécanique génère le plus souvent une contraction des muscles postérieurs du rachis lombaire et peut donc,
								sur le long terme, se manifester par une douleur.
								<br/>
								Le suivi ostéopathique pourra apporter à la maman un équilibre et un bien-être qui augmenterons
								le confort de votre futur bébé.
							</p>

							<p>
								L’ostéopathie va permettre également de mieux gérer le stress, d’améliorer les fonctions respiratoires,
								la relation mère-enfant et les troubles circulatoires.<br/>
								Un traitement ostéopathique avec des techniques douces, n’est ni dangereux, ni nocif pour le future bébé,
								car ce traitement est adapté et spécifique à la femme enceinte.<br/>
								L’ostéopathe, en libérant les tensions abdominales et celles du petit bassin, permet ainsi de limiter
								la position en siège du nourrisson qui peut rendre l’accouchement difficile et long. Une séance
								ostéopathique de préparation à l’accouchement est recommandée, elle aura pour but d’optimiser la mobilité
								du bassin et des structures environnantes, primordiale pour le jour J !
							</p>
						</div>

					</div>
				</div>
			</div>

			<h2>Quand consulter votre ostéopathe ?</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							Nausée, vomissement, constipation, ballonnement, digestion difficile…<br/>
							Douleur lombaire, coccygienne, sciatalgie, cruralgie…<br/>
							Remontées acides, brûlure derrière le sternum… <br/>
							Stress, fatigue…<br/>
							Trouble du sommeil, insomnie, migraines<br/>
							Sensation d’oppression thoracique<br/>
							Trouble de la circulation: jambes lourdes, hémorroïdes
						</div>
					</div>
				</div>
			</div>

			<h2>Après l'accouchement</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							Une consultation ostéopathique peut être envisagée, pour rééquilibrer certaines structures
							qui auraient pu être perturbées lors de l’accouchement (bassin, coccyx, périnée…), en complément
							de votre rééducation périnéale effectuée par votre kinésithérapeute ou sage-femme.
						</div>
					</div>
				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default EnceinteComponent;
