import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Component.extend({
  classNames: ['daily-result'],
  classNameBindings: ['dailyResult.isSuccess', 'dailyResult.isFailure'],

  /* Properties */
  hasNoDailyResult: Ember.computed.empty('dailyResult'),
  showCreator: Ember.computed.or('hasNoDailyResult', 'isEditing'),
  dailyResult: Ember.computed('habit.dailyResults.@each.day',function() {
    return this.get('habit').resultOfDay(this.get('day'));
  }),
  formattedDay: Ember.computed('day', function() {
    return moment(this.get('day')).format('ddd, MMM Do');
  }),

  /* Events */
  click() {
    this.toggleProperty('isEditing');
  }
});
