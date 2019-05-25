import React from 'react';

function FooterComponent (){
 return (
   <div id="footer-section" className="site-footer">
     <div className="container">
       <div className="row">
         <div className="col-md-5">
          <h3>Dernière Vidéo</h3>
          <iframe allowFullScreen="allowfullscreen" src="https://www.youtube.com/embed/AZqmCvScrd4"></iframe>
         </div>
         <div className="col-md-4">
          <h3>Contacts</h3>
          <ul className="list-unstyled">
            <li>06.43.89.09.50</li>
            <li>tailleur.osteo@gmail.com</li>
            <li><a href="https://www.doctolib.fr/osteopathe/clichy/thomas-tailleur" target="_blank">Rendez-vous en ligne</a></li>
          </ul>

         </div>
         <div className="col-md-3">
          <h3>Réseaux</h3>
          <ul className="list-unstyled footer-social">
            <li><a href="https://www.doctolib.fr/osteopathe/clichy/thomas-tailleur" target="_blank">Doctolib</a></li>
            <li><a href="https://www.linkedin.com/in/thomas-tailleur-995355111/" target="_blank">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/osteopathetailleurthomas/" target="_blank">Facebook</a></li>
          </ul>
         </div>
      </div>
     </div>
   </div>

 )

}

export default FooterComponent;
