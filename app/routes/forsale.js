import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('forsale');
  },
  actions: {
    saveListing(params){
      var newListing = this.store.createRecord('forsale', params);
      newListing.save();
      this.transitionTo('forsale');
    }
  }
});
