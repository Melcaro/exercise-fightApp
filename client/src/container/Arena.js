import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';

import { attributeScores } from '../services/MatchSrv';

class Arena extends Component {
  componentDidMount() {
    this.getFightersList();
  }

  getFightersList = () => {
    this.props.getUsers();
  };

  attributeScore = (winnerID, looserID) => {
    attributeScores(winnerID, looserID);
  };

  render() {
    const {
      users: { isLoading, users: usersList },
    } = this.props;
    const fighter1 = usersList[0];
    const fighter2 = usersList[1];
    console.log(f1ID);
    const loader = isLoading && <h2>LOADING</h2>;
    return (
      loader || (
        <div style={{ margin: '0 auto' }}>
          <h2>Choose the winner:</h2>
          {/* {usersList.map(({ _id, name, image }) => (
            <div key={_id}>
              <div>{name}</div>
              <div
                style={{ width: '200px', height: '300px', margin: '0 auto' }}
              >
                <img
                  src={`${image}`}
                  alt="fighter pic"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          ))} */}
          <button>SCORES</button>
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUsers }, dispatch);

const ConnectedArena = connect(mapStateToProps, mapDispatchToProps)(Arena);

export default ConnectedArena;
