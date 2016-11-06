import Ember from 'ember';

export default Ember.Component.extend({
  adminLogIn: Ember.inject.service('admin-login'),
  actions: {
    signIn(users){
      var params={
        username: this.get('username'),
        password: this.get('password')
      };
      for (var i = 0; i < users.content.length; i++){
        if(users.content[i]._data.username === params.username && users.content[i]._data.password === params.password){
          this.get('adminLogIn').logIn();
        }
      }
      if (this.get('adminLogIn').loggedIn){
        this.sendAction('logIn');
      } else {
        alert("Username and/or password invalid");
      }
      this.set('username', '');
      this.set('password', '');
    }
  }
});
