export default function getListStudentIds(a) {
  if (Array.isArray(a)) {
    return a.map((item) => item.id);
  }
  return [];
}
