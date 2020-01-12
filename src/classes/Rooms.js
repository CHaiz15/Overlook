class Rooms {
  constructor(roomsData, bookingsData) {
    this.rooms = roomsData;
    this.bookings = bookingsData;
    this.todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  }
  customersPastNights(){

  }
  availableRooms(){

  }
  FilterByType(){

  }
  FilterByDate(){

  }
  percentOfRoomsAvailable(){

  }
  todaysAvailableRooms(){

  }
  calculateRooms(){

  }
}

export default Rooms;
