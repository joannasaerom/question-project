import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  actions: {
    displayForm(){
      this.set('editQuestion', true);
    },
    update(question){
      var params = {
        title: this.get('title'),
        details: this.get('details'),
        author: this.get('author'),

      };
      this.sendAction('updateQuestion', params, question);
      this.set('editQuestion', false);
    }
  }
});
