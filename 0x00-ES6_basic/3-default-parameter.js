export default function getSumOfHoods(...args) {
  if (args[1] === undefined) {
    args[1] = 89;
  }

  if (args[2] === undefined) {
    args[2] = 19;
  }
  return args[0] + args[1] + args[2];
}
