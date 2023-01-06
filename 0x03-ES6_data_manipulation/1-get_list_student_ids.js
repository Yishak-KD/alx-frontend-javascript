export default function getListStudentIds(a) {
    if (Array.isArray(a) == false) {
        return "[]";
    }
    return a.map(item => item.id);
}
