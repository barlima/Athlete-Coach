import React from 'react'
import PropTypes from "prop-types"
import AthletesTable from './AthletesTable.js';
import AthletesForm from './AthletesForm.js';

class AthletesWrapper extends React.Component {
  state = {
    athletes: []
  }

  onSubmit = (athlete) => {
    this.setState((prevState) => ({
      athletes: prevState.athletes.concat([{
        firstName: athlete.first_name,
        lastName: athlete.last_name,
        sex: athlete.sex,
        dateOfBirth: athlete.date_of_birth,
        id: athlete.id
      }])
    }));
  }

  handleRemove = (id) => {
    this.setState((prevState) => ({
      athletes: prevState.athletes.filter((athlete) => athlete.id !== id)
    }))
  }

  componentDidMount() {
    const athletes = this.props.athletes.map((athlete) => ({
        id: athlete.id,
        firstName: athlete.first_name,
        lastName: athlete.last_name,
        sex: athlete.sex,
        dateOfBirth: athlete.date_of_birth 
      }));
    
    this.setState(() => ({ athletes }));
  }

  render() {
    return (
      <div>
        <AthletesTable athletes={this.state.athletes} handleRemove={this.handleRemove} />
        <AthletesForm onSubmit={this.onSubmit} trainerId={this.props.trainerId} />
      </div>
    )
  }
}

AthletesWrapper.propTypes = {
  trainerId: PropTypes.number,
  athletes: PropTypes.array
};

export default AthletesWrapper;