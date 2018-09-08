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

  render() {
    return(
      <div>
        <input type='text' placeholder="Group Name"/>
        {this.props.athletes.map((athlete) => (
          <AthleteDiv
            athlete={athlete}
            key={athlete.id}
            buttonFunc={this.props.moveAthleteBack}
            buttonIcon='remove'
          />
        ))}
        <div>
          { this.props.athletes.length > 0 && <button>Set group</button> }
          { this.props.athletes.length > 1 && <button>Individualize</button> }
          { this.props.athletes.length > 1 && <button onClick={this.props.clearAll}>Clear All</button> }
        </div>
      </div>
    );
  }
}

export default TrainingGroup;