class Rooms {
  constructor(roomsData, bookingsData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.todaysDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  }
  userBookings(usersId) {
    return this.bookings.filter(booking => {
      return booking.userID === usersId;
    })
  }
  userPastNights(userBookings, userId) {
    return userBookings.filter(booking => {
      return booking.date < this.todaysDate;
    })
  }
  userFutureNights(userBookings, userId) {
    return userBookings.filter(booking => {
      return booking.date > this.todaysDate;
    })
  }
  bookCustomerRoom() {

  }
  availableRooms() {

  }
  FilterByType() {

  }
  FilterByDate() {

  }
  percentOfRoomsAvailable() {

  }
  todaysAvailableRooms() {

  }
  calculateRooms() {

  }
}

export default Rooms;
