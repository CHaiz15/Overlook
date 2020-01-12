import $ from 'jquery';
import './css/base.scss';

import Rooms from '../src/classes/Rooms.js';
import User from '../src/classes/User.js';
import Manager from '../src/classes/Manager.js';
import {loginError, openUserInterface, instantiateFutureAndPastNights} from '../src/domUpdates.js';

// Classes
let rooms;
let user;
let manager;

// Data fetching
let roomsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json()).then(data => data.rooms);
let usersData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json()).then(data => data.users);
let bookingsData = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json()).then(data => data.bookings);

Promise.all([roomsData, usersData, bookingsData])
  .then(data => {
    roomsData = data[0];
    usersData = data[1];
    bookingsData = data[2];
  }).then(() => {
    $('.explore-button').click(function() {
      rooms = new Rooms(roomsData, bookingsData)
      checkLoginInfo(roomsData, usersData, bookingsData);
    })
})

function checkLoginInfo(roomsData, usersData, bookingsData) {
  let userId = parseInt($('#username-input').val().slice(8));
  let passwordCheck = $('#password-input').val() === 'overlook2019';
  let userIdCheck = usersData.find(foundUser => foundUser.id === userId);
  if ($('#username-input').val() === 'manager' && passwordCheck) {
    let manager = new Manager();
  } else if ($('#username-input').val().slice(0, 8) === 'customer' && passwordCheck && userIdCheck) {
    let user = new User(rooms.userBookings(userId), usersData.find(user => user.id === userId).name, userId);
    openUserInterface(user.name);
    instantiateFutureAndPastNights(rooms.userPastNights(user.userBookings, userId), rooms.userFutureNights(user.userBookings, userId));
  } else {
    loginError();
  }
}
