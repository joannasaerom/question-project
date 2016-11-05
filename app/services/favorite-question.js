import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  add(question) {
    if(this.get('favorites').includes(question)){
      this.get('favorites').removeObject(question);
    } else{
      this.get('favorites').pushObject(question);
    }
  }
});
