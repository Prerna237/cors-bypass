

chrome.webRequest.onHeadersReceived.addListener(function callback (details)
{
	if (details.method === "POST" || details.method === "OPTIONS")
	{
		let headersObj = details.responseHeaders;
		if (headersObj)
		{
			let str = '';
			headersObj.forEach(element =>
			{
				str += '\n' + JSON.stringify(element);
			});
			alert(str);
		} else
		{
			alert(JSON.stringify(details));
		}
	}
}, {urls: ["<all_urls>"]}, ["responseHeaders"]);

// function handleRequestFinished (request)
// {
// 	console.log("Server IP: ", request.serverIPAddress);
// 	request.getContent().then(content =>
// 	{
// 		console.log("Content: ", content);
// 	});
// }

// browser.devtools.network.onRequestFinished.addListener(handleRequestFinished);