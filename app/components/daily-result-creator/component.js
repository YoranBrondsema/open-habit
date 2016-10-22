import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  classNames: ['daily-result-creator'],

  /* Services */
  store: Ember.inject.service(),

  /* Tasks */
  createDailyResultTask: task(function* (isSuccess) {
    const dailyResult = this.get('store').createRecord('daily-result', {
      habit: this.get('habit'),
      isSuccess: isSuccess,
      day: this.get('day')
    });

    yield dailyResult.save();
    yield this.get('habit').save();
  }).drop(),

  /* Actions */
  actions: {
    success() {
      return this.get('createDailyResultTask').perform(true);
    },
    failure() {
      return this.get('createDailyResultTask').perform(false);
    }
  }
});
