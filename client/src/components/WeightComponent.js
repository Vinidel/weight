import React, { Component } from 'react'
import axios from 'axios';
import WeightHistoryComponent from './WeightHistoryComponent';
import SpinnerComponent from './SpinnerComponent';
import {BASE_API_URL} from '../config';

class WeightComponent extends Component {

    constructor() {
        super();
        this.state = {
            fetching: true,
            weight: 0.00,
            createdAt: '',
            history: []
        }
    }

    componentWillMount() {
      this.getWeights();
    }

    getWeights = () => {
      axios.get(`${BASE_API_URL}/api/weights`)
      .then((response) => {
          this.setState(() => {
              return { history: response.data, fetching: false }
          })
      })
      .catch(function (error) {
          console.log('hey', error);
      });
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

  renderSpinner = () => (<SpinnerComponent />)
  renderWeightHistory = () => {
    return <WeightHistoryComponent weights={this.state.history}/>;
  }
  render() {
      return (
        <div className="App-tile">
          <form className="form-group row">
              <label className="col-sm-2 col-form-label">
                Kg:
              </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" onChange={this.handleWeightChange}  name="weight" min="0" placeholder="0.00"/>
              </div>
              <label className="col-sm-2 col-form-label">
                Date:
              </label>
              <div className="col-sm-10">
                <input type="date" className="form-control" onChange={this.handleDateChange}  name="date" />
              </div>
          </form>
          <div className="btn-container">
            <button type="button" onClick={this.handleSubmit} className="btn btn-success">Save</button>
          </div>
          <br />
          {this.state.fetching ? this.renderSpinner() : this.renderWeightHistory()}
        </div>
      );
  }
}

export default WeightComponent; 