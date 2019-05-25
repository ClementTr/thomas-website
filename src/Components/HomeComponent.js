import CarouselComponent from './CarouselComponent';
import Link from 'react-router-dom'
import React from 'react';

function HomeComponent (){
 return (
    <div id="home-section">
      <CarouselComponent/>

      <div className='purpose-title'>À PROPOS</div>

      <div className="container purpose-content">
        <div className="row">
           <div className="col">
             Créée en 1874 par un médecin américain, Andrew Taylor Still, l’ostéopathie est une médecine manuelle qui se veut à la fois préventive et curative. Elle prend en charge la globalité du corps et vise à conserver ou à restaurer la mobilité des différentes structures de l’organisme.<br/>
             Considéré comme le père de l’ostéopathie, Andrew Taylor Still fut l’un des premiers à comprendre à la fin du siècle dernier que l’équilibre propre à la santé passe par l’équilibre de la charpente osseuse, lui-même responsable de l’harmonie des systèmes nerveux, musculaire et circulatoire.<br/>
             <br/>
             Ceci l’amène à formuler les postulats suivants :<br/>
             « Lorsque toutes les parties du corps humain sont en ordre, nous avons la santé. Quand elles ne le sont pas, c’est là qu’apparait troubles, douleurs, dysfonctionnements. Le travail de l’ostéopathe est de rétablir une situation normale dans l’organisme à partir d’une situation anormale. Il en résultera la santé. »<br/>
             «La structure du corps gouverne sa fonction»
           </div>
           <div className="vl"></div>
           <div className="col">
             La médecine ostéopathique est l’art de diagnostiquer et de traiter par les mains les dysfonctions de micro-mobilité du corps pouvant entraîner un trouble de la fonction et provoquer au long terme  une altération de l’état de santé. L’ostéopathie améliore l’état de santé et traite les douleurs chroniques et celles qui résistent aux traitements par la médecine allopathique.<br/>
             <br/>
             L’ostéopathe utilise ses mains pour diagnostiquer et traiter l’origine de la douleur décrite par le patient. Les méthodes utilisées sont basées sur des années de formation et d’expérience. L’ostéopathe travaille en collaboration avec d’autres professionnels de la santé afin d’optimiser le traitement des douleurs et apporter le bien-être aux patients.
           </div>
        </div>
      </div>


    </div>
 )
}

export default HomeComponent;
