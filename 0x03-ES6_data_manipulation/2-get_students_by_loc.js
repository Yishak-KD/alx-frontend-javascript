export default function getStudentsByLocation(a, b) {
  return a.filter(item => item.location === b);
}
