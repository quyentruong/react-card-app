import React from 'react';
import CardRow from './CardRow';

const Home = () => {
  const cards = [
    {
      id: 1,
      title: 'Make Change',
      text: 'Convert amount of money to coins such as quarter, dime, nickel, pennie.',
      icon: 'fas fa-coins',
      link: '/makechange',
    },
    {
      id: 2,
      title: 'sd',
      text: '',
      icon: 'fas fa-coins',
      link: '/makechange',
    },
    {
      id: 3,
      title: '',
      text: '',
      icon: 'fas fa-coins',
      link: '',
    },
    {
      id: 4,
      title: '',
      text: '',
      icon: 'fas fa-coins',
      link: '',
    },
    {
      id: 5,
      title: '',
      text: '',
      icon: 'fas fa-coins',
      link: '',
    },
    {
      id: 6,
      title: '',
      text: '',
      icon: 'fas fa-coins',
      link: '',
    },
  ];

  let temp = [{}, {}, {}];
  const elements = cards.map((card, index) => {
    temp[index % 3].id = card.id;
    temp[index % 3].title = card.title;
    temp[index % 3].text = card.text;
    temp[index % 3].icon = card.icon;
    temp[index % 3].link = card.link;
    let result = '';
    if (index % 3 === 2) {
      result = <CardRow key={card.id / 3} temp={temp} />;
      temp = [{}, {}, {}];
    }
    return result;
  });
  return <div>{elements}</div>;
};

export default Home;
