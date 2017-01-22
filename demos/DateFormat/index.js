function ddmmyy(dateString) {
    var date = new Date(dateString);
    var y = date.getFullYear(),
        month = date.getMonth() + 1;

    m = month < 10 ? '0' + month : month;
    date = date.getDate();
    d = date < 10 ? '0' + date : date;

    return d + '/' + m + '/' + y;
}

module.exports = ddmmyy;


