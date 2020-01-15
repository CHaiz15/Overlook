import Customer from './Customer.js';

class Manager extends Customer {
  constructor(customerBookings, usersName, userId) {
    super(customerBookings, usersName, userId);
    this.id = userId;
  }
  removeCustomerBooking(bookingID, bookingsData) {
    let foundBookingID;
    if (/^\d+$/.test(bookingID)) {
      foundBookingID = parseInt(bookingsData.find(booking => booking.id === parseInt(bookingID)).id);
    } else {
      foundBookingID = bookingsData.find(booking => booking.id === bookingID).id;
    }
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: foundBookingID
      })
    }).then(() => {
      console.log('IT WORKED');
    }).catch(() => {
      console.log('IT DIDNT WORK');
    });
  }
}

export default Manager;
