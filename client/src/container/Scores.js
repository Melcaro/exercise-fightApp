import React from 'react';


import { connect } from 'react-redux';

import { fetchRanking } from '../services/MatchSrv';

class Scores extends React.Component {
  state = {
    ranking: [],
  };
  componentDidMount() {
    this.getRanking();
  }

  getRanking = async () => {
    const ranking = await fetchRanking();
    this.setState({ ranking });
  };

  render() {
    const { ranking } = this.state;

    return (
      <div>
        <h1>SCORES</h1>
        <table>
          <thead>
            <tr>
              <th>Fighter</th>
              <th>Total fights</th>
              <th>Won fights</th>
              <th>Lost fights</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map(
              ({
                _id,
                name,
                score,
                totalMatches,
                wonMatches,
                lostMatches,
                image,
              }) => (
                <tr key={_id}>
                  <td>
                    <div style={{ width: '100px', height: '200px' }}>
                      <img
                        src={image}
                        alt="FighterPic"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </td>
                  <td>{totalMatches}</td>
                  <td>{wonMatches}</td>
                  <td>{lostMatches}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const ConnectedScores = connect(mapStateToProps)(Scores);

export default ConnectedScores;
