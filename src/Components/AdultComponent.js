import React from 'react';
import RDVButtonComponent from './RDVButtonComponent'

function AdultComponent (){
	return (
		<div id="adult-section" className="article">
		  <h2>Ostéopathie de l'adulte</h2>
			<div className="container">
      	<div className="row">
        	<div className="col-md-12">
						<div className="article-content">
							<p>
								Avec l’âge, le corps humain perd de façon naturelle en mobilité. Sa capacité
								“d’auto-guérison” est diminuée. L’ostéopathie peut être préventive dans l’apparition de
								différentes douleurs. Plus vite l’ostéopathe élimine les tensions du corps, générées par des
								chutes, une mauvaise position au travail, un faux mouvement, des gestes répétitifs, et plus
								les compensations du corps ne s’installeront pas dans le temps. Le traitement sera plus efficace
								et les résultats plus probants.
							</p>

							<p>
								L’ostéopathie peut être une thérapie pour plusieurs motifs de consultation.
							</p>

							<p>
								L’ostéopathie intervient sur les motifs orthopédique et locomoteur tels que les lombalgies,
								les dorsalgies, les cervicalgies et autres douleurs articulaires. Avec l’âge, la qualité de
								l’articulation tend à diminuer et des douleurs de type arthrosique peuvent apparaitre.
							</p>

							<p>
								L’ostéopathe peut jouer un rôle important dans les motifs de type neurologique tels que les
								névralgies (par exemple NCB: Névralgie cervico brachiale) les cruralgies, les sciatalgies,
								les migraines..
							</p>

							<p>
								Les compétences de l’ostéopathe, une fois l’anamnèse bien faite, peuvent être plus importantes
								dans son champs thérapeutique. Il peut intervenir sur des motifs de type ORL et digestif.
								En effet, par cette perte de mobilité tissulaire au niveau des tissus mous (tendons,ligaments,
								muscles), l’ ostéopathe peut traiter différents troubles ORL en leur redonnant une qualité
								de perfusion (sanguine) et d’élasticité. Il peut traiter ainsi les sinusites à répétitions,
								les rhinites, les otites chroniques et certains vertiges et bourdonnements.<br/>
								<br/>
								Tout comme sur le plan digestif, l’ostéopathe a de bons résultats sur les ballonnements,
								les colites, troubles intestinaux (constipation, diarrhée) les reflux gastriques etc..
							</p>

							<p>
								L’ostéopathie dans sa globalité peut également avoir une importance dans le traitement
								de troubles mineurs (chutes, tendinites, entorse bénigne). Il peut dans certain cas améliorer
								l’état d’anxiété, certains troubles du sommeil.
							</p>

							<p>
								Attention, l’ostéopathe ne prétend pas tout soigner. Il n’intervient pas sur les maladies
								organiques et dégénératives, cancers, maladies infectieuses, sur l’arthrose propre,
								maladies génétiques…
							</p>
						</div>

					</div>
				</div>
			</div>

			<RDVButtonComponent/>

	  </div>
	)
}

export default AdultComponent;
