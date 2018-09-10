import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components';
import { red, darkRed, darkGreen, lightGreen, sSize, mSize, xmSize, lSize } from '../../styles/Settings';

const GroupWrapper = styled.div`
  border-darius: 0.5rem;
  display: flex;
  flex-direction: column;

  p {
    color: ${darkRed};
    flex: 1;
  }
`

const GroupHeader = styled.div`
  background: ${darkRed};
  border-bottom: 0.3rem solid ${red};
  border-radius: 0.5rem 0.5rem 0 0;
  color: white;
  display: flex;
  flex: 1
  justify-content: space-between;
  padding: 0.7rem;
  padding-top: 0.9rem;
  padding-bottom: 0;

  h3 {
    flex: 1;
    // font-weight: bold;
  }

  i {
    font-size: 1.8rem;
  }
`

const RemoveButton = styled.button`
  background: ${darkRed};
  border: none;
  color: white;
  font-size: ${mSize};
  padding: 0;

  i {
    // font-weight: bold;
    margin-bottom: 3px;
    padding: 0;
  }
`;

class GroupDiv extends React.Component {

  remove = () => { 
    this.props.removeGroup(this.props.group);
  }

  render() {
    return(
      <GroupWrapper>
        <GroupHeader>
          <h3>{this.props.group.name}</h3>
          <RemoveButton onClick={this.remove}>
            <i className="material-icons">delete</i>
          </RemoveButton>
        </GroupHeader>
        {this.props.group.athletes.map((athlete) => {
          return (
            <p key={athlete.id}>
              - {`${athlete.first_name} ${athlete.last_name}`}
            </p>
          )
        })}
      </GroupWrapper>
    )
  }
}

export default GroupDiv;
