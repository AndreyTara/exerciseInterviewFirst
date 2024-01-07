import { pushPageEntreis } from './pushEntries.js'
import { pushPagination } from './pushPagition.js'
import { pushPageTable } from './pushTab.js'

export function offSetLink(customers, 
	containerDomPagination,
	 firstLinkPagination, 
	 stepLinkPagination, 
	 listDomPagination, 
	 firstDomEntries,
	 lastDomEntries, 
	 totalDomEntries,
	 mainCostumersTbody) {

	const maxLinkIndexId = Math.ceil(customers.length / 8);
	containerDomPagination.addEventListener('click', (e) => {
		e.preventDefault();
		let nextLinkIndexId;
		let pushElId = e.target.id;
		const pushLinkIndexId = +pushElId.split('-')[1];
		const itemPrevDom = listDomPagination.querySelector('.is-active');
		const prevLinkIndexId = +itemPrevDom.id.split('-')[1];
		let itemNextDom = {};
		if (pushElId === itemPrevDom.id) {
			return;
		}
		if (pushElId === 'arrowButtonContainer') {
			// захист від помилок тик до контейнеру
			return;
		} else if (pushElId === 'scrollButtonContainer') {
			// захист від помилок тик до контейнеру
			return;
		} else if (pushElId === 'nextBtnSlide') {
			// жмаканя на 'next'
			nextLinkIndexId = prevLinkIndexId + 1;
			if (nextLinkIndexId > maxLinkIndexId) {
				nextLinkIndexId = maxLinkIndexId;
				return;
			}
			itemNextDom = listDomPagination.querySelector('#link-' + `${nextLinkIndexId}`);
			itemNextDom.classList.add("is-active");
			itemPrevDom.classList.remove("is-active");

		} else if (pushElId === 'prevBtnSlide') {
			// жмаканя на 'prev'
			nextLinkIndexId = prevLinkIndexId - 1;
			if (nextLinkIndexId < 1) {
				nextLinkIndexId = 1;
				return;
			}
			itemNextDom = listDomPagination.querySelector('#link-' + `${nextLinkIndexId}`);
			itemNextDom.classList.add("is-active");
			itemPrevDom.classList.remove("is-active");
		} else if (typeof (pushLinkIndexId) === 'number') {
			// жмаканя на 'number'
			nextLinkIndexId = pushLinkIndexId;
			itemNextDom = listDomPagination.querySelector('#link-' + `${nextLinkIndexId}`);
			itemNextDom.classList.add("is-active");
			itemPrevDom.classList.remove("is-active");
		}

		pushPageEntreis(customers, firstDomEntries, lastDomEntries, totalDomEntries, nextLinkIndexId);

		pushPageTable(customers, mainCostumersTbody, nextLinkIndexId);

		pushPagination(customers, firstLinkPagination, stepLinkPagination, listDomPagination, nextLinkIndexId)
	})
} 