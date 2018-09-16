import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from 'react-dropdown'
import styled from 'styled-components';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { red, darkRed, darkGreen, lightGreen, sSize, mSize, xmSize, lSize, green } from '../../../styles/Settings';
import TrainingElement from './TrainingElement';
import TrainingPanel from './TrainingPanel';

const NoExcercises = styled.p`
  margin-top: 3rem;
  text-align: center;
`

const Panel = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${lSize};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Athletes = styled.div`
  width: 20%;
`;

const Excercises = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const AddElementButton = styled.button`
  background: ${lightGreen};
  border: 0.3rem solid ${darkRed};
  border-radius: 0 0 0.5rem 0.5rem;
  color: ${darkGreen};
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 0.5rem;

  &:hover {
    background: ${darkGreen};
    border: 0.3rem solid ${darkGreen};
    color: white;
  }
`;

const SaveButton = styled.button`
  background: ${darkGreen};
  border: 0.3rem solid ${darkRed};
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  margin: auto;
  margin-bottom: 6rem;
  padding: 0.5rem;
  width: 15rem;

  &:hover {
    background: ${darkRed};
  }
`;

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
  state = {
    excerciseIdCounter: 1,
    excercises: [{
      id: 0,
      name: undefined,
      type: 'SINGLE',
      series: []
    }]
  }

  _onSelect = (option) => {
    const trainingDate = this.props.match.params.date;
    this.props.history.push(`/trainings/new/${trainingDate}/${option.value}`);
  };

  nameWithCount = (group) => {
    if (group !== undefined) {
      return `${group.name} (${group.athlete_ids.length})`;
    }
  };
  
  addExcercise = () => {
    this.setState((prevState) => ({ 
      excercises: prevState.excercises.concat({
        id: prevState.excerciseIdCounter,
        name: undefined,
        type: 'SINGLE',
        series: []
      }),
      excerciseIdCounter: prevState.excerciseIdCounter + 1 
    }))
  };

  removeExcercise = (id) => {
    this.setState((prevState) => ({
      excercises: prevState.excercises.filter((e) => e.id !== id)
    }));
  };

  updateExcerciseName = (id, name) => {
    if (this.state.excercises.map((e) => e.id).includes(id)) {
      this.setState((prevState) => ({
        excercises: prevState.excercises.map((e) => {
          if (e.id === id) {
            return({
              id: id,
              name: name,
              type: e.type,
              series: e.series || []
            });
          } else {
            return e;
          }
        })
      }));
    } else {
      this.setState((prevState) => ({ excercises: prevState.excercises.concat({
        id: id,
        name: name,
        type: e.type,
        series: []
      })}));
    }
  }

  updateSeries = (id, row, column, value) => {
    this.setState((prevState) => ({
      excercises: prevState.excercises.map((e) => {
        if (e.id === id) {
          let table = e.series;
          table[row] = table[row] || [];
          table[row][column] = value; 

          return({
            id: id,
            name: e.name,
            type: e.type,
            series: table
          });
        } else {
          return e;
        }
      })
    }));
  }

  removeSeries = (id, row) => {
    this.setState((prevState) => ({
      excercises: prevState.excercises.map((e) => {
        if (e.id === id) {
          let s = e.series;
          s.splice(row, 1);

          console.log(s);

          return({
            id: id,
            name: e.name,
            type: e.type,
            series: s
          })
        } else {
          return e;
        }
      })
    }));
  }

  handleTypeChange = (id, type) => {
    // console.log(id, type);
    this.setState((prevState) => ({
      excercises: prevState.excercises.map((e) => {
        if (e.id === id) {
          return({
            id: id,
            name: name,
            type: type,
            series: []
          })
        } else {
          return e;
        }
      })
    }));
  }

  componentDidUpdate() {
    // console.log(this.state.excercises);
  }

  fillExcercises = () => {
    const excercises = this.state.excercises.map((e) => (
      <TrainingElement 
        key={e.id} 
        excerciseNumber={e.id}
        handleTypeChange={this.handleTypeChange}
        updateExcerciseName={this.updateExcerciseName}
        updateSeries={this.updateSeries}
        removeSeries={this.removeSeries}
        removeExcercise={this.removeExcercise}
      />
    ));

    return excercises;
  };

  isValid = () => {
    const tab = this.state.excercises.map((e) => {
      if (e.type === 'MULTIPLE') {
        return (e.name && e.series.length !== 0) ? true : false;
      } else {
        return e.name ? true : false;
      }
    });

    return !tab.includes(false);
  }

  save = () => {
    console.log(this.isValid());
    // console.log(this.state);
  }

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
          <Excercises>
            <TrainingPanel />
            {this.fillExcercises()}
            {
              this.state.excercises.length === 0 && 
              <NoExcercises>You have to add at least 1 excercise.</NoExcercises>
            }
            <AddElementButton onClick={this.addExcercise}>+ Add Excercise</AddElementButton>
            <SaveButton 
              onClick={this.save} 
              disabled={this.state.excercises.length === 0}
            >
              Save
            </SaveButton>
          </Excercises>
        </Panel>
      </Wrapper>
    )
  }
}

export default withRouter(TrainingDetails);