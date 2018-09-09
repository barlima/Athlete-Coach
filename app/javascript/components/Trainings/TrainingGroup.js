import React from 'react';
import styled from 'styled-components';
import { red, darkRed, darkGreen, lightGreen, sSize, mSize, xmSize, lSize } from '../../styles/Settings';
import AthleteDiv from './AthleteDiv';

const Athlete = styled.div`
  background: ${lightGreen};
  border: 0.3rem solid ${darkGreen};
  border-radius: 0.5rem;
  color: ${darkGreen};
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 0.5rem;
  width: 30rem;

  p {
    margin: 0;
  }

  button {
    background: ${lightGreen};
    border: none;
    color: ${darkGreen};
    height: ${xmSize};
    padding: 0;
    margin: 0;
  }
`

class TrainingGroup extends React.Component {

  state = {
    groupName: ''
  }

  setGroup = (e) => {
    e.preventDefault();
    const athletesIds = this.props.athletes;
    const groupName = e.target.elements.groupName.value;

    if (groupName !== null && groupName.replace(/\s/g,'') !== '') {
      this.props.setGroup(groupName, athletesIds);
      e.target.elements.groupName.value = '';
    } else {
      e.target.elements.groupName.value = '';
      e.target.elements.groupName.placeholder = 'Group name can\'t be blank!';
    }
  }

  render() {
    return(
      <form onSubmit={this.setGroup}>
        <input 
          type='text' 
          name='groupName' 
          placeholder="Group Name"
        />
        {this.props.athletes.map((athlete) => (
          <AthleteDiv
            athlete={athlete}
            key={athlete.id}
            buttonFunc={this.props.moveAthleteBack}
            buttonIcon='remove'
          />
        ))}
        <div>
          <input type='submit' value='Set group' disabled={!this.props.athletes.length} />
          <button type='button' onClick={this.props.individualize} disabled={!this.props.athletes.length}>Individualize</button>
          <button type='button' onClick={this.props.clearAll} disabled={!this.props.athletes.length}>Clear All</button>
        </div>
      </form>
    );
  }
}

export default TrainingGroup;