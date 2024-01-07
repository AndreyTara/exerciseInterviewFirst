export function pushPagination(
	arrData,
	firstLinkPagination,
	stepLinkPagination,
	paginationListDom,
	currentPage) {
	paginationListDom.innerHTML = '';
	let [fragmentTbodyTr, styleIsActive] = '';
	const lastLink = Math.ceil(arrData.length / 8);
	let indexLink = [0, 0, 0, 0, 0, 0];
	let indexPoint = [0, 0, 0, 0, 0, 0];
	if (lastLink < 7) {
		indexLink = [1, 2, 3, 4, 5, 6];
		indexPoint = [0, 0, 0, 0, 0, 0];
	} else if (currentPage <= stepLinkPagination) {
		indexLink = [firstLinkPagination, firstLinkPagination + 1, firstLinkPagination + 2, firstLinkPagination + 3, firstLinkPagination + 4, lastLink];
		indexPoint = [0, 0, 0, 0, firstLinkPagination + 4, 0];
	} else if (currentPage >= lastLink - stepLinkPagination) {
		indexLink = [firstLinkPagination, lastLink - 4, lastLink - 3, lastLink - 2, lastLink - 1, lastLink]
		indexPoint = [0, lastLink - 4, 0, 0, 0, 0];
	} else if ((currentPage <= lastLink - stepLinkPagination) & (currentPage > stepLinkPagination)) {
		indexLink = [firstLinkPagination, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, lastLink]
		indexPoint = [0, currentPage - 2, 0, 0, 0, currentPage + 2, 0];
	}

	for (let i = 1; i < lastLink + 1; i++) {
		let currentIndexId = indexLink[i - 1];
		if (typeof (indexLink[i - 1]) === 'number') {
			let currentValue = currentIndexId;
			let currentStyle = 'main-costumers-link'

			if (indexLink[i - 1] === indexPoint[i - 1]) {
				currentValue = '...'; //...&#8230;
				currentStyle = '';
			} else {
				currentValue = currentIndexId;
				currentStyle = 'main-costumers-link';
			}

			if (currentPage === currentIndexId) {
				styleIsActive = 'is-active';
			}

			fragmentTbodyTr = `<li class=".main-costumers-item" > 
			<a class="${currentStyle} ${styleIsActive}" id='link-${currentIndexId}' href=""> 
			${currentValue} 	</a> </li>`
			paginationListDom.innerHTML += fragmentTbodyTr;
			styleIsActive = '';
		}
	}
}