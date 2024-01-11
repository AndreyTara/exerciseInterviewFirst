// import { headerList} from './const.js'
// import { fillMenu } from './fillMenu.js'
// fillMenu(headerList);

import {
	mainCostumersTbody,
	firstDomEntries,
	lastDomEntries,
	totalDomEntries,
	firstLinkPagination,
	stepLinkPagination,
	listDomPagination,
	containerDomPagination
} from './const.js'
import { getRandomMockUserData } from './getData.js'
import { pushPageTable } from './pushTab.js'
import { pushPageEntreis } from './pushEntries.js'
import { pushPagination } from './pushPagition.js'
import { offSetLink } from './offSetLink.js'

let currentPage = 1; //start for '1'

function main() {
	const customers = getRandomMockUserData();

	pushPageTable(customers, mainCostumersTbody, currentPage);

	pushPageEntreis(customers, firstDomEntries, lastDomEntries, totalDomEntries, currentPage);

	pushPagination(customers, firstLinkPagination, stepLinkPagination, listDomPagination, currentPage);

	offSetLink(customers, containerDomPagination, firstLinkPagination, stepLinkPagination, listDomPagination,
		firstDomEntries, lastDomEntries, totalDomEntries, mainCostumersTbody
	);
}

try {
	//наразі асинхрониих операцій нема тому всі помилки будуть перехоплені в цьому try/catch
	main()
} catch (error) {
	console.error(error)
}

