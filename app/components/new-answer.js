import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var userInput = this.get('name');
      if(userInput === undefined || userInput === ''){
        userInput = "Anonymous";
      }
      var params = {
        answer: this.get('answer'),
        author: userInput,
        timestamp: moment().format('LL h:mm:ss a'),
        upvote: 0,
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('answer', '');
      this.set('name', '');
    }
  }
});
