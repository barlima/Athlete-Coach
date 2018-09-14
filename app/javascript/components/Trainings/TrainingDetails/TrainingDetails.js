import React from 'react';
import Dropdown from 'react-dropdown'
import styled from 'styled-components';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { red, darkRed, darkGreen, lightGreen, sSize, mSize, xmSize, lSize, green } from '../../../styles/Settings';
import TrainingElement from './TrainingElement';

const Panel = styled.div`
  display: flex;
  margin-top: ${lSize};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Athletes = styled.div`
  width: 25%;
`

const GroupsDropdown = styled(Dropdown)`
  background: ${lightGreen};
  border-radius: 0.5rem;
  flex: 1;
  width: 40rem;
  
  div.Dropdown-control {
    border: 0.3rem solid ${darkGreen};
    border-radius: 0.5rem;
    color: ${darkGreen};
    font-weight: bold;
    padding: 0.5rem;
    width: 40rem;
  }

  div.Dropdown-menu {
    border: 0.3rem solid ${darkGreen};
    background: ${lightGreen};
    color: ${darkGreen};
    margin-top: -0.3rem;
    padding: 0.5rem;
    position: absolute;
    width: 40rem;

    div.Dropdown-option {
      padding: 0.3rem 0;

      &:hover {
        cursor: pointer;
      }
    }

    div.is-selected {
      color: ${green};
    }
  }
`;

class TrainingDetails extends React.Component {
  _onSelect = (option) => {
    const trainingDate = this.props.match.params.date;
    this.props.history.push(`/trainings/new/${trainingDate}/${option.value}`);
  };

  nameWithCount = (group) => {
    if (group !== undefined) {
      return `${group.name} (${group.athlete_ids.length})`;
    }
  };
  
  render() {
    return(
      <Wrapper>
        <GroupsDropdown 
          options={this.props.training.training_groups.map((group) => (
            {
              value: group.id, 
              label: this.nameWithCount(group)
            }
          ))}
          value={this.props.match.params.id || this.nameWithCount(this.props.training.training_groups[0])}
          onChange={this._onSelect}
        />
        <Panel>
          <Athletes>
            <h3>Athletes:</h3>
          </Athletes>
          <div>
            <TrainingElement />
          </div>
        </Panel>
      </Wrapper>
    )
  }
}

export default withRouter(TrainingDetails);