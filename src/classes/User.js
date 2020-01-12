class User {
  constructor(bookingsData, usersData, userId) {
    this.id = userId;
    this.name = usersData.find(user => user.id === userId).name;
    this.allBookings = bookingsData;
  }
  bookRoom() {

  }
  calculateTotalSpent() {

  }
  findPastNights() {

  }
  findFutureNights() {

  }
}

export default User;
