import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/classes/Hotel.js';

describe('Hotel:', () => {
  let hotel;
  beforeEach(() => {
    hotel = new Hotel();
  });
  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  describe('Default Values:', () => {
    it('should store todays date', function() {
      let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      expect(hotel.todaysDate).to.equal(date);
    });
    describe('Method Values:', () => {

    })
  })
})
