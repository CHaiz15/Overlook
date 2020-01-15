class Customer {
  constructor(customerBookings, usersName, userId) {
    this.id = userId;
    this.name = usersName;
    this.customerBookings = customerBookings;
  }
  bookRoom(roomID, date, roomsData) {
    let bookedRoom = roomsData.find(room => room.number === parseInt(roomID))
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "userID": this.id,
        "date": date,
        "roomNumber": bookedRoom.number
      })
    }).then(() => {
      console.log('IT WORKED');
    }).catch(() => {
      console.log('IT DIDNT WORK');
    });
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
