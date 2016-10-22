import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['habit-display'],

  /* Actions */
  actions: {
    delete() {
      return this.get('habit').destroyRecord();
    }
  }
});
