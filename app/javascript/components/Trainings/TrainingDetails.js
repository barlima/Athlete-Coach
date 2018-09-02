import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

const Path = styled.div`
  display: flex;
`

class TrainingDetails extends React.Component {
  render() {
    return (
      <Path>
        <a href="/trainings">Trainings</a>
        <p>{">"}</p>
        <Link to={`/trainings/new/${this.props.match.params.date}/groups`}>Groups</Link>
        <p>{">"}</p>
        <Link to={`/trainings/new/${this.props.match.params.date}`}>Details</Link>
      </Path>
    )
  }
}

export default TrainingDetails;