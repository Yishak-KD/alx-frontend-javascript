export default function getStudentsByLocation(arr) {
  return arr.reduce(((result, item) => result + item.id), 0);
}

