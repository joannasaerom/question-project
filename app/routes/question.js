import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestion: Ember.inject.service('favorite-question'),
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  // sortBy: ['upvote:desc'],
  // sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    addToFav(question){
      this.get('favoriteQuestion').add(question);
    },
    delete(question){
      var answer_deletions = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    updateQuestion(params, question){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          question.set(key, params[key]);
        }
      });

      question.save();
      this.transitionTo('question');
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question');
    },
    deleteAnswer(answer){
      answer.destroyRecord();
      this.transitionTo('question');
    },
    updateUpvote(params, answer){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');

    },
    updateDownvote(params, answer){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('question');

    },

  }
});
