const timeout = (num, duration = 5000) => {
    return new Promise((resolve, reject) => {
        if(num > 10) {
            reject('Num must be less than 10');
        } else {
            setTimeout(() => {
                resolve(num + 10);
            }, duration);
        }
    });
};


const asyncTimeout = async (duration) => {
    try {
        let a = await timeout(10, duration);
        let b = await timeout(2, duration);

        return [a, b]
    } catch(e) {
        throw new Error(e);
    }

};

const result = asyncTimeout(1000);

result.then((data) => {
    process.stdout.write(`${data}\n`);
}).catch((err) => {
    console.log('promise catch error:', err);
});



//value map data
const feedbackTypes = {
    perfect: 'p',
    excellent: 'e',
    goodJob: 'g',
    notBad: 'n',
    keepTrying: 'k'
}

const internalUrls = {
    imgPerfect: 'ip',
    imgExcellent: 'ie',
    imgGoodJob: 'ig',
    imgNotBad: 'in',
    imgKeepTrying: 'ik'
}

// map = {};
// p --> ip
// e --> ie
// g --> ig
// n --> in
// k --> ik

// url = map[feedback];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getValueMap = (feedbackTypes, internalUrls) => {
    let valueMap = {};

    const feedbackTypesKeys = Object.keys(feedbackTypes);

    feedbackTypesKeys.forEach((feedbackTypesKey, index, self) => {
        valueMap[feedbackTypes[feedbackTypesKey]] = internalUrls['img' + capitalizeFirstLetter(feedbackTypesKey)];
    });

    return valueMap;
}


const valueMap = getValueMap(feedbackTypes, internalUrls);

console.dir(JSON.stringify(valueMap),'\n');

const url = valueMap['p'] || 'defaultUrl';

console.log(`${url}\n`);
