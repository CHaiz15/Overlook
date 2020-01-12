import $ from 'jquery';

export function loginError() {
  $('.user-input').addClass('login-error-indicator');
}

export function openCustomerInterface(usersName) {
  $('.main-menu').addClass('close-display');
  $('.customer-interface').removeClass('close-display');
  $('body').css({background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../images/user-image.jpg) center / cover"});
  $('#title').text(`Welcome, ${usersName}!`);
}

export function instantiateFutureAndPastNights(pastNights, futureNights, userID) {
  pastNights.forEach(night => {
    $('.past-nights-list').append(`<li>You booked room #${night.roomNumber} on ${night.date}.</li>`)
  })
  futureNights.forEach(night => {
    $('.future-nights-list').append(`<li>You have room #${night.roomNumber} booked for ${night.date}.</li>`)
  })
}
