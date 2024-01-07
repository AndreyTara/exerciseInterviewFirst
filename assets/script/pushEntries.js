export function pushPageEntreis(arrData, firstDomEntries, lastDomEntries, totalDomEntries, page) {
	const totalNumberElements = arrData.length;
	totalDomEntries.textContent = totalNumberElements;
	let firstNUmberElements = page * 8 - 7;//start count for '1'
	let lastNumberElements = page * 8;
	firstDomEntries.textContent = firstNUmberElements;
	if (totalNumberElements > lastNumberElements) {
		lastDomEntries.textContent = lastNumberElements;
	} else {
		lastDomEntries.textContent = totalNumberElements;
	}
}
