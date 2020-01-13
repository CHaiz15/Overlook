import moment from 'moment';

class Hotel {
  constructor(roomsData, bookingsData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.todaysDate = moment().format('YYYY/MM/DD');
  }
  customerBookings(usersId) {
    return this.bookings.filter(booking => {
      return booking.userID === usersId;
    })
  }
  customerPastNights(userBookings, userId) {
    return userBookings.filter(booking => {
      return booking.date < this.todaysDate;
    })
  }
  customerFutureNights(userBookings, userId) {
    return userBookings.filter(booking => {
      return booking.date > this.todaysDate;
    })
  }
  filterByDate(dateChosen) {
    return this.rooms.filter(room => {
      return !this.bookings.find(booking => {
        return (booking.date === dateChosen && room.number === booking.roomNumber);
      })
    })
  }
  filterByType(availableRooms, roomTypeChosen) {
    return availableRooms.filter(room => {
      return room.roomType === roomTypeChosen;
    })
  }
  bookCustomerRoom() {

  }
  percentOfHotelAvailable() {

  }
  todaysAvailableHotel() {

  }
  calculateHotel() {

  }
}

export default Hotel;