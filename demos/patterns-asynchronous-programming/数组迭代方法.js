//结合异步函数使用 map 、 filter 和 reduce ，不过它们的行为并不直观

const asyncOperate = (val) => new Promise(resolve => setTimeout(resolve, 1000, val));

// map
async function main1() {
  //map中async函数把每一次迭代的结果封装成了promise
  return [1, 2, 3, 4].map(async (val) => {
    const v = await asyncOperate(val);
    return v * 2;
  });
}

main1().then((v) => console.log('main1: ', v));
main1().then(v => Promise.all(v)).then(v => console.log('main1-1: ', v));

// filter
async function main2() {
  return [1, 2, 3, 4].filter(async (val) => {
    const v = await asyncOperate(val);
    return v % 2 === 0;
  });
}

main2().then((v) => console.log('main2: ', v));

// filter 修改
async function main3() {
  const promises = [1, 2, 3, 4].map(async (val) => {
    const v = await asyncOperate(val);
    return {
      val,
      condition: v % 2 === 0
    };
  });

  // console.log('promises: ', promises);
  return Promise.all(promises)
    .then(vals => vals.filter(val => val.condition).map(val => val.val))
}

main3().then(v => console.log('main3: ', v));

// reducer
async function main4() {
  return [1, 2, 3, 4].reduce(async (pre, cur, idx) => {
    return await pre + await asyncOperate(cur);
  }, Promise.resolve(0));
}

main4().then(v => console.log('main4: ', v));


async function main5() {
  return await Promise.resolve(0);
}

main5().then(v => console.log('main5: ', v));
