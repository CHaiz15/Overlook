import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/classes/Hotel.js';

describe('Hotel:', () => {
  let hotel;
  let roomsData = [{
      number: 1,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 358.4
    },
    {
      number: 2,
      roomType: "suite",
      bidet: false,
      bedSize: "full",
      numBeds: 2,
      costPerNight: 477.38
    },
    {
      number: 3,
      roomType: "single room",
      bidet: false,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 491.14
    },
    {
      number: 4,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 429.44
    },
    {
      number: 5,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 340.17
    },
    {
      number: 6,
      roomType: "junior suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 397.02
    },
  ];
  let bookingsData = [{
      id: "5fwrgu4i7k55hl6sz",
      userID: 9,
      date: "2020/02/04",
      roomNumber: 15,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6t5",
      userID: 9,
      date: "2020/01/10",
      roomNumber: 24,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6t6",
      userID: 13,
      date: "2020/01/10",
      roomNumber: 12,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6t7",
      userID: 20,
      date: "2020/02/16",
      roomNumber: 7,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6t8",
      userID: 1,
      date: "2020/02/05",
      roomNumber: 12,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6t9",
      userID: 38,
      date: "2020/02/13",
      roomNumber: 2,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6ta",
      userID: 25,
      date: "2020/01/11",
      roomNumber: 9,
      roomServiceCharges: []
    },
    {
      id: "5fwrgu4i7k55hl6v9",
      userID: 33,
      date: "2020/02/13",
      roomNumber: 1,
      roomServiceCharges: []
    },
  ]
  beforeEach(() => {
    hotel = new Hotel(roomsData, bookingsData);
  });
  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  describe('Default Values:', () => {
    it('should store todays date', function() {
      let date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
      expect(hotel.todaysDate).to.equal(date);
    });
    it('should store rooms data', function() {
      expect(hotel.rooms.length).to.equal(6);
    });
    it('should store bookings data', function() {
      expect(hotel.bookings.length).to.equal(8);
    });
  });
  describe('Method Values:', () => {
    it('should find all customer bookings', function() {
      expect(hotel.customerBookings(9)).to.deep.equal([{
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2020/02/04",
        roomNumber: 15,
        roomServiceCharges: []
      }, {
        id: "5fwrgu4i7k55hl6t5",
        userID: 9,
        date: "2020/01/10",
        roomNumber: 24,
        roomServiceCharges: []
      }]);
    });
    it('should find all customers past nights', function() {
      expect(hotel.customerPastNights(hotel.customerBookings(9), 9)).to.deep.equal([{
        id: "5fwrgu4i7k55hl6t5",
        userID: 9,
        date: "2020/01/10",
        roomNumber: 24,
        roomServiceCharges: []
      }]);
    });
    it('should find all customers future nights', function() {
      expect(hotel.customerFutureNights(hotel.customerBookings(9), 9)).to.deep.equal([{
        id: "5fwrgu4i7k55hl6sz",
        userID: 9,
        date: "2020/02/04",
        roomNumber: 15,
        roomServiceCharges: []
      }]);
    });
    it('should find all rooms available by a date chosen', function() {
      expect(hotel.filterByDate('2020/02/13')).to.deep.equal([{
          number: 3,
          roomType: 'single room',
          bidet: false,
          bedSize: 'king',
          numBeds: 1,
          costPerNight: 491.14
        },
        {
          number: 4,
          roomType: 'single room',
          bidet: false,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 429.44
        },
        {
          number: 5,
          roomType: 'single room',
          bidet: true,
          bedSize: 'queen',
          numBeds: 2,
          costPerNight: 340.17
        },
        {
          number: 6,
          roomType: 'junior suite',
          bidet: true,
          bedSize: 'queen',
          numBeds: 1,
          costPerNight: 397.02
        }
      ]);
    });
    it('should find all rooms available by a type', function() {
      expect(hotel.filterByType(hotel.filterByDate('2020/02/13'), 'junior suite')).to.deep.equal([{
        number: 6,
        roomType: 'junior suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 397.02
      }]);
    });
  });
});
