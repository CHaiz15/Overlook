import $ from 'jquery';
import './css/base.scss';

import Hotel from '../src/classes/Hotel.js';
import Customer from '../src/classes/Customer.js';
import Manager from '../src/classes/Manager.js';
import {loginError, openCustomerInterface, instantiateFutureAndPastNights} from '../src/domUpdates.js';

// Classes
let hotel;
let customer;
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
      hotel = new Hotel(roomsData, bookingsData)
      checkLoginInfo(roomsData, usersData, bookingsData);
    })
})

function checkLoginInfo(roomsData, usersData, bookingsData) {
  let customerId = parseInt($('#username-input').val().slice(8));
  let passwordCheck = $('#password-input').val() === 'overlook2019';
  let customerIdCheck = usersData.find(foundUser => foundUser.id === customerId);
  if ($('#username-input').val() === 'manager' && passwordCheck) {
    let manager = new Manager();
  } else if ($('#username-input').val().slice(0, 8) === 'customer' && passwordCheck && customerIdCheck) {
    let customer = new Customer(hotel.customerBookings(customerId), usersData.find(customer => customer.id === customerId).name, customerId);
    openCustomerInterface(customer.name);
    instantiateFutureAndPastNights(hotel.customerPastNights(customer.customerBookings, customerId), hotel.customerFutureNights(customer.customerBookings, customerId));
  } else {
    loginError();
  }
}
