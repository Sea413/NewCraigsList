

export default Ember.Route.extend({
  model(){
    return this.store.findAll('job');
  },
  actions: {
    saveListing(params){
      var newListing = this.store.createRecord('job', params);
      newListing.save();
      this.transitionTo('jobs');
    }
  }
});
