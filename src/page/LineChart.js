import React from 'react';
import { Line } from 'react-chartjs-2'

import mydata from "../assets/js/datasets"

// const data = {
//   labels: [0, 0.0159, 0.0317, 0.0476, 0.0635, 0.0794, 0.0952, 0.1111, 0.127, 0.1429, 0.1587, 0.1746, 0.1905, 0.2063, 0.2222, 0.2381, 0.254, 0.2698, 0.2857, 0.3016, 0.3175, 0.3333, 0.3492, 0.3651, 0.381, 0.3968, 0.4127, 0.4286, 0.4444, 0.4603, 0.4762, 0.4921, 0.5079, 0.5238, 0.5397, 0.5556, 0.5714, 0.5873, 0.6032, 0.619, 0.6349, 0.6508, 0.6667, 0.6825, 0.6984, 0.7143, 0.7302, 0.746, 0.7619, 0.7778, 0.7937, 0.8095, 0.8254, 0.8413, 0.8571, 0.873, 0.8889, 0.9048, 0.9206, 0.9365, 0.9524, 0.9683, 0.9841, 1],
//   datasets: JSON.parse(JSON.stringify(mydata))
// };

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [0, 0.016, 0.032, 0.048, 0.063, 0.079, 0.095, 0.111, 0.127, 0.143, 0.159, 0.175, 0.19, 0.206, 0.222, 0.238, 0.254, 0.27, 0.286, 0.302, 0.317, 0.333, 0.349, 0.365, 0.381, 0.397, 0.413, 0.429, 0.444, 0.46, 0.476, 0.492, 0.508, 0.524, 0.54, 0.556, 0.571, 0.587, 0.603, 0.619, 0.635, 0.651, 0.667, 0.683, 0.698, 0.714, 0.73, 0.746, 0.762, 0.778, 0.794, 0.81, 0.825, 0.841, 0.857, 0.873, 0.889, 0.905, 0.921, 0.937, 0.952, 0.968, 0.984, 1],
        datasets: JSON.parse(JSON.stringify(mydata)),
        start: 1,
        end: mydata.length
      }
    }
  }

  handleStartChange = (evt) => {
    this.setState({ start: evt.target.value }, () => {
      this.setState({
        data: {
          labels: [0, 0.016, 0.032, 0.048, 0.063, 0.079, 0.095, 0.111, 0.127, 0.143, 0.159, 0.175, 0.19, 0.206, 0.222, 0.238, 0.254, 0.27, 0.286, 0.302, 0.317, 0.333, 0.349, 0.365, 0.381, 0.397, 0.413, 0.429, 0.444, 0.46, 0.476, 0.492, 0.508, 0.524, 0.54, 0.556, 0.571, 0.587, 0.603, 0.619, 0.635, 0.651, 0.667, 0.683, 0.698, 0.714, 0.73, 0.746, 0.762, 0.778, 0.794, 0.81, 0.825, 0.841, 0.857, 0.873, 0.889, 0.905, 0.921, 0.937, 0.952, 0.968, 0.984, 1],
          datasets: mydata.slice(this.state.start - 1, this.state.end),
          start: 1,
          end: this.state.end - this.state.start - 1
        }
      })
    })
  }

  handleEndChange = (evt) => {
    this.setState({ end: evt.target.value }, () => {
      this.setState({
        data: {
          labels: [0, 0.016, 0.032, 0.048, 0.063, 0.079, 0.095, 0.111, 0.127, 0.143, 0.159, 0.175, 0.19, 0.206, 0.222, 0.238, 0.254, 0.27, 0.286, 0.302, 0.317, 0.333, 0.349, 0.365, 0.381, 0.397, 0.413, 0.429, 0.444, 0.46, 0.476, 0.492, 0.508, 0.524, 0.54, 0.556, 0.571, 0.587, 0.603, 0.619, 0.635, 0.651, 0.667, 0.683, 0.698, 0.714, 0.73, 0.746, 0.762, 0.778, 0.794, 0.81, 0.825, 0.841, 0.857, 0.873, 0.889, 0.905, 0.921, 0.937, 0.952, 0.968, 0.984, 1],
          datasets: mydata.slice(this.state.start - 1, this.state.end),
          start: 1,
          end: this.state.end - this.state.start - 1
        }
      })
    })

  }

  render() {
    return (
      <div style={{ height: '80vh', padding: '3em' }}>
        <span> &nbsp;Start (min=1): </span>
        <input value={this.state.start} onChange={(event) => this.handleStartChange(event)} />
        <span> &nbsp;Ends (max= {mydata.length}): </span>
        <input value={this.state.end} onChange={(event) => this.handleEndChange(event)} />
        <Line
          data={this.state.data}
          width={100}
          height={40}
          options={{ legend: { display: false } }}
          redraw />
      </div>
    );
  }
}

export default LineChart;