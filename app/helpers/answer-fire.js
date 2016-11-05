import Ember from 'ember';

export function answerFire(params) {
  if(params[0] >= 50){
    return new Ember.String.htmlSafe('<i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i>');
  } else if(params[0] >= 40 && params[0] < 50){
    return new Ember.String.htmlSafe('<i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i>');
  } else if(params[0] >= 30 && params[0] < 40){
    return new Ember.String.htmlSafe('<i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i>');
  } else if(params[0] >= 20 && params[0] < 30){
    return new Ember.String.htmlSafe('<i class="glyphicon glyphicon-fire"></i><i class="glyphicon glyphicon-fire"></i>');
  } else if(params[0] >=10 && params[0] < 20){
    return new Ember.String.htmlSafe('<i class="glyphicon glyphicon-fire"></i>');
  }
}

export default Ember.Helper.helper(answerFire);
