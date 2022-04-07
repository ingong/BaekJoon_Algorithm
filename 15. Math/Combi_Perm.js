const log = console.log;
const array = ['A', 'B', 'C'];

const getCombination = (array, selectedNum) => {
  if (selectedNum === 1) return array.map(v => [v]);
  const result = [];
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getCombination(rest, selectedNum - 1);
    combination.forEach((combi) => result.push([fixed, ...combi]));
  })
  return result;
}

const getRepeatCombination = (array, selectedNum) => {
  if (selectedNum === 1) return array.map(v => [v]);
  const result = [];
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index);
    const combination = getCombination(rest, selectedNum - 1);
    combination.forEach((combi) => result.push([fixed, ...combi]));
  })
  return result;

}


const getPermutation = (array, selectedNum) => {
  if (selectedNum === 1) return array.map(v => [v]);
  const result = [];
  array.forEach((fixed, index, origin) => {
    const rest = [...origin];
    rest.splice(index, 1);
    const combination = getCombination(rest, selectedNum - 1);
    combination.forEach((combi) => result.push([fixed, ...combi]));
  })
  return result;
}

const getRepeatPermutation = (array, selectedNum) => {
  if (selectedNum === 1) return array.map(v => [v]);
  const result = [];
  array.forEach((fixed, index, origin) => {
    const rest = [...origin];
    const combination = getCombination(rest, selectedNum - 1);
    combination.forEach((combi) => result.push([fixed, ...combi]));
  })
  return result;
}

const result1 = getCombination(array, 2); // 3
const result2 = getRepeatCombination(array, 2); // 6 (AA, AB, AC, BB, BC) 
const result3 = getPermutation(array, 2); // 6
const result4 = getRepeatPermutation(array, 2); // 9 (AA, AB, AC, BA, BB, BC, CA, CB, CC)

log(result1);
log(result2);
log(result3);
log(result4);