import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/classes/Manager.js';

describe('Manager:', () => {
  let manager;
  beforeEach(() => {
    manager = new Manager();
  });
  it('should be a function', function() {
    expect(Manager).to.be.a('function');
  });

  describe('Default Values:', () => {

    describe('Method Values:', () => {

    })
  })
})
