import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';

import { attributeScores } from '../services/MatchSrv';

import { Fighters } from '../components/Fighters';

class Arena extends Component {
  componentDidMount() {
    this.getFightersList();
  }

  getFightersList = () => {
    this.props.getUsers();
  };

  attributeScore = async (winnerID, looserID) => {
    await attributeScores(winnerID, looserID);
    this.getFightersList();
  };

  render() {
    const {
      users: { isLoading, users: usersList },
    } = this.props;
    const loader = isLoading && <h2>LOADING</h2>;
    console.log(loader, usersList);
    return (
      loader || (
        <div style={{ margin: '0 auto' }}>
          <h2>Who wins?</h2>
          <Fighters
            usersList={usersList}
            attributeScore={this.attributeScore}
          />
          <Link to="/scores">
            <button>SCORES</button>
          </Link>
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
