// async-await to Promise
async function a() {
  console.log('2');
  // await전까지는 동기 부분이다.
  const a = await 1;
  console.log('4');
  console.log('a', a);
  console.log('hmm');
  const c = await null;
  console.log('c', c);
  const b = await Promise.resolve(1);
  return a + b;
}

console.log('1');
a().then((result1) => {
  console.log(result1);
}).then((result2) => {
  console.log(result2);
})
console.log('3');

Promise.resolve(1)
  .then((a) => {
    console.log('a', a);
    console.log('hmm');
    return [a, null];
  })
  .then((args) => {
    return Promise.all(args.concat(Promise.resolve(1)));
  })
  .then((b) => {
    console.log('b', b);
    return b;
  })

// 1, 2, 3, 4, a, hmm, null, 2, undefined
// async -> await (await 이 then이다) async는 오른쪽에서 쪽쪽/ promise 왼쪽에서 오른쪽
// promise가 아닌 값이면 Promise.resolve
// await 사이가 기준이고 


async function a(){
	const p1 = await delayP(3000, 'p1');
	const p2 = await delayP(3000, 'p2');
	console.log(p1, p2); // 6초 소요됨
}

async function b(){
	const p1 = delayP(3000, 'p3');
	const p2 = delayP(3000, 'p4');
  Promise.allSettled(([p1, p2])).then(result => {
    console.log(result);
  })
}

a();
b();

function delayP(ms, text) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, text);
  })
}

(async function() {
  console.time('소요시간');
  try {
    await delayP(1000);
    await delayP(2000);
    await delayP(3000);   
  } catch (e) {
    console.log(e);
  }
  console.timeEnd('소요시간');

  console.time('Promise.all 소요 시간');
  try {
    const p1 = delayP(1000);
    const p2 = delayP(2000);
    const p3 = delayP(3000);
    await Promise.allSettled([p1, p2, p3])
  } catch (e) {
    console.log(e);
  }
  console.timeEnd('Promise.all 소요 시간')
  
})();


