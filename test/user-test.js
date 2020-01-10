import chai from 'chai';
const expect = chai.expect;

import User from '../src/classes/User.js';

describe('User:', () => {
  let user;
  beforeEach(() => {
    user = new User();
  });
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  describe('Default Values:', () => {

    describe('Method Values:', () => {

    })
  })
})
