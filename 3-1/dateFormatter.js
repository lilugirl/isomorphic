'use strict';

var moment = require('moment');

var formatDate = function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

module.exports = formatDate