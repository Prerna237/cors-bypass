let btn = document.getElementById('btn');
  
btn.onclick = function (element)
{
	alert("Hello!");

	chrome.webRequest.onHeadersReceived.addListener(function callback(details)
	{
		if (details.method === "POST" || details.method === "OPTIONS")
		{
			let headersObj = details.responseHeaders;
			if (headersObj)
			{
				let str = '';
				headersObj.forEach(element => {
					str += '\n' + JSON.stringify(element);
				});
				alert(str);	
			}else{
				alert(JSON.stringify(details));
			}
		}
	}, {urls: ["<all_urls>"]}, ["responseHeaders"]);

};