/*	Function to clear a specific item from history using the History API. */
function clearHistory(historyItem){
	chrome.history.deleteUrl({
		"url": historyItem
	});
}

/*	Call clearHistory when a website is added to history. */
chrome.history.onVisited.addListener(function(historyItem){
	clearHistory(historyItem.url);
});
