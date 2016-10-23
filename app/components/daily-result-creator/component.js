import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  classNames: ['daily-result-creator'],

  /* Services */
  store: Ember.inject.service(),

  /* Tasks */
  updateDailyResultTask: task(function* (isSuccess) {
    let dailyResult;
    if (this.get('hasNoDailyResult')) {
      dailyResult = this.get('store').createRecord('daily-result', {
        habit: this.get('habit'),
        day: this.get('day')
      });
      yield this.get('habit').save();
    } else {
      dailyResult = this.get('dailyResult');
    }

    dailyResult.set('isSuccess', isSuccess);
    yield dailyResult.save();
  }).drop(),

  /* Properties */
  hasNoDailyResult: Ember.computed.empty('dailyResult'),

  /* Actions */
  actions: {
    success() {
      return this.get('updateDailyResultTask').perform(true);
    },
    failure() {
      return this.get('updateDailyResultTask').perform(false);
    }
  }
});
