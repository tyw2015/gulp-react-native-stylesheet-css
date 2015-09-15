var Handle = require('./Handle');

var format = require('./properties/all');
var margingAndPadding = require('./properties/marginAndPadding');
var final = require('./saveAll');

module.exports = function (css) {
	var handle = new Handle(css);

	handle.use(['margin', 'padding'], margingAndPadding);
	handle.use(format);

	handle.final(final);

	return handle.do();
};
