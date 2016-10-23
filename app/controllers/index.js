import Ember from 'ember';

export default Ember.Controller.extend({
  newHabit: Ember.Object.create(),

  /* Actions */
  actions: {
    addHabit() {
      const habit = this.get('store').createRecord('habit', {
        label: this.get('newHabit.label')
      });
      return habit.save();
    },
    clearLocalStorage() {
      window.localStorage.clear();
      window.location.reload();
    }
  }
});
