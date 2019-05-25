import Link from 'react-router-dom'
import React from 'react';

function PartenairesComponent (){
 return (
   <div id="partenaires-section" className="partenaires">
     <div className="container">

      <h2>PARTENAIRES</h2>

      <div className="col-md-12 box-margin">
       <a className="box" href="/data-science/etl">
          <div className="media">
            <img className="align-self-center mr-3 media-object media-img" width="200px" src='img/alexandre.png' alt="Generic placeholder image"/>
            <div className="media-body">
              <h4>Alexandre LEVESQUE</h4>
              <span className="mr-2">Ostéopathe</span>
              <span className="mr-2">www.levesquealexandreosteopathe.com</span>
              <p>
                Prendre rendez-vous
              </p>
            </div>
          </div>
        </a>
      </div>


      <div className="col-md-12 box-margin">
       <a className="box" href="/data-science/nlp">
          <div className="media">
            <img className="align-self-center mr-3 media-object media-img" src='img/kevin.png' width="200px" alt="Generic placeholder image"/>
            <div className="media-body">
              <h4>Kévin LECUELLET</h4>
              <span className="mr-2">Ostéopathe</span>
              <span className="mr-2"> www.osteolecuellet.fr</span>
              <p>
                Prendre rendez-vous
              </p>
            </div>
          </div>
        </a>
      </div>


     </div>
   </div>
 )
}

export default PartenairesComponent;
