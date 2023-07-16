const moment = require('moment');

const dateFormat = (timestamp) => {
    return moment(timestamp).format('MMM DD, YYYY [at] hh:mm a');
};

module.exports = dateFormat;