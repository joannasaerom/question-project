import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  author: DS.attr('string'),
  timestamp: DS.attr('string'),
  upvote: DS.attr('number'),
  question: DS.belongsTo('question', {async: true})
});
