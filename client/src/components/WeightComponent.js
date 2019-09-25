import React, { Component } from 'react'
import axios from 'axios';
import WeightHistoryComponent from './WeightHistoryComponent';
import {BASE_API_URL} from '../config';

class WeightComponent extends Component {

    constructor() {
        super();
        this.state = {
            sent: false,
            weight: 0.00,
            createdAt: '',
            history: []
        }
    }

    getWeights = () => {
      axios.get(`${BASE_API_URL}/api/weights`)
      .then((response) => {
          this.setState(() => {
              return { history: response.data }
          })
      })
      .catch(function (error) {
          console.log('hey', error);
      });
    }

    componentWillMount() {
      this.getWeights();
    }

    handleWeightChange = (event) => {
      this.setState({weight: event.target.value});
    }

    handleDateChange = (event) => {
      this.setState({createdAt: event.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      return axios.post(`${BASE_API_URL}/api/weights`, {kilograms: Number.parseFloat(this.state.weight), createdAt: new Date(this.state.createdAt).toISOString()})
        .then((res) => console.log('Success'))
        .then(this.getWeights)
        .catch(e => console.log('Error', e))
  }

  render() {
      return (
        <div className="App-tile">
          <form className="form-horizontal">
            <div className="Input-container">
              <div className="Input-content">
              <label>
                Kg:
                <input type="number" className="form-control" onChange={this.handleWeightChange}  name="weight" />
              </label>
              </div>
              <div>
              <label>
                Date:
                <input type="date" className="form-control" onChange={this.handleDateChange}  name="date" />
              </label>
              </div>
            </div>  
          </form>
          <div className="btn-container">
            <button type="button" onClick={this.handleSubmit} className="Save-btn">Save</button>
          </div>
          <br />
          <WeightHistoryComponent weights={this.state.history}/>
        </div>
      );
  }
}

export default WeightComponent; 