import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import UsersList from './UsersList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const users = [
  {
    id: 'id-1',
    name: 'Bob',
    age: '21',
  },
  {
    id: 'id-2',
    name: 'Sam',
    age: '21',
  },
  {
    id: 'id-3',
    name: 'John',
    age: '22',
  },
  {
    id: 'id-4',
    name: 'Victor',
    age: '18',
  },
  {
    id: 'id-5',
    name: 'Ann',
    age: '25',
  },
  {
    id: 'id-6',
    name: 'Alina',
    age: '20',
  },
  {
    id: 'id-7',
    name: 'Bob07',
    age: 37,
  },
  {
    id: 'id-8',
    name: 'Katerina',
    age: 22,
  },
  {
    id: 'id-9',
    name: 'Vitalii',
    age: 19,
  },
  {
    id: 'id-10',
    name: 'Andrii',
    age: 20,
  },
  {
    id: 'id-11',
    name: 'Artem',
    age: 17,
  },
];

root.render(<UsersList users={users} />);
