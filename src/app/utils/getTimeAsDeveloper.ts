/**
 * Returns amount of years i have been a developer since startdate to current date
 */
export function getTimeAsDeveloper() {
  const today = new Date();
  const startdate = new Date("2022-01-08");
  return today.getFullYear() - startdate.getFullYear();
}
