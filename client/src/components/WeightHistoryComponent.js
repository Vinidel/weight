import React, { Component } from 'react'

class WeightHistoryComponent extends Component {

    handleWeightChange = (event) => {
      this.setState({weight: event.target.value});
    }

    renderTableContent = (weights) => {
      return (
        <table >
            <tbody>
              <tr>
                <th>Kg</th>
                <th>Date</th>
              </tr>
              {
                weights.map((weight, i) => {
                  const [year, month, date] = new Date(weight.createdAt).toISOString().substring(0,10).split('-')
                  console.log('Index is', i); 
                  return (<tr key={i}>
                  <td>{weight.kilograms}</td>
                  <td>{`${date}/${month}/${year}`}</td>
                </tr>)
                })
               }
              </tbody>
        </table>
        )
    }

    renderEmptyTable = () => {
      return (
        <div>No content</div>
      )
    }

  render() {
    const {weights} = this.props;
      return (
        <div>
          {weights ? this.renderTableContent(weights) : this.renderEmptyTable() } 
        </div>
      );
  }
}

export default WeightHistoryComponent; 