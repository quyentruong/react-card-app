import React from 'react';
import CardRow from './CardRow';
import cards from '../Data/cards';

const Home = () => {
  let temp = [{}, {}, {}];
  const cardRow = [];
  for (let index = 0; index < cards.length; index += 1) {
    const card = cards[index];
    for (let i = 0; i < Object.keys(card).length; i += 1) {
      const key = Object.keys(card)[i];
      temp[index % 3][key] = card[key];
    }
    if (index % 3 === 2) {
      cardRow.push(<CardRow key={card.id / 3} temp={temp} />);
      temp = [{}, {}, {}];
    }
    if (index % 3 === 0) {
      if (temp[index % 3].text === null) break;
    }
  }
  return cardRow;
};
export default Home;
