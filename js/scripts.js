// The names listed below are ordered by days from Sunday
const maleAkanNames, femaleAkanNames;

maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

function fetchFormData() {
  let form = document.forms[0];
  let day, month, year, gender;

  day = parseInt(form.day.value);
  month = parseInt(form.month.value);
  year = parseInt(form.year.value);
  gender = form.gender.value;

  return [day, month, year, gender];
}
/**
 * Initialize calcWeekDay function.
 * The function calculates the day of the week from a specific date.
 */
function calculateWeekDay(birthDate) {
  let dayOfMonth, monthOfYear, zeroBasedCentury, yearOfCentury;

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

  let dayOfWeek =
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
function getAkanName(gender) {
  let weekDay = calcWeekDay();

  if (gender === "Male") {
    alert("Your Akan Name is: " + maleAkanNames[weekDay]);
  } else {
    alert("Your Akan Name is: " + femaleAkanNames[weekDay]);
  }

  return false;
}
