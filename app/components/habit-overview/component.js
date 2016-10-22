import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['habit-overview'],

  /* Defaults */
  today: new Date(),

  /* Properties */
  resultOfToday: Ember.computed(
    'habit.dailyResults.@each.day',
    function() {
      return this.get('habit').resultOfDay(new Date());
    }
  ),
  hasNoResultOfToday: Ember.computed.empty('resultOfToday'),
  isSuccessToday: Ember.computed.equal('resultOfToday.isSuccess', true),
  isFailureToday: Ember.computed.equal('resultOfToday.isSuccess', false),
});
