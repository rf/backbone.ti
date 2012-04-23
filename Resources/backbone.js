// set some globals that Backbone expects to exist
location = '';
_ = require('vendor/underscore');
jQuery = function (arg) { arg = arg || {}; arg.attr = function() {return this;}; return arg; }; 
jQuery.attr = function () { return this; };
document = {
   createElement: function () {}
};
exports = {};

Ti.include('vendor/backbone.js');

if (exports.View) {
   module.exports = exports;
} else {
   module.exports = Backbone;
}
