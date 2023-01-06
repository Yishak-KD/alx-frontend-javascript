export default function getListStudentIds(a) {
  if (Array.isArray(a) === false) {
    return [];
  }
  let newt = a.map((item) => item.id);
  return newt;
}
