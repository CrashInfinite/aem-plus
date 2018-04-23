document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("first").addEventListener("click", handler_one);
});

function handler_one() {
	document.getElementById('first').innerHTML = "<i class='icon ion-code'></i><span> Edit CSS Query String - CLICKED</span>";

	chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
		var customParam = encodeURI('customparam=1');
    	var url = tab[0].url
    	var hashStart = (url.indexOf('#') === -1) ? url.length : url.indexOf('#');
    	console.log(hashStart);
  		var querySymbol = (url.indexOf('?') === -1) ? '?' : '&';
  		var newUrl = url.substring(0, hashStart) + querySymbol + customParam +
               url.substring(hashStart);

    	chrome.tabs.update(undefined, {url: newUrl});
	});

};
