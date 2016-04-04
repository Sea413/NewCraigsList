import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('housing');
  this.route('jobs');
  this.route('forsale');
});

export default Router;
