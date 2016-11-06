import Ember from 'ember';

export default Ember.Component.extend({
  highAnswers: Ember.computed('question.answers', function(){
    if(this.get('question.answers.length') >= 5){
      return new Ember.String.htmlSafe('<i class="glyphicon glyphicon-fire"></i>');
    }
  }),
});
