import SupHeaderComponent from './SupHeaderComponent';
import PCMenuComponent from './PCMenuComponent';
import React from 'react';

function HeaderComponent (){
  return (
    <div id="header-navbar" className="header">

      <SupHeaderComponent/>

      <div id="pc-menu">
        <PCMenuComponent/>
      </div>

    </div>

  )
}

export default HeaderComponent;
