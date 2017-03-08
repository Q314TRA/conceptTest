(function(){
	var promisseI18n = $.getJSON( "language.json")

	promisseI18n.then(function( i18n ) {		
		var userLang = navigator.language || navigator.userLanguage;
		var currentLanguage = Object.keys(i18n).filter(function (lang) {
			return userLang.indexOf(lang) != -1;
		}).reduce(function (a,b,o) {
			return i18n[b];
		}, {})
		return currentLanguage;
	}).then(function  (currentLanguage) {
		$("[data-i18n-key]").each(function(index,val) {
			var key = $(val).attr("data-i18n-key");			
			$(val).html(currentLanguage[key]||$(val).html())
		})
	})
})();

