import React from "react"
import PropTypes from "prop-types"
import AthleteRemoveModal from './AthleteRemoveModal';

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
        <button onClick={e => {
          e.preventDefault();
          this.setState(() => ({ removeAthleteId: this.props.athleteId }))
        }}>
          Remove
        </button>
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