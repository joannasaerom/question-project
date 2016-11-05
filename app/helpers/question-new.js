import Ember from 'ember';

export function questionNew(params) {
  var today = new Date();
  var questionDate = new Date(params[0]);

  if(today.getFullYear() === questionDate.getFullYear() && today.getMonth() === questionDate.getMonth() && today.getDate() === questionDate.getDate()) {
    return new Ember.Handlebars.SafeString('<span class="red">New</span>');
  }
}

export default Ember.Helper.helper(questionNew);
