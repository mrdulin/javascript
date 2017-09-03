const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('章向明');
    }, 1000);
  });
}

getData().then((data) => {
  if(data === '章向明') {
    throw new Error('这是一个傻逼');
  }
}).catch(err => {
  console.log(err);
});
