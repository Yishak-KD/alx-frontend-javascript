export default function ngetListStudentIds(a) {
  if (Array.isArray(a) == false) {
    return "[]";
  }
  let newt = a.map((item) => item.id);
  return newt;
}
