import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  adminLogIn: Ember.inject.service('admin-login'),
  addQuestion: false,
  actions: {
    displayForm(){
      this.set('addQuestion', true);
    },
    save(){
      var userInput = this.get('author');
      if(userInput === undefined || userInput === ''){
        userInput = "Anonymous";
      }
      var params = {
        title: this.get('title'),
        author: userInput,
        details: this.get('details'),
        timestamp: moment().format('LL h:mm:ss a'),
      };
      this.sendAction('saveQuestion', params);
      this.set('addQuestion', false);
      this.set('title', '');
      this.set('author', '');
      this.set('details', '');
    }
  }
});
