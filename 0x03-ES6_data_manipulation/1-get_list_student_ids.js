export default function getListStudentIds(a) {
  if (Array.isArray(a) == false) {
    return a.map((item) => item.id);
  }
  return [];
}
