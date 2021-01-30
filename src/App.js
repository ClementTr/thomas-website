import NotFoundComponent from './Components/NotFoundComponent';
import HomeComponent from './Components/HomeComponent';
import CarouselComponent from './Components/CarouselComponent';
import HeaderComponent from './Components/HeaderComponent';
import ProfileComponent from './Components/ProfileComponent';
import FooterComponent from './Components/FooterComponent';
import PartenairesComponent from './Components/PartenairesComponent';
import RDVButtonComponent from './Components/RDVButtonComponent';
import EnceinteComponent from './Components/EnceinteComponent';
import NourrissonComponent from './Components/NourrissonComponent';
import EnfantComponent from './Components/EnfantComponent';
import SportifComponent from './Components/SportifComponent';
import AdultComponent from './Components/AdultComponent';
import ContactComponent from './Components/ContactComponent';
import EtirementsComponent from './Components/EtirementsComponent';
import EtirementsHautComponent from './Components/EtirementsHautComponent';
import EtirementsBasComponent from './Components/EtirementsBasComponent';
import RenforcementComponent from './Components/RenforcementComponent';
import PopupComponent from './Components/PopupComponent'
import 'react-notifications/lib/notifications.css';


import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {

  componentDidMount() {
    document.getElementById("popup").click()
  }
    
  render() {

    return (
      <Router>
        <PopupComponent />
        <div>
          <HeaderComponent/>

          <Switch>
            <Route exact path='/' component={HomeComponent}></Route>
            <Route exact path='/thomas-tailleur' component={ProfileComponent}></Route>
            <Route exact path='/partenaires' component={PartenairesComponent}></Route>
            <Route exact path='/osteopathie-du-nourrisson' component={NourrissonComponent}></Route>
            <Route exact path='/osteopathie-de-la-femme-enceinte' component={EnceinteComponent}></Route>
            <Route exact path='/osteopathie-de-l-enfant' component={EnfantComponent}></Route>
            <Route exact path='/osteopathie-du-sportif' component={SportifComponent}></Route>
            <Route exact path='/osteopathie-de-l-adulte' component={AdultComponent}></Route>
            <Route exact path='/contact' component={ContactComponent}></Route>
            <Route exact path='/etirements' component={EtirementsComponent}></Route>
            <Route exact path='/etirements-partie-haute' component={EtirementsHautComponent}></Route>
            <Route exact path='/etirments-partie-basse' component={EtirementsBasComponent}></Route>
            <Route exact path='/renforcement-musculaire' component={RenforcementComponent}></Route>
            <Route component={NotFoundComponent}></Route>
          </Switch>

        </div>
        <FooterComponent/>
      </Router>
    );
  }

}

export default App;
