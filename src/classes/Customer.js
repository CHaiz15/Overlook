class Customer {
  constructor(customerBookings, usersName, userId) {
    this.id = userId;
    this.name = usersName;
    this.customerBookings = customerBookings;
  }
  bookRoom() {

  }
  calculateTotalSpent(rooms) {
    let costs = this.customerBookings.map(booking => {
      return rooms.find(room => {
        return booking.roomNumber === room.number;
      }).costPerNight
    }).reduce((a, b) => a + b, 0);
    return costs.toFixed(2);
  }
}

export default Customer;
