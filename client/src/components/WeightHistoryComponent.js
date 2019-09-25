import React, { Component } from 'react'

class WeightHistoryComponent extends Component {

    handleWeightChange = (event) => {
      this.setState({weight: event.target.value});
    }

    renderTableContent = (weights) => {
      return (
        <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="col">Kg</th>
                <th scope="col">Date</th>
              </tr>
              {
                weights.map((weight, i) => {
                  const [year, month, date] = new Date(weight.createdAt).toISOString().substring(0,10).split('-')
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