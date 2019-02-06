import React from 'react';
import CardRow from './CardRow';
import cards from '../Data/cards';

const Home = () => {
  let temp = [{}, {}, {}];
  const cardRow = [];
  for (let index = 0; index < cards.length; index += 1) {
    temp[index % 3].id = cards[index].id;
    temp[index % 3].title = cards[index].title;
    temp[index % 3].text = cards[index].text;
    temp[index % 3].icon = cards[index].icon;
    temp[index % 3].link = cards[index].link;
    if (index % 3 === 2) {
      cardRow.push(<CardRow key={cards[index].id / 3} temp={temp} />);
      temp = [{}, {}, {}];
    }
    if (index % 3 === 0) {
      if (temp[index % 3].text === null) break;
    }
  }
  return cardRow;
};
export default Home;
