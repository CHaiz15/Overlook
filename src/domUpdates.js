import $ from 'jquery';

export const domUpdates = {

  loginError() {
    $('.user-input').addClass('login-error-indicator');
  },

  // Manager DOM Updates
  openManagerInterface(todaysBookings, roomsAvailable, allRooms, todaysRevenue, date) {
    $('#manager-night-input').attr({
      "min": date.split('/').join('-'),
      "value": date.split('/').join('-')
    });
    $('body').css('background', "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../images/manager-background.jpg) center / cover");
    $('.nav-corners').css('visibility', 'visible');
    $('.main-menu').hide();
    $('.manager-interface').removeClass('close-display');
    $('.todays-revenue').text(`Revenue: $${todaysRevenue}`);
    $('.rooms-occupied').text(`Percent of rooms occupied: %${((todaysBookings.length / allRooms) * 100).toFixed(0)}`);
    $('.rooms-available').text(`Number of rooms available: ${roomsAvailable.length}`);
  },

  instantiateCustomersStatistics(futureNights, customerName, customerSpent) {
    $('.customer-name').text(`Name: ${customerName}`);
    $('.customer-total-spent').text(`Total Spent: ${customerSpent}`);
    $('.future-nights-list').empty();
    futureNights.forEach(night => {
      $('.future-nights-list').append(`<li>You have room #${night.roomNumber} booked for ${night.date}.</li><button class="delete-room" id="${night.id}">Delete</button>`);
    });
  },

  updateAddRooms(availableRooms) {
    $('.add-booking-list').empty();
    if (availableRooms.length === 0) {
      $('.add-booking-list').append('<p>We FIERCELY apololgize, but there are no rooms available. Please select a different date or room type.</p>');
    } else {
      availableRooms.forEach(room => {
        $('.add-booking-list').append(`<li>Room #${room.number}. A gorgeous ${room.roomType} featuring a ${room.bedSize} bed.</li><button class="book-room" id="${room.number}">Book</button>`);
      });
    }
  },

  // Customer DOM Updates
  openCustomerInterface(usersName, date, customerSpent) {
    $('.nav-corners, .customer-cost').css('visibility', 'visible');
    $('.main-menu').hide();
    $('.customer-interface').removeClass('close-display');
    $('body').css('background', "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../images/user-image.jpg) center / cover");
    $('#title').text(`Welcome, ${usersName}!`);
    $('#customer-night-input').attr({
      "min": date.split('/').join('-'),
      "value": date.split('/').join('-')
    });
    $('.customer-cost').text(`Total Spent: $${customerSpent}`);
  },

  instantiateFutureAndPastNights(pastNights, futureNights, userID) {
    pastNights.forEach(night => {
      $('.past-nights-list').append(`<li>You booked room #${night.roomNumber} on ${night.date}.</li>`);
    });
    futureNights.forEach(night => {
      $('.future-nights-list').append(`<li>You have room #${night.roomNumber} booked for ${night.date}.</li>`);
    });
  },

  updateAvailableRooms(availableRooms) {
    $('.nights-available').empty();
    if (availableRooms.length === 0) {
      $('.nights-available').append('<p>We FIERCELY apololgize, but there are no rooms available. Please select a different date or room type.</p>');
    } else {
      availableRooms.forEach(room => {
        $('.nights-available').append(`<li>Room #${room.number}. A gorgeous ${room.roomType} featuring a ${room.bedSize} bed.</li><button class="book-room" id="${room.number}">Book</button>`);
      });
    }
  },
}
