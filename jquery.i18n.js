/**
 * jQuery i18n Plugin
 * Author: Chris Johnson
 * Contact: me@chrismj.net
 */

(function($) {
// What does the pluginName plugin do?
$.fn.i18n = function(options) {

  if (!this.length) { return this; }

  var opts = $.extend(true, {}, $.fn.i18n.defaults, options);

  var valueForKey = function(key, data) {
    var keys, value, _i, _len;
    keys = key.split(/\./);
    value = data;
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
      key = keys[_i];
      value = value != null ? value[key] : null;
    }
    return value;
  };

  this.each(function() {
    var $this = $(this);
    var language = opts.forceLanguage || window.navigator.userLanguage || window.navigator.language;
	var fileName = opts.path +'/'+ opts.namespace +'_'+ language +'.json';

	$.getJSON(fileName, function(data) {
		var key = $this.data('translate');
		value = valueForKey(key, data);
		$this.html(value);
	});
    
  });

  return this;
};

// default options
$.fn.i18n.defaults = {
  namespace: 'i18n',
  path: 'js/lang',
  forceLanguage: null
};

})(jQuery);
