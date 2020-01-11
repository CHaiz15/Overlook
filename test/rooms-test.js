import chai from 'chai';
const expect = chai.expect;

import Rooms from '../src/classes/Rooms.js';

describe('Rooms:', () => {
  let rooms;
  beforeEach(() => {
    rooms = new Rooms();
  });
  it('should be a function', function() {
    expect(Rooms).to.be.a('function');
  });

  describe('Default Values:', () => {
    it('should store todays date', function() {
      let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      expect(rooms.todaysDate).to.equal(date);
    });
    describe('Method Values:', () => {

    })
  })
})
