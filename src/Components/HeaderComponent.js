import SupHeaderComponent from './SupHeaderComponent';
import PCMenuComponent from './PCMenuComponent';
import MobileMenuComponent from './MobileMenuComponent';
import React from 'react';
import {Link} from 'react-router-dom';

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
