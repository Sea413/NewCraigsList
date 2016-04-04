import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.log(this.store.findAll('job'));
    return this.store.findAll('job');
  }
});
