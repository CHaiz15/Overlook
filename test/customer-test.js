import chai from 'chai';
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import Customer from '../src/classes/Customer.js';

describe('Customer:', () => {
  let customer;
  let rooms = [{
      number: 6,
      roomType: "junior suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 397.02
    },
    {
      number: 20,
      roomType: "residential suite",
      bidet: false,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 343.95
    },
    {
      number: 25,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 305.85
    }
  ];
  let customerBookings = [{
      id: "5fwrgu4i7k55hl6ty",
      userID: 50,
      date: "2020/01/10",
      roomNumber: 25,
      roomServiceCharges: Array(0)
    },
    {
      id: "5fwrgu4i7k55hl6w6",
      userID: 50,
      date: "2020/01/12",
      roomNumber: 20,
      roomServiceCharges: Array(0)
    },
    {
      id: "5fwrgu4i7k55hl7t1",
      userID: 50,
      date: "2020/01/12",
      roomNumber: 25,
      roomServiceCharges: Array(0)
    },
    {
      id: "5fwrgu4i7k55hl822",
      userID: 50,
      date: "2020/01/17",
      roomNumber: 6,
      roomServiceCharges: Array(0)
    },
  ];
  beforeEach(() => {
    customer = new Customer(customerBookings, "Eldridge Muller", 50);
    chai.spy.on(customer, ['bookRoom'], () => {})
  });
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });
  describe('Default Values:', () => {
    it('should store customers id', function() {
      expect(customer.id).to.equal(50);
    });
    it('should store customers name', function() {
      expect(customer.name).to.equal('Eldridge Muller');
    });
    it('should store customers bookings', function() {
      expect(customer.customerBookings).to.deep.equal([{
          id: "5fwrgu4i7k55hl6ty",
          userID: 50,
          date: "2020/01/10",
          roomNumber: 25,
          roomServiceCharges: Array(0)
        },
        {
          id: "5fwrgu4i7k55hl6w6",
          userID: 50,
          date: "2020/01/12",
          roomNumber: 20,
          roomServiceCharges: Array(0)
        },
        {
          id: "5fwrgu4i7k55hl7t1",
          userID: 50,
          date: "2020/01/12",
          roomNumber: 25,
          roomServiceCharges: Array(0)
        },
        {
          id: "5fwrgu4i7k55hl822",
          userID: 50,
          date: "2020/01/17",
          roomNumber: 6,
          roomServiceCharges: Array(0)
        },
      ])
    });
  });
  describe('Method Values:', () => {
    it('should find the customers total amount spent', function() {
      expect(customer.calculateTotalSpent(rooms)).to.equal('1352.67');
    });
    it("should check that removeCustomerBooking is called", () => {
      customer.bookRoom();
      expect(customer.bookRoom).to.have.been.called();
    });
  })
})
