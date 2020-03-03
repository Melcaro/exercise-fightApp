import React from 'react';

export const Fighters = ({ usersList, attributeScore }) => {
  console.log(usersList);
  const [
    { _id: f1ID, name: f1Name, score: f1Score, image: f1Image },
    { _id: f2ID, name: f2Name, score: f2Score, image: f2Image },
  ] = usersList;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{ flex: '0 0 40%' }}
        onClick={attributeScore.bind(null, f1ID, f2ID)}
      >
        <div>{f1Name}</div>
        <div>
          <img style={{ width: '100%' }} src={f1Image} alt="fighter pic" />
        </div>
        <div>Score: {f1Score}</div>
      </div>
      <div
        style={{ flex: '0 0 40%' }}
        onClick={attributeScore.bind(null, f2ID, f1ID)}
      >
        <div>{f2Name}</div>
        <div>
          <img style={{ width: '100%' }} src={f2Image} alt="fighter pic" />
        </div>
        <div>Score: {f2Score}</div>
      </div>
    </div>
  );
};
