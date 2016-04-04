import DS from 'ember-data';
import Listing from './listing';

export default Listing.extend({
  bedrooms: DS.attr('number'),
  bathrooms: DS.attr('number'),
  rent: DS.attr('number')
});
