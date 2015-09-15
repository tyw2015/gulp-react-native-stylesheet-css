var Handle = require('./Handle');

var format = require('./properties/all'),
	margingAndPadding = require('./properties/marginAndPadding'),
	boxShadow = require('./properties/boxShadow'),
	final = require('./saveAll');

module.exports = function (css) {
	var handle = new Handle(css);

	handle.use(['margin', 'padding'], margingAndPadding);
	handle.use(['box-shadow', 'boxShadow'], boxShadow);
	handle.use(format);

	handle.final(final);

	return handle.do();
};
