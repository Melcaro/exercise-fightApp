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
    const {
      users: { isLoading, users: usersList, error },
    } = this.props;
    const loader = isLoading && <h2>LOADING</h2>;
    return (
      loader || (
        <div style={{ margin: '0 auto' }}>
          {usersList.map(({ name, score, image }) => (
            <div>
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
