import React, { Component } from 'react'
import axios from 'axios';
import WeightHistoryComponent from './WeightHistoryComponent';

class WeightComponent extends Component {

    constructor() {
        super();
        this.state = {
            sent: false,
            weight: 0.00,
            date: '',
            history: []
        }
    }

    getWeights = () => {
      axios.get('api/weights')
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

    // handleDateChange = (event) => {
    //   this.setState({date: event.target.value});
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      const w = this.state.weight;
      console.log('This is weight', this.state.weight)
      return axios.post('api/weights', {kilograms: Number.parseFloat(w)})
        .then((res) => console.log('Success'))
        .then(this.getWeights)
        .catch(e => console.log('Error', e))
  }

  render() {
      return (
        <div>
          <form className="form-horizontal">
            <div>
              <label>
                Kg:
                <input type="number" className="form-control" onChange={this.handleWeightChange}  name="weight" />
              </label>
            </div>
            {/* <div> 
              <label>
                Kg:
                <input type="date" className="form-control" onChange={this.handleDateChange}  name="date" />
              </label>
            </div>   */}
          </form>
          <button type="button" onClick={this.handleSubmit} className="btn">Save</button>
          <br />
          <WeightHistoryComponent weights={this.state.history}/>
        </div>
      );
  }
}

export default WeightComponent; 