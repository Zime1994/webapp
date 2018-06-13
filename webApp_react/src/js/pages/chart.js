import React from 'react';
import {Line} from 'react-chartjs-2';



export default class Chart extends React.Component{

  constructor() {
    super();
    this.state = {
      items: [],
      data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: 'Points',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1,2,3,4]

        }
      ]
    }
    };
  }

  componentDidMount() {
    this.reloadData();

  }


  reloadData() {
    fetch('http://localhost:3000/score/useractions/1').then(function(response) {
      return response.json();
    }).then(myJson => {
      this.setState({
        items: myJson.actions
      });
    });
  }






  render() {




    return (
      <div>

        <Line data={this.state.data} />
        
      </div>
    );
  }
}
