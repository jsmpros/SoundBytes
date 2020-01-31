/*
 * jsmpros.com
 * for demonstration purposes only
 * use at your own risk
 */
(function () {
	var oJetRootUrl = (function (scriptId) {
		var mainUrl = /*window.strCurrUrl ||*/ window.location.href;
		var parts =
			mainUrl.match(/ps[pc]\/(.+?)(?:_)*?(?:\d)*?\/(.+?)\/(.+?)\/[chs]\//);
		return '/' + parts[1] + '/oraclejet/';
	}());

	window.require = ({
		// Path mappings for the logical module names
		paths: {
			'knockout': oJetRootUrl + 'js/libs/knockout/knockout-3.4.0',
			'jquery': oJetRootUrl + 'js/libs/jquery/jquery-3.1.1.min',
			'jqueryui': oJetRootUrl + 'js/libs/jquery/jquery-ui-1.12.0.custom.min',
			'jqueryui-amd': oJetRootUrl + 'js/libs/jquery/jqueryui-amd-1.12.0.min',
			'promise': oJetRootUrl + 'js/libs/es6-promise/es6-promise.min',
			'hammerjs': oJetRootUrl + 'js/libs/hammer.js/hammer-2.0.8.min',

			'ojdnd': oJetRootUrl + 'js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
			'ojs': oJetRootUrl + 'js/libs/oj/v4.0.0/min',
			'ojL10n': oJetRootUrl + 'js/libs/oj/v4.0.0/ojL10n',
			'ojtranslations':  oJetRootUrl + 'js/libs/oj/v4.0.0/resources',
			'text': oJetRootUrl + 'js/libs/requirejs/text',
			'signals': oJetRootUrl + 'js/libs/js-signals/js-signals.min',
			'customElements': oJetRootUrl + 'js/libs/webcomponents/custom-elements.min',
			'proj4': oJetRootUrl + 'js/libs/proj4js/dist/proj4-src',
			'css': oJetRootUrl + 'js/libs/require-css/css.min'
		},
		// Shim configurations for modules that do not expose AMD
		shim: {
			'jqueryui-amd': {
				exports: "$",
				deps: ['jquery']
			},
			'jquery': {
				exports: ['jQuery', '$']
			}
		},
		config: {
			ojL10n: {
				merge: {
					//'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
					// The following addes en-US to the r.js bundle
					//'ojtranslations/nls/ojtranslations': '../../oj/resources/nls/en-US/localeElements'
				}
			}
		}
	});
}());