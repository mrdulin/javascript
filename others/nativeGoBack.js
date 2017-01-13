const goBackRuleMap = {
    duojinAll: {
        paths: ['duojin', 'yao-detail', 'yao-fillordercard', 'duojin-paysuccess'],
        goPath: 'yao-detail'
    },
    //夺金商详
        duojinDetail: {
            paths: ['duojin', 'yao-detail'],
            goPath: 'duojin'
        }
}

/**
 * @description 获取第一级路由
 * @returns {string}
 */
const getBaseRoute = (hash) => {
    return hash.split('/')[1];
}

/**
 * @desc 根据基础路由返回完整路由hash
 * @returns {string}
 *
 * ['/duojin', '/yao-detail/20032341/2561870503?page_source=chop'], 'yao-detail'
 * 返回'/yao-detail/20032341/2561870503?page_source=chop'
 */
// const getGoBackHash = (paths, baseRoute) => {
//     const baseRouteIndex = paths.findIndex((path, index) => {
//         return path.indexOf(baseRoute) !== -1;
//     });
//     return paths[baseRouteIndex];
// }


const getGoBackHash = (paths, baseRoute) => {
    let routeIndex;
    paths.forEach((path, index) => {
        if( path.indexOf(baseRoute) !== -1 && typeof routeIndex === 'undefined') {
            routeIndex = index;
        }
    });
    return paths[routeIndex];
}
/**
 * @description 测试pathAllHistory中的路径是否包含某一个返回逻辑规则
 * @returns {boolean}
 */
const getGoBackHashByHistorys = (historys) => {
    const rules = Object.keys(goBackRuleMap);
    const historyBaseRoutes = historys.map(getBaseRoute);
    let rule, rulePaths, isFindRule, ruleKey;

    for (let i = 0, ruleLen = rules.length; i < ruleLen; i++) {
        rule = rules[i];
        rulePaths = goBackRuleMap[rule].paths;
        isFindRule = rulePaths.every((rulePath, idx) => {
            return historyBaseRoutes.indexOf(rulePath) !== -1;
        });
        if (isFindRule) {
            ruleKey = rule;
            break;
        }
    }

    if(!ruleKey) return;

    rule = goBackRuleMap[ruleKey];
    const finalRoute = getGoBackHash(historys, rule.goPath);
    return finalRoute;
}

const test1 = ['/duojin/123', '/yao-detail/20032341/2561870503?page_source=chop', '/yao-fillordercard', '/duojin-paysuccess/adsf?q=123'];
const test2 = ['/duojin/123', '/yao-detail/20032341/2561870503?page_source=chop', '/duojin-paysuccess/adsf?q=123'];

console.log('test1: ' + getGoBackHashByHistorys(test1))
console.log('test2: ' + getGoBackHashByHistorys(test2))
