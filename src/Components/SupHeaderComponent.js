import RDVButtonComponent from './RDVButtonComponent';
import React from 'react';

function SupHeaderComponent (){
  return (
    <div className="container">
      <div className="row">
         <div className="col-md-2">
          <img src="/img/profile.png" className="profile-picture"/>
         </div>
         <div className="col-md-5">
            <div className="header-name">
             THOMAS TAILLEUR
            </div>
            <div className="header-job">
             Ostéopathe
            </div>
         </div>
         <div className="col-md-5">
            <div className="header-place">
              Clichy et Issy-les-Moulineaux
            </div>
            <div className="header-number">
              06 43 89 09 50
            </div>
            <RDVButtonComponent/>
         </div>
       </div>
     </div>
  )
}

export default SupHeaderComponent;
