import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import AthleteRemoveModal from './AthleteRemoveModal';
import { red, darkRed, green, darkGreen, sSize, mSize, lSize } from '../../styles/Settings';

const Options = styled.div`
  display: flex;
  width: 100%;
`;

const RemoveButton = styled.button`
  background: ${darkGreen};
  border: none;
  color: ${green};
  font-size: ${mSize};
  height: 30px;
  margin-right: 1px;
  padding: 0;
  width: 30px;

  i {
    // font-weight: bold;
    margin-top: 3px;
    padding: 0;
  }
`;

const EditButton = styled.button`
  background: ${darkGreen};
  border: none;
  color: ${green};
  font-size: ${mSize};
  height: 30px;
  margin-left: 1px;
  padding: 0;
  width: 30px;

  i {
    // font-weight: bold;
    margin-top: 3px;
    padding: 0;
  }
`;

class AthleteRemove extends React.Component {
  state = {
    removeAthleteId: undefined
  }

  clearRemoveAthleteId = () => {
    this.setState(() => ({ removeAthleteId: undefined }));
  }

  render() {
    return (
      <div>
        <Options>
          <RemoveButton onClick={e => {
            e.preventDefault();
            this.setState(() => ({ removeAthleteId: this.props.athleteId }))
          }}>
            <i className="material-icons">delete</i>
          </RemoveButton>
          <EditButton>
            <i className="material-icons">edit</i>
          </EditButton>
        </Options>
        <AthleteRemoveModal 
          removeAthleteId={this.state.removeAthleteId}
          handleRemove={this.props.handleRemove}
          clearRemoveAthleteId={this.clearRemoveAthleteId}
        />
      </div>
    )
  }
}

AthleteRemove.propTypes = {
  athleteId: PropTypes.string,
  handleRemove: PropTypes.func
};

export default AthleteRemove;