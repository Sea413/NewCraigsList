import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr('number'),
  location: DS.attr()
});
