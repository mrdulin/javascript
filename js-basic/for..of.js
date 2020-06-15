const names = ['shanghai', 'beijing', 'guangzhou', 'shenzhen'];
const nameLen = names.length;


// for
// 缺点：麻烦

// for(let i = 0; i < nameLen; i++) {
//     console.log(names[i]);
//     if(names[i] === 'guangzhou') {
//         break;
//     }
// }


// forEach
// 缺点: 不能使用break和return退出遍历

// names.forEach((name, index) => {
//     console.log(name);
//     if(name === 'guangzhou') {
//         //不能使用break和return退出遍历
//     }
// });


// for in
// for...in循环遍历的是字符串的每个字母的索引，数组元素的索引。
// for...in循环还会遍历对象上手动添加的其他key，甚至包括原型链上的键。
// 某些情况下，for...in循环会以任意顺序遍历键名。

// names.additional = 'aaaa';
// for (let key in names) {
//     console.log(key);   //0, 1, 2, 3, 'additional'
// }

// for of
// 不错哦
for(let name of names) {
    console.log(name);
    if('guangzhou' === name) {
        break;
    }
}

for(let char of 'novaline') {
  console.log(char)
}


function init(initNum) {
    return {plus: function(pn) {
        return {minus: function(mn) {
            return initNum + pn - mn;
        }}
    }}
}


let a = init(5).plus(3).minus(6);

const init_v2 = initNum => ({plus: (pn) => ({minus: (mn) => {
  return initNum + pn - mn;
}})});

let b = init_v2(5).plus(3).minus(6);
