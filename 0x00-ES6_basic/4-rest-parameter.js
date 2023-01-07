export default function returnHowManyArguments(...args) {
  let TotalArgs = 0;
  let arg;
  for (arg in args) {
    TotalArgs += 1;
  }
  return TotalArgs;
}
