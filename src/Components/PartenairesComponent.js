import Link from 'react-router-dom'
import React from 'react';

function PartenairesComponent (){
 return (
   <div id="partenaires-section" className="partenaires">
     <div className="container">

      <h2>Partenaires</h2>

      <div className="col-md-12 box-margin">
       <a className="box" target="_blank" href="http://www.levesquealexandreosteopathe.com">
          <div className="media">
            <img className="align-self-center mr-3 media-object media-img" width="150px" src='img/alexandre.png' alt="Generic placeholder image"/>
            <div className="media-body">
              <h4>Alexandre LEVESQUE</h4>
              <p>Ostéopathe</p>
              <p>www.levesquealexandreosteopathe.com</p>
            </div>
          </div>
        </a>
      </div>


      <div className="col-md-12 box-margin">
       <a className="box" target="_blank" href="http://www.osteolecuellet.fr">
          <div className="media">
            <img className="align-self-center mr-3 media-object media-img" src='img/kevin.png' width="150px" alt="Generic placeholder image"/>
            <div className="media-body">
              <h4>Kévin LECUELLET</h4>
              <p>Ostéopathe</p>
              <p>www.osteolecuellet.fr</p>
            </div>
          </div>
        </a>
      </div>


     </div>
   </div>
 )
}

export default PartenairesComponent;
