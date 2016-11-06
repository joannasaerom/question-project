import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: false,
  logIn(){
    this.set('loggedIn', true);
  },
  logOut(){
    this.set('loggedIn', false);
  }
});
