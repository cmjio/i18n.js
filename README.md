jQuery Internationalization (i18n) Plugin by Chris Johnson
=======

This is a lightweight jQuery function for translating strings of text on html pages.  This plugin detects the language set by the user in their browser or by using a forced language in the your javascript.

### Quick Start

The language files are `.json` files located by default in `js/lang` in your directory, this can be changed using the plugin options.  For each language their should be a seperate language file.  This can be formated in any why that suits your project.  An example language file for our example can be found in `example/js/lang`.  The file names for these language files should take the following format:

	i18n_en-US.json
	i18n_fr.json
	i18n_en-UK.json

To start getting your HTML5 files supporting international languages start by including the latest jQuery library in your source then this jQuery plugin.  Use `jquery.i18n.min.js` for a minified version or `jquery.i18n.js` if you would prefer to view the source.

On the elements you wish translated to your desired language from your language file use put data-attributes on those elements called `data-translate=""`.

	$('[data-translate]').i18n();

[![endorse](http://api.coderwall.com/edgeui/endorsecount.png)](http://coderwall.com/edgeui)