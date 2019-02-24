import { FaCoins, FaCalculator, FaBook } from 'react-icons/fa';
import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Make Change',
    text: 'Convert amount of money to coins such as quarter, dime, nickel, pennie.',
    icon: <FaCoins />,
    updated: 'Feb 2, 2019',
  },
  {
    id: 2,
    title: 'Collatz Conjecture',
    text:
      'Consider the following operation on an arbitrary positive integer:' +
      ' If the number is even, divide it by two.' +
      ' If the number is odd, triple it and add one.' +
      ' The conjecture is that no matter what value of n, the sequence will always reach 1.',
    icon: <FaCalculator />,
    updated: 'Feb 9, 2019',
  },
  {
    id: 3,
    title: 'Silly Story Generator',
    text: 'Generates a silly story when the "Generate random story" button is pressed. ',
    icon: <FaBook />,
    updated: 'Feb 17, 2019',
  },
  {
    id: 4,
    title: 'Shape Calculation',
    text: 'Include function square, cube, area of circle, area of rectangle ...',
    icon: <FaCalculator />,
    updated: 'Feb 23, 2019',
  },
  {
    id: 5,
    title: 'e',
    text: 's',
    icon: <FaBook />,
  },
  {
    id: 6,
    title: 'e',
    text: 's',
    icon: <FaBook />,
  },
];

export default cards;
