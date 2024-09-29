import React, { useState, useEffect } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import './App.css';

const GET_USER_COINS = gql`
  query GetUserCoins($userId: String!) {
    getUserCoins(userId: $userId) {
      coins
    }
  }
`;

const UPDATE_COINS = gql`
  mutation UpdateCoins($userId: String!, $coins: Int!) {
    updateCoins(userId: $userId, coins: $coins) {
      success
      coins
    }
  }
`;

const TapMeApp: React.FC = () => {
  const userId = "123"; // Replace with dynamic Telegram userId

  const [coins, setCoins] = useState(0);
  const { data } = useQuery(GET_USER_COINS, {
    variables: { userId },
  });

  const [updateCoins] = useMutation(UPDATE_COINS);

  useEffect(() => {
    if (data) {
      setCoins(data.getUserCoins.coins);
    }
  }, [data]);

  const handleTap = () => {
    const newCoinCount = coins + 1;
    setCoins(newCoinCount);
    updateCoins({ variables: { userId, coins: newCoinCount } });
  };

  return (
    <div className="tapme-app">
      <h1>TapMe Game</h1>
      <div className="coin-display">Coins: {coins}</div>
      <button className="tap-button" onClick={handleTap}>
        Tap to Earn Coins
      </button>
    </div>
  );
};

export default TapMeApp;
