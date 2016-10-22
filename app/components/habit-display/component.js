import Ember from 'ember';
import moment from 'npm:moment';
import { isSameDay } from 'open-habit/utils/date-utils';

export default Ember.Component.extend({
  classNames: ['habit-display'],

  /* Properties */
  sortDailyResultsBy: ['day:desc'],
  sortedDailyResults: Ember.computed.sort('habit.dailyResults', 'sortDailyResultsBy'),
  earliestDay: Ember.computed.reads('sortedDailyResults.lastObject.day'),
  allDays: Ember.computed(
    'earliestDay',
    function() {
      const today = new Date();
      let currentDay = this.get('earliestDay');

      const allDays = [];
      while (! isSameDay(today, currentDay)) {
        allDays.push(currentDay);
        currentDay = moment(currentDay).add(1, 'days').toDate();
      }
      allDays.push(currentDay);

      return allDays.reverse();
    }
  )
});
