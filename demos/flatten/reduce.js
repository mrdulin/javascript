function flatten(array) {
    return array.reduce(function(a, b) {
        return a.concat(Array.isArray(b) ? flatten(b) : b);
    }, []);
}

module.exports = flatten;