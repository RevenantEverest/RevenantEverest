import React, { Component } from 'react';
import './HomePage.css';

import services from '../../services/apiServices';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      channelInfo: null,
      apiDataRecieved: false
    }
  }

  componentDidMount() {
    services.getStreamInfo('RevenantEverest')
      .then(result => {
        console.log(result.data);
        this.setState({
          channelInfo: result.data
        })
        services.streamStatus('RevenantEverest')
          .then(result => {

          })
          .catch(err => {
            console.log('Failed at Stream Status', err);
          })
      })
      .catch(err => {
        console.log('Failed at Get Stream Info', err);
      })
  }

  render() {
    return(
      <div className="HomePage">
        <div className="HomePage-box1">
          <div className="HomePage-box1-vignette">
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
