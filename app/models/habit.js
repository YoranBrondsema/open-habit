import DS from 'ember-data';
import { isSameDay } from 'open-habit/utils/date-utils';

export default DS.Model.extend({
  /* Associations */
  dailyResults: DS.hasMany('daily-result'),

  /* Attributes */
  label: DS.attr('string'),

  /* Functions */
  resultOfDay(day) {
    return this.get('dailyResults').find((dailyResult) => {
      return isSameDay(day, dailyResult.get('day'));
    });
  }
});
