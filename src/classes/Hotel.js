class Hotel {
  constructor(roomsData, bookingsData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.todaysDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  }
  customerBookings(usersId) {
    return this.bookings.filter(booking => {
      return booking.userID === usersId;
    })
  }
  customerPastNights(userBookings, userId) {
    return userBookings.filter(booking => {
      return booking.date < this.todaysDate;
    }).sort()
  }
  customerFutureNights(userBookings, userId) {
    return userBookings.filter(booking => {
      return booking.date > this.todaysDate;
    }).sort()
  }
  bookCustomerRoom() {

  }
  availableHotel() {

  }
  FilterByType() {

  }
  FilterByDate() {

  }
  percentOfHotelAvailable() {
    
  }
  todaysAvailableHotel() {

  }
  calculateHotel() {

  }
}

export default Hotel;
