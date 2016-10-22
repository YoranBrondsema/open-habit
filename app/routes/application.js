import Ember from 'ember';
import moment from 'npm:moment';

export default Ember.Route.extend({
  beforeModel() {
    window.localStorage.clear();

    const store = this.get('store');

    // Create the habit
    const habit = store.createRecord('habit', {
      id: '7mvv1',
      label: "Did you bite your nails today?"
    });

    // 1 day ago
    store.createRecord('daily-result', {
      habit: habit,
      day: moment().subtract(1, 'days').toDate(),
      isSuccess: true
    });

    // 2 days ago
    store.createRecord('daily-result', {
      habit: habit,
      day: moment().subtract(2, 'days').toDate(),
      isSuccess: false
    });

    // 4 days ago
    store.createRecord('daily-result', {
      habit: habit,
      day: moment().subtract(4, 'days').toDate(),
      isSuccess: true
    });
  }
});
