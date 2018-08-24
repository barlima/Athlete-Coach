import React from 'react';
import PropTypes from "prop-types"
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Modal from 'react-modal';

class AthleteRemoveModal extends React.Component {
  state = {
    mutation: gql`
      mutation RemoveAthlete($id: ID!) {
        removeAthlete(id: $id) {
          id
        }
      }
    `
  }
  
  render() {
    return (
      <Mutation
        mutation={this.state.mutation}
        update={(store, {data: { removeAthlete }}) => this.props.handleRemove(removeAthlete.id)}  
      >
        {(removeAthlete, { data }) => (
          <Modal
            isOpen={!!this.props.removeAthleteId}
            contentLabel="Remove Athlete Modal"
            ariaHideApp={false}
          >
            <p>Are you sure?</p>
            <button onClick={e => {
                e.preventDefault();
                removeAthlete({ variables: {
                  id: this.props.removeAthleteId
                }});
                this.props.clearRemoveAthleteId();
              }}
            >
              Yes
            </button>
            <button onClick={e => {
                e.preventDefault();
                this.props.clearRemoveAthleteId();
              }}
            >
              No
            </button>
          </Modal>
        )}
      </Mutation>
    )
  }
};

AthleteRemoveModal.propTypes = {
  removeAthleteId: PropTypes.string,
  handleRemove: PropTypes.func,
  clearRemoveAthleteId: PropTypes.func
};

export default AthleteRemoveModal;