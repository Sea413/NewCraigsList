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
        bedrooms: this.get('bedrooms') ? this.get('bedrooms'): 0,
        bathrooms: this.get('bathrooms') ? this.get('bathrooms'): 0,
        rent: this.get('rent') ? this.get('rent'): 0
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
