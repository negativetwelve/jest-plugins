// Models
import User from '../User';


/* eslint-disable no-undef */
describe('User', () => {
  set('firstName', () => 'Joe');
  set('lastName', () => 'Wilson');
  set('user', () => new User({firstName, lastName}));

  describe('#getFirstName', () => {
    it('should return the firstName', () => {
      expect(user.getFirstName()).toEqual('Joe');
    });
  });

  describe('#getLastName', () => {
    it('should return the lastName', () => {
      expect(user.getLastName()).toEqual('Wilson');
    });
  });
});
