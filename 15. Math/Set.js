const log = console.log;
const A = [2, 3];
const B = [2, 3, 4];

const isAbelongToB = A.every(v => B.includes(v));
log(isAbelongToB);
const design = `
  A가 B에 포함관계인지 확인하는 방법
  A를 every로 순회, 그리고 B가 includes 하는지

`