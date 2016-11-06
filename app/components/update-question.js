import Ember from 'ember';

export default Ember.Component.extend({
  adminLogIn: Ember.inject.service('admin-login'),
  editQuestion: false,
  actions: {
    displayForm(){
      this.set('editQuestion', true);
    },
    update(question){
      var userInput = this.get('author');
      if(userInput === undefined || userInput === ''){
        userInput = "Anonymous";
      }
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        author: userInput,

      };
      this.sendAction('updateQuestion', params, question);
      this.set('editQuestion', false);
    }
  }
});
