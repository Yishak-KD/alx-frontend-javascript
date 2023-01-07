export default function getBudgetObject(...args) {
  for (const property in args) {
    var budget = {
      income: args[property - 2],
      gdp: args[property - 1],
      capita: args[property],
    };
  }
  return budget;
}
