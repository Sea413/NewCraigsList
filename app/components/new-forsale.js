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
        price: this.get('price') ? this.get('price'): 0,
        condition: this.get('condition') ? this.get('condition'): ""
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
