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

    describe('Method Values:', () => {

    })
  })
})
