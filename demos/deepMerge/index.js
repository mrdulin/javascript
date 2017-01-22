/**
 * Created by dulin on 17/1/20.
 */

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function deepMerge(target, source) {
    var result = Object.assign({}, target);
    if(isObject(target) && isObject(source)) {
        //遍历source中的key
        for(var key in source) {
            //排除原型上的key
            if(source.hasOwnProperty(key)) {
                //source[key]是对象
                if(isObject(source[key])) {
                    //target中不包含source的key
                    if(!target[key]) {

                        Object.assign(result, {[key]: source[key]});

                    //target中包含source的key, 使用target[key]和source[key]做递归merge
                    } else {
                        if(isObject(target[key])) {
                            result[key] = deepMerge(target[key], source[key]);
                        } else {
                            Object.assign(result, {[key]: source[key]});
                        }
                    }
                //source[key]不是对象也不是数组, source[key]覆盖target[key]
                } else {
                    Object.assign(result, {[key]: source[key]});
                }

            }
        }
    }

    return result;
}


module.exports = deepMerge;