import $ from 'jquery';
import './css/base.scss';

import Rooms from '../src/classes/Rooms.js';
import User from '../src/classes/User.js';
import Manager from '../src/classes/Manager.js';

// Data fetching
let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()).then(data => data.rooms);
let usersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json()).then(data => data.users);
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()).then(data => data.bookings);

Promise.all([roomsData, usersData, bookingsData])
  .then(data => {
    roomsData = data[0];
    usersData = data[1];
    bookingsData = data[2];
  })
  .then(() => {
    checkLogin(roomsData, usersData, bookingsData);
  })

function checkLogin(roomsData, usersData, bookingsData) {
  console.log(roomsData);
  console.log(usersData);
  console.log(bookingsData);
}



let rooms = new Rooms();
let user = new User();
let manager = new Rooms();

console.log(rooms.todaysDate);
