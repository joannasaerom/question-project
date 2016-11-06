import Ember from 'ember';

export default Ember.Component.extend({
  adminLogIn: Ember.inject.service('admin-login'),
  actions:{
    deleteQuestion(question){
      this.sendAction('deleteQuestion', question);
    }
  }
});
