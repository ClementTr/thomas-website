import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function EtirementsComponent (){
	return (
		<div id="etirements-section" className="article">
		  <h2>Étirements</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							<p>
								Les étirements jouent un rôle primordial dans la pratique du sport ou dans la vie quotidienne.
								Ils permettent de rendre votre muscle plus souple et compliant.<br/>
								Un muscle n'a qu'une fonction : celle de se contracter et uniquement de se contracter.
								Il n'a pas la fonction d'étirement. On peut définir la contraction musculaire par le rapprochement
								des tendons.<br/>
								L'absence de contraction n'est pas le relâchement du muscle (au sens étirement du terme).<br/>
								Ainsi pour toute personne ne pratiquant pas régulièrement d'étirement musculaire après le sport
								ou dans la vie de tous les jours, s'expose à des blessures de type: tendinopathies, claquages,
								déchirures musculaires ou raideur articulaire et douleurs musculaires.<br/>
								Il est très important de pratiquer régulièrement des étirements pour garder un bon état de santé
								tout au long de votre vie.
							</p>

							Certaines règles sont indispensables pour que les étirements soient bénéfiques.
							<ul>
								<li>un étirement ne doit jamais être douloureux</li>
								<li>il doit être fait au plus tôt 24H après l'exercice physique</li>
								<li>l'ensemble du groupe musculaire doit être étiré</li>
								<li>le muscle doit être sain, il ne doit pas y avoir de lésion musculaire existant
								au risque d'aggraver la blessure : déchirure, claquage, contracture musculaire ect ...</li>
							</ul>

							<p>
								Au cours de l'effort, le muscle s'abime. En effet, de nombreuse micro-lésions apparaissent
								(selon l'intensité et le sport pratiqué). Ces micro-lésions sont physiologiques, normales,
								voir nécéssaires dans certains cas ( Musculation ).<br/>
								Il est est vivement conseillé de faire les étirements 24H après le sport afin de laisser cicatriser
								ces micro-lésions et ainsi pouvoir faire les étirements sur un muscle sain sans risque d'aggraver
								les lésions présentes.
							</p>

							<p>
								Le REPOS (ou temps de cicatrisation) est donc primordial entre le sport et les étirements.
							</p>

							<p>
								Un étirements ne doit jamais être douloureux:<br/>
								Le muscle est constitué de fibres qui glissent entre elles provoquant le raccourcissement de
								l'ensemble du groupe musculaire. C'est la contraction musculaire.<br/>
								Cependant, au sein même de votre muscle, la longueur des fibres musculaires varie. Il existe des
								fibres courtes, moyennes et grandes.<br/>
								Un étirement qui serait fait trop rapidement ou trop intensément déchirerait les fibres courtes
								et provoquerait des lésions musculaires et/ou tendinopathies ( lésion situé sur le tendon ).<br/>
								Pour qu'un étirement soit efficace , il faut qu'il soit réalisé sans douleur, et régulièrement...
							</p>

							<p>
								Les étirements doivent être fait régulièrement pour une optimisation des résultats.
							</p>

							<p>
								<b>REMARQUES:</b><br/>
								Les étirements n'ont pas de lien direct avec les courbatures musculaires.<br/>
								En effet, l'apparition des courbatures est la manifestation physiologique de l'accumulation
								des toxines musculaire, provoquée par l'effort , dans le muscle. Ces toxines sont produites
								pendant l'effort et continuent d'être produites après l'effort ( jusqu'à 48H ).
								C'est cette accumulation de toxines musculaires dans le corps qui provoque la sensation de
								courbature ( et souvent le lendemain et surlendemain de l'effort ). Une solution très simple pour
								éviter l'apparition de courbature: Une bonne hydratation régulière pendant l'effort et
								l'application de chaleur sur le muscle ( sain ) pour faciliter le drainage de ces toxines.
							</p>
						</div>

					</div>
				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default EtirementsComponent;
