import React, { Component } from 'react';
import '../public/style/HomePage.css';

import services from '../services/apiServices';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      channelInfo: null,
      apiDataRecieved: false
    }
  }

  componentDidMount() {
    let data = {
      channel_name: 'RevenantEverest'
    }
    services.getStreamInfo(data)
      .then(result => {
        console.log(result.data);
        this.setState({
          channelInfo: result.data
        })
        services.streamStatus(data)
          .then(result => {
            
          })
      })
      .catch(err => {
        console.log(err);
        console.log('It didnt work');
      })
  }

  renderData() {
    return(
      <div>
        <h1>{this.state.apiData.display_name}</h1>
        <a href={`${this.state.apiData.url}`}>{this.state.apiData.url}</a>
      </div>
    );
  }

  render() {
    return(
      <div className="HomePage">
        {this.state.apiDataRecieved ? this.renderData() : ''}
      </div>
    );
  }
};

export default HomePage;
