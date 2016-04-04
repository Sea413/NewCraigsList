import DS from 'ember-data';
import Listing from './listing';

export default Listing.extend({
  price: DS.attr('number'),
  condition: DS.attr()
});
