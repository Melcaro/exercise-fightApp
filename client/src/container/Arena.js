import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, addAnUser } from '../actions';

class Arena extends Component {
  componentDidMount() {
    this.getFightersList();
  }

  getFightersList = () => {
    this.props.getUsers();
  };

  render() {
    console.log(this.props);
    const {
      users: { isLoading, users: usersList, error },
    } = this.props;
    const loader = isLoading && <h2>LOADING</h2>;
    return (
      loader || (
        <div>
          {usersList.map(({ name, score }) => (
            <div>
              <div>{name}</div>
              <div>{score}</div>
            </div>
          ))}
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUsers, addAnUser }, dispatch);

const ConnectedArena = connect(mapStateToProps, mapDispatchToProps)(Arena);

export default ConnectedArena;
