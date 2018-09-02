import React from 'react';

class AvaliableAthletes extends React.Component {
  render() {
    return (
      <div>
        {this.props.athletes.map((athlete) => {
          return (
            <p>{athlete.first_name}</p>
          )
        })}
      </div>
    )
  }
}

export default AvaliableAthletes;