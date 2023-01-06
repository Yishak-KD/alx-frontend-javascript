export default function getListStudentIds(a) {
  if (Array.isArray(a) == false) {
    return (newt = a.map((item) => item.id));
  }
  return "[]";
}
