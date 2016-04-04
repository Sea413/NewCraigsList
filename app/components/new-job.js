import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    newListingForm() {
      this.set('addNewListing', true);
    },
    hideForm(){
      this.set('addNewListing', false);
    },
    saveListing() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        user: this.get('user') ? this.get('user') : "",
        timestamp: Date.now(),
        location: this.get('location') ? this.get('location'): "",
        industry: this.get('industry') ? this.get('industry'): "",
        position: this.get('position') ? this.get('position'): "",
        salary: this.get('salary') ? this.get('salary'): "",
        hours: this.get('hours') ? this.get('hours'): ""
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
