import DS from 'ember-data';

export default DS.Model.extend({
  /* Associations */
  habit: DS.belongsTo(),

  /* Attributes */
  day: DS.attr('date'),
  isSuccess: DS.attr('boolean'),

  /* Properties */
  isFailure: Ember.computed.not('isSuccess'),
});
