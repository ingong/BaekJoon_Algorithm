function deepCopy(obj) {
  if (obj === null || typeof (obj) !== "object") return obj;
    
  let copy = {};
  for(let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const mainObject = {
  a: 1,
  b: 2,
  c: {
    x: 3,
    y: 4
  }
};

const copyObject = deepCopy(mainObject);
console.log(mainObject);
console.log(copyObject);