export function pushPageEntreis(
  arrData,
  firstDomEntries,
  lastDomEntries,
  totalDomEntries,
  page
) {
  let totalNumberElements = arrData.length;
  let firstNUmberElements = page * 8 - 7; //start count for '1'
  let lastNumberElements = page * 8;
  firstDomEntries.textContent = firstNUmberElements;
  if (totalNumberElements > lastNumberElements) {
    lastDomEntries.textContent = lastNumberElements;
  } else {
    lastDomEntries.textContent = totalNumberElements;
  }
  if (totalNumberElements % 1000 === 0) {
    totalNumberElements = `${totalNumberElements / 1000}` + "k";
  }
  totalDomEntries.textContent = totalNumberElements;
}
