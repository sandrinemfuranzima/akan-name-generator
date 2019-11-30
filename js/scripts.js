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
function calcWeekDay(form) {
  var dd, mm, yy;
  var cc, yc, dayOfWeek;

  dd = parseInt(form.day.value);
  mm = parseInt(form.month.value);
  yy = parseInt(form.year.value);

  // cc = centuryCode; yc = yearCode;
  cc = parseInt(yy / 100);
  yc = yy % 100;

  dayOfWeek = (dd + 2.6 * (mm + 1) + yc + yc / 4 + cc / 4 - 2 * cc - 1) % 7;
  return parseInt(dayOfWeek) - 1;
}

var form = document.forms[0];
