import DS from 'ember-data';
import Listing from './listing';

export default Listing.extend({
  industry: DS.attr(),
  position: DS.attr(),
  salary: DS.attr('string'),
  hours: DS.attr()
});
