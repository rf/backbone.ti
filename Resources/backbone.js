this.location = '';
this._ = require('vendor/underscore');
this.jQuery = function (arg) { arg = arg || {}; arg.attr = function() {return this;}; return arg; }; 
this.jQuery.attr = function () { return this; };
this.document = {
   createElement: function () {}
};

Ti.include('vendor/backbone.js');

module.exports = this.Backbone;
