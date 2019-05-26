import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function EnfantComponent (){
	return (
		<div id="enfant-section" className="partenaires">
		  <h2>Ostéopathie de l'enfant</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							<p>
								Les traumatismes répétés durant l’enfance peuvent entrainer des conséquences sur l’équilibre
								du corps, pouvant perturber la croissance de l’enfant. Cette croissance se fait par définition
								de façon asymétrique. Il en résulte souvent des tensions musculaires multiples pouvant
								générer des douleurs dorsales, des lombalgies, des cervicalgies.
								<br/>
								De par sa compétence, l’ostéopathe pourra déceler les dysfonctionnements du corps de l’enfant
								afin de l’aider à son bon développement, tout en régulant ces différentes tensions que l’enfant ou
								l’adolescent pourrait présenter. Il peut suivre un enfant tout au long de sa croissance
								et l’accompagner lors de divers traumatismes rencontrés.
							</p>
							<p>
								La mise en place de l’appareil dentaire peut créer des tensions au niveau de la mâchoire et
								perturber ainsi tout le système mandibulaire. Ces tensions d’origine mécanique peuvent avoir
								un lien direct avec des douleurs cervicales et même perturber la posture de l’enfant.<br/>
								Le pouce dans la bouche, le port d’un appareil dentaire, entraînent un déséquilibre de la fonction
								crânienne et peut par la suite entraîner des troubles posturaux. L’enfant peut alors présenter,
								des troubles de la concentration, sommeil difficile, migraine, irritabilité…
							</p>
							<p>
								Pendant l’adolescence, l’enfant commence généralement la pratique d’une activité sportive.
								Ces activités sportive, le judo, l’aïkido, la boxe, la gymnastique, l’équitation, peuvent être
								à l’origine de différentes douleurs: dorsalgie, maux de ventre (stress des compétitions, anxiété),
								fatigue, lombalgie, douleur au talon (talalgie) etc.. L’ostéopathe peut accompagner de façon adapté,
								 l’enfant ou l’adolescent à l’épanouissement optimal de son activité sportive.
							</p>
							<p>
								Les conséquences de l’activité sportive chez l’enfant ne sont pas seulement les seuls critères
								pour voir un ostéopathe. Le port du cartable (souvent lourd pour les jeunes enfants) est en
								lien direct avec des douleurs d’épaules ou de dos, créant à long terme une mauvaise posture.
								Les troubles digestifs, les insomnies et l’anxiété peuvent être des symptômes que l’adolescent
								présente durant la scolarité, l’ostéopathie peut y remédier ou les minimiser de façon
								significative.<br/>
								Ces perturbations vont entraîner des inconforts ou des douleurs.
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
							<p>
								Douleurs de dos, scoliose, attitude scoliotique…<br/>
								Après un traumatisme : entorses, fractures, chutes…<br/>
								Troubles du développement psychomoteur<br/>
								Port d’un appareil dentaire, extraction dentaire/ après succion du pouce…<br/>
								Problèmes ORL chronique : angines, otites, sinusites…<br/>
								Problèmes digestifs : ballonnements, constipations…<br/>
								Difficulté de concentration à l’école<br/>
								Difficulté pour trouver le sommeil<br/>
								Trouble de l’humeur, hyperactivité, excitation<br/>
								Pour le suivi d’une activité sportive<br/>
							</p>
						</div>

						<p>
							› La consultation ostéopathique se passera en 3 temps : interrogatoire, diagnostique ostéopathique et traitement ostéopathique.
							<br/>
							Toutes les techniques utilisées seront adaptées à l’enfant, à sa souplesse, à sa croissance et ne seront jamais douloureuses.
						</p>
					</div>
				</div>
			</div>


			<RDVButtonComponent/>

	  </div>
	)
}

export default EnfantComponent;
