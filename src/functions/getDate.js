export default function getDates(currentDate) {
  let DateTime = new Date(currentDate);
  return DateTime.toLocaleTimeString('en-US');
}
