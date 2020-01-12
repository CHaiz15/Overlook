import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/classes/Customer.js';

describe('Customer:', () => {
  let customer;
  beforeEach(() => {
    customer = new Customer();
  });
  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  describe('Default Values:', () => {

    describe('Method Values:', () => {

    })
  })
})
