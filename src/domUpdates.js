import $ from 'jquery';

export const domUpdates = {

  loginError() {
    $('.user-input').addClass('login-error-indicator');
  },

  openCustomerInterface(usersName, date) {
    $('.main-menu').addClass('close-display');
    $('.customer-interface').removeClass('close-display');
    $('body').css({
      background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../images/user-image.jpg) center / cover"
    });
    $('#title').text(`Welcome, ${usersName}!`);
    $('#customer-night-input').attr("min", date.split('/').join('-'));
    $('#customer-night-input').attr("value", date.split('/').join('-'));
  },

  instantiateFutureAndPastNights(pastNights, futureNights, userID) {
    pastNights.forEach(night => {
      $('.past-nights-list').append(`<li>You booked room #${night.roomNumber} on ${night.date}.</li>`)
    })
    futureNights.forEach(night => {
      $('.future-nights-list').append(`<li>You have room #${night.roomNumber} booked for ${night.date}.</li>`)
    })
  },

  instantiateAvailableRooms(availableRooms) {
    availableRooms.forEach(room => {
      $('.nights-available').append(`<li>Room #${room.number}. A gorgeous ${room.roomType} featuring a ${room.bedSize} bed.</li>`)
    })
  },

  updateAvailableRooms(availableRooms) {
    $('.nights-available').empty();
    availableRooms.forEach(room => {
      $('.nights-available').append(`<li>Room #${room.number}. A gorgeous ${room.roomType} featuring a ${room.bedSize} bed.</li>`)
    })
  },

}
