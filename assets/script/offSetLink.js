import { pushPageTable } from './pushTab.js'
import { pushPageEntreis } from './pushEntries.js'
import { pushPagination } from './pushPagition.js'

export function offSetLink(
	customers,
	containerDomPagination,
	firstLinkPagination,
	stepLinkPagination,
	listDomPagination,
	firstDomEntries,
	lastDomEntries,
	totalDomEntries,
	mainCostumersTbody) {

	const totalLinkIndexId = Math.ceil(customers.length / 8);
	containerDomPagination.addEventListener('click', (e) => {
		e.preventDefault()
		let nextLinkIndexId;
		let pushElIdName = e.target.id;
		let mainContainerIdName = 'arrowButtonContainer';
		let slaveContainerIdName = 'scrollButtonContainer';

		const offsetStep = 1;
		const pushLinkIndexId = +pushElIdName.split('-')[1];
		const itemPrevDom = listDomPagination.querySelector('.is-active');
		const prevLinkIndexId = +itemPrevDom.id.split('-')[1];
		let itemNextDom = {};
		if (pushElIdName === itemPrevDom.id) {
			return;
		}
		if (pushElIdName === mainContainerIdName) {
			// захист від помилок тик до контейнеру
			return;
		} else if (pushElIdName === slaveContainerIdName) {
			// захист від помилок тик до контейнеру
			return;
		} else if (pushElIdName === 'nextBtnSlide') {
			// жмаканя на 'next'
			nextLinkIndexId = prevLinkIndexId + offsetStep;
			if (nextLinkIndexId > totalLinkIndexId) {
				nextLinkIndexId = totalLinkIndexId;
				return;
			}
			itemNextDom = listDomPagination.querySelector('#link-' + `${nextLinkIndexId}`);
			itemNextDom.classList.add("is-active");
			itemPrevDom.classList.remove("is-active");

		} else if (pushElIdName === 'prevBtnSlide') {
			// жмаканя на 'prev'
			nextLinkIndexId = prevLinkIndexId - offsetStep;
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