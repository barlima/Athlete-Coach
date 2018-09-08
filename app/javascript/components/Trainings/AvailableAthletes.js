import React from 'react';
import AthleteDiv from './AthleteDiv';

class AvailableAthletes extends React.Component {
  render() {
    return (
      <div>
        <h3>Available Athletes</h3>
        {this.props.athletes.map((athlete) => {
          return (
            <AthleteDiv
              athlete={athlete}
              key={athlete.id}
              buttonFunc={this.props.moveAthlete}
              buttonIcon='add'
            />
          )
        })}
      </div>
    )
  }
}

export default AvailableAthletes;