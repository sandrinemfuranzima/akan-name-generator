// The names listed below are ordered by days from Sunday
var maleAkanNames, femaleAkanNames;
var form;

maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form = document.forms[0];

/**
 * Initialize calcWeekDay function.
 * The function calculates the day of the week from a specific date.
 */
function calcWeekDay(dd, mm, yy) {
  var dayOfMonth, monthOfYear, zeroBasedCentury, yearOfCentury;
  var dayOfWeek;

  dayOfMonth = dd;
  monthOfYear = mm;
  // Split year to centuryCode & yearCode
  zeroBasedCentury = parseInt(yy / 100);
  yearOfCentury = yy % 100;

  // Count Jan & Feb  as months 13 and 14 of the previous year.
  if (mm <= 2) {
    monthOfYear += 12;
    yearOfCentury -= 1;
  }

  dayOfWeek =
    (dayOfMonth +
      parseInt(
        2.6 * (monthOfYear + 1) +
          yearOfCentury +
          parseInt(yearOfCentury / 4) +
          parseInt(zeroBasedCentury / 4) +
          5 * zeroBasedCentury
      )) %
    7;

  // return dayOfWeek as a zero-based index
  // dayOfWeek = (0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)
  return dayOfWeek;
}

/**
 * Initialize getAkanName function.
 * The function calls the calcWeekDay function and get's the user gender .
 * It returns the user's Akan Name with regards to their gender.
 */
function getAkanName() {
  var weekDay = calcWeekDay();
  var gender = form.gender.value;

  if (gender === "Male") {
    alert("Your Akan Name is: " + maleAkanNames[weekDay]);
  } else {
    alert("Your Akan Name is: " + femaleAkanNames[weekDay]);
  }

  return false;
}
