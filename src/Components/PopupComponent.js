import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(
            "Cabinet ouvert jusqu'à 20h même en période de Covid", 
            '', 
            80000, 
            () => { }
          );
          break;
      }
    };
  };
 
  render() {
    return (
      <div >
        <button className='btn btn-info' id='popup' style={{display:'none'}}
          onClick={this.createNotification('info')}>Info
        </button>
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Example;