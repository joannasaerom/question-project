import Ember from 'ember';

export default Ember.Component.extend({
  adminLogIn: Ember.inject.service('admin-login'),
  actions:{
    delete(answer){
      if(confirm('Are you sure?')){
        this.sendAction('deleteAnswer', answer);
      }
    },
    upvote(answer){
      var answerUpvote = this.get('answer.upvote');
      if (answerUpvote >= 0){
        answerUpvote += 1;
      }
      var params = {
        upvote: answerUpvote
      };
      var answer = this.answer;
      this.sendAction('updateUpvote', params, answer);
    },
    downvote(answer){
      var answerUpvote = this.get('answer.upvote');
      if (answerUpvote > 0){
        answerUpvote -= 1;
      } else if(answerUpvote <= 0){
        answerUpvote = 0;
      }
      var params = {
        upvote: answerUpvote
      };
      var answer = this.answer;
      this.sendAction('updateDownvote', params, answer);
    }
  }
});
