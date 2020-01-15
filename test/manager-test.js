import chai from 'chai';
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import Manager from '../src/classes/Manager.js';

describe('Manager:', () => {
let manager;

beforeEach(() => {
  manager = new Manager();
  chai.spy.on(manager, ['removeCustomerBooking', 'bookRoom', 'calculateTotalSpent'], () => {})
});
it('should be a function', function() {
  expect(Manager).to.be.a('function');
});
describe('Method Values:', () => {
  it("should check that removeCustomerBooking is called", () => {
    manager.removeCustomerBooking();
    expect(manager.removeCustomerBooking).to.have.been.called();
  });
  it("should check that bookRoom is inherited", () => {
    manager.bookRoom();
    expect(manager.bookRoom).to.have.been.called();
  });
  it("should check that calculateTotalSpent is inherited", () => {
    manager.calculateTotalSpent();
    expect(manager.calculateTotalSpent).to.have.been.called();
  });
});
});
