/**
 * @desc 多态函数意味着函数在执行期间的行为由传入的具体参数决定
 */
function morph(options) {
    var args = [].slice.call(arguments, 0),
        animals = 'turtles';
    if(typeof options === 'string') {
        animals = options;
        args.shift();
    }
    //"The pet store has " + [3] + " cats" => "The pet store has 3 cats"
    return ('The pet store has ' + args + ' ' + animals);
}

console.log(morph('cats', 3));
console.log(morph('dogs', 4));
console.log(morph(2));