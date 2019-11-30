// The names listed below are ordered by days from Sunday
var maleAkanNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
var femaleAkanNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];

/**
 * Initialize and invoke calcWeekDay function.
 * The function calculates the day of the week from a specific date.
 * It returns the dayOfWeek as a zero-based index:: Sunday === 0;
 */
function calcWeekDay(day, month, year) {
  var cc, yc, dayOfWeek;

  // cc = centuryCode; yc = yearCode;
  cc = parseInt(year / 100);
  yc = year % 100;

  dayOfWeek = (day + 2.6 * (month + 1) + yc + yc / 4 + cc / 4 - 2 * cc - 1) % 7;
  return parseInt(dayOfWeek) - 1;
}

calcWeekDay(12, 16, 1997);
