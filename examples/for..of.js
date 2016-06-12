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
// 缺点：数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
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
