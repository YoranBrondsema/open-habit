import moment from 'npm:moment';

function isSameDay(day1, day2) {
  if (moment.isMoment(day1)) {
    day1 = day1.toDate();
  }
  if (moment.isMoment(day2)) {
    day2 = day2.toDate();
  }

  return Ember.isPresent(day1) && Ember.isPresent(day2) &&
    day1.getDate() === day2.getDate() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getFullYear() === day2.getFullYear();
}

export {
  isSameDay
};
